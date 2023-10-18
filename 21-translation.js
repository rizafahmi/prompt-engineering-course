import { getCompletion } from "./helpers.js";

const prompt =
  `Translate the following text to Bahasa Jawa in both the formal and informal forms: 'Would you like to order a blanket?'`;

const result = await getCompletion(prompt);
console.log(result);
