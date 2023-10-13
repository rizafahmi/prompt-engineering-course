import { getCompletion } from "./helpers.js";

const prompt = `Write youtube video title for GPT-4 tutorial`;

const result = await getCompletion(prompt, "gpt-3.5-turbo", 32, 0);
console.log(`Result: ${result}`);

const resultRandom = await getCompletion(prompt, "gpt-3.5-turbo", 32, 1);
console.log(`Result (random): ${resultRandom}`);
