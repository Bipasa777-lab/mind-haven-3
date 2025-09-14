import axios from "axios";

const PYTHON_AI_URL = "http://localhost:8000/chat";

export const callAI = async (text: string, modelName: string) => {
  const response = await axios.post(PYTHON_AI_URL, { text, modelName });
  return response.data;
};
