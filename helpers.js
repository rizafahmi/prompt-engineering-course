import OpenAI from "openai";

export async function getCompletion(prompt, model = "gpt-3.5-turbo") {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const messages = [{ role: "user", content: prompt }];
  const response = await openai.chat.completions.create({
    messages,
    model,
    temperature: 0, // this is the degree of randomness of the model's output [0-1]
  });

  return response.choices[0].message["content"];
}
