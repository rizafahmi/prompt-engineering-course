import { getCompletion } from "./helpers.js";

const prompt = `Your task is to answer in a consistent style.

<child>: I want to try to learn how to code.

<grandparent>: Do. Or do not. There is no try.

<child>: I want to learn how to making some money.
`;

const result = await getCompletion(prompt);
console.log(result);
