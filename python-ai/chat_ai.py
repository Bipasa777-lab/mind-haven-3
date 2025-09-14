from fastapi import FastAPI
from pydantic import BaseModel
from transformers import AutoTokenizer, AutoModelForSequenceClassification, AutoModelForCausalLM
import torch

app = FastAPI()

# ---- Load models ----
suicide_tokenizer = AutoTokenizer.from_pretrained("./model/suicidality")
suicide_model = AutoModelForSequenceClassification.from_pretrained("./model/suicidality")

chat_tokenizer = AutoTokenizer.from_pretrained("./model/mental_health_chatbot")
chat_model = AutoModelForCausalLM.from_pretrained("./model/mental_health_chatbot")

# ---- Schema ----
class ChatRequest(BaseModel):
    text: str

# ---- Suicide Risk Check ----
def check_suicidality(text: str):
    inputs = suicide_tokenizer(text, return_tensors="pt", truncation=True, padding=True)
    outputs = suicide_model(**inputs)
    probs = torch.softmax(outputs.logits, dim=1)[0]
    return probs[1].item()  # probability of suicidality

# ---- Chatbot Reply ----
def generate_reply(text: str):
    inputs = chat_tokenizer.encode(text + chat_tokenizer.eos_token, return_tensors="pt")
    outputs = chat_model.generate(inputs, max_length=100, pad_token_id=chat_tokenizer.eos_token_id)
    return chat_tokenizer.decode(outputs[:, inputs.shape[-1]:][0], skip_special_tokens=True)

# ---- API Route ----
@app.post("/chat")
async def chat(request: ChatRequest):
    risk_score = check_suicidality(request.text)

    if risk_score > 0.7:  # high risk
        return {
            "risk": True,
            "risk_score": risk_score,
            "reply": "⚠️ I sense you may be in distress. You're not alone — please reach out to a crisis hotline or someone you trust immediately."
        }
    else:
        reply = generate_reply(request.text)
        return {
            "risk": False,
            "risk_score": risk_score,
            "reply": reply
        }
