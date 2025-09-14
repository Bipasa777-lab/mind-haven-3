# chat_ai.py
from fastapi import FastAPI
from pydantic import BaseModel
from transformers import (
    AutoTokenizer,
    AutoModelForSequenceClassification,
    AutoModelForCausalLM
)
import torch
import pandas as pd
from sklearn.ensemble import IsolationForest

app = FastAPI(title="AI Mental Health Service")

# --- Health Check ---
@app.get("/health")
async def health_check():
    return {"status": "ok", "message": "MindHaven AI backend is running 🚀"}

# ---- Load models ----
try:
    suicide_tokenizer = AutoTokenizer.from_pretrained("./models/suicidality")
    suicide_model = AutoModelForSequenceClassification.from_pretrained("./models/suicidality")
except Exception as e:
    suicide_tokenizer, suicide_model = None, None
    print(f"⚠️ Could not load suicidality model: {e}")

try:
    chat_tokenizer = AutoTokenizer.from_pretrained("./models/mental_health_chatbot")
    chat_model = AutoModelForCausalLM.from_pretrained("./models/mental_health_chatbot")
except Exception as e:
    chat_tokenizer, chat_model = None, None
    print(f"⚠️ Could not load chatbot model: {e}")

# --- Stress Level Anomaly Detection Model ---
isolation_forest_model = IsolationForest(random_state=42)
# Dummy data for training (replace with actual historical user data)
dummy_data = pd.DataFrame({
    'sleep_hours': [7, 8, 6, 5, 7, 9, 6, 8, 4, 7],
    'work_hours': [8, 7, 9, 10, 8, 6, 10, 7, 12, 8],
    'social_activity': [3, 4, 2, 1, 3, 5, 1, 4, 0, 3],
    'exercise': [1, 2, 1, 0, 2, 3, 0, 2, 0, 1]
})
isolation_forest_model.fit(dummy_data)

class AnalyticsRequest(BaseModel):
    sleep_hours: int
    work_hours: int
    social_activity: int
    exercise: int

@app.post("/analytics/analyze")
async def analyze_stress_level(request: AnalyticsRequest):
    features = pd.DataFrame({
        'sleep_hours': [request.sleep_hours],
        'work_hours': [request.work_hours],
        'social_activity': [request.social_activity],
        'exercise': [request.exercise]
    })
    # Predict anomaly score (-1 for outlier, 1 for inlier)
    anomaly_score = isolation_forest_model.predict(features)[0]

    if anomaly_score == -1: # Anomaly detected (potential high stress)
        return {"stress_level": 1, "message": "High stress detected ⚠️"}
    else:
        return {"stress_level": 0, "message": "Normal stress level 😊"}

# ---- Schema ----
class ChatRequest(BaseModel):
    text: str
    modelName: str = "mental_health"  # Default model


# ---- Suicide Risk Check ----
def check_suicidality(text: str):
    if not suicide_model or not suicide_tokenizer:
        return 0.0
    inputs = suicide_tokenizer(text, return_tensors="pt", truncation=True, padding=True)
    outputs = suicide_model(**inputs)
    probs = torch.softmax(outputs.logits, dim=1)[0]
    return probs[1].item()  # Probability of suicidality


# ---- Chatbot Reply ----
def generate_reply(text: str):
    if not chat_model or not chat_tokenizer:
        return "⚠️ Chatbot model is not available."
    inputs = chat_tokenizer.encode(text + chat_tokenizer.eos_token, return_tensors="pt")
    outputs = chat_model.generate(
        inputs,
        max_length=100,
        pad_token_id=chat_tokenizer.eos_token_id
    )
    return chat_tokenizer.decode(outputs[:, inputs.shape[-1]:][0], skip_special_tokens=True)


# ---- API Routes ----
@app.get("/")
async def root():
    return {"message": "AI Mental Health Service is running 🚀"}


@app.post("/chat/chat")
async def chat(request: ChatRequest):
    if request.modelName == "suicidality":
        risk_score = check_suicidality(request.text)
        if risk_score > 0.7:  # High risk
            return {
                "risk": True,
                "risk_score": float(risk_score),
                "reply": "⚠️ I sense you may be in distress. You're not alone — please reach out to a crisis hotline or someone you trust immediately."
            }
        else:
            return {
                "risk": False,
                "risk_score": float(risk_score),
                "reply": "It sounds like you are going through a difficult time. Please remember that help is available, and you don't have to face this alone."
            }
    else:  # Default chatbot
        reply = generate_reply(request.text)
        return {
            "risk": False,
            "risk_score": 0.0,
            "reply": reply
        }
