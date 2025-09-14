import translate from "@vitalets/google-translate-api";

export async function translateText(text: string, lang: string) {
  try {
    const res = await translate(text, { to: lang });
    return res.text;
  } catch (err) {
    console.error("Translation error:", err);
    return text; // fallback to original
  }
}
