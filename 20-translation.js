import { getCompletion } from "./helpers.js";

const prompt =
  `Beritahu saya ini bahasa apa: "On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux."`;

const result = await getCompletion(prompt);
console.log(result);
