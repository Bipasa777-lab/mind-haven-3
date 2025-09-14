from transformers import AutoModelForCausalLM, AutoTokenizer, AutoModelForSequenceClassification

# Paths
mental_path = "models/mental_health_chatbot"
suicide_path = "models/suicidality"

print("Downloading thrishala/mental_health_chatbot...")
AutoTokenizer.from_pretrained("thrishala/mental_health_chatbot").save_pretrained(mental_path)
AutoModelForCausalLM.from_pretrained("thrishala/mental_health_chatbot").save_pretrained(mental_path)

print("Downloading sentinet/suicidality...")
AutoTokenizer.from_pretrained("sentinet/suicidality").save_pretrained(suicide_path)
AutoModelForSequenceClassification.from_pretrained("sentinet/suicidality").save_pretrained(suicide_path)

print("✅ All models downloaded into ./model/")
