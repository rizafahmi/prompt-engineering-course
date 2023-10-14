import OpenAI from "openai";

export async function getCompletion(
  prompt,
  model = "gpt-3.5-turbo",
  maxTokens = 128,
  temperature = 0,
) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const messages = [{ role: "user", content: prompt }];
  const response = await openai.chat.completions.create({
    messages,
    model,
    max_tokens: maxTokens, // this is the length of the model's output
    temperature: temperature, // this is the degree of randomness of the model's output [0-1]
  });

  return response.choices[0].message["content"];
}
