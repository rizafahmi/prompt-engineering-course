import { getCompletion } from "./helpers.js";

const prompt =
  `Translate the following English text to Bahasa Indonesia: "Hi, I would like to order black coffee please."`;

const result = await getCompletion(prompt);
console.log(result);
