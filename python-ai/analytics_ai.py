# analytics_ai.py
from fastapi import APIRouter
from pydantic import BaseModel
import pandas as pd
import pickle

# Load your pre-trained stress model
with open("./models/stress_model.pkl", "rb") as f:
    stress_model = pickle.load(f)

router = APIRouter()

class AnalyticsRequest(BaseModel):
    sleep_hours: float
    work_hours: float
    social_activity: float
    exercise: float

@router.post("/analyze")
async def analyze_data(req: AnalyticsRequest):
    # Convert request into DataFrame for scikit-learn model
    df = pd.DataFrame([{
        "sleep_hours": req.sleep_hours,
        "work_hours": req.work_hours,
        "social_activity": req.social_activity,
        "exercise": req.exercise,
    }])

    prediction = stress_model.predict(df)[0]
    return {
        "stress_level": int(prediction),
        "message": "High stress detected ⚠️" if prediction == 1 else "Stress levels are normal ✅"
    }
