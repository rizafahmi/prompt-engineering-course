import { getCompletion } from "./helpers.js";

const prompt =
  `Translate the following from slang to a business letter: 'Dude, my name is Aladin, checkout this awesome blanket!'`;

const result = await getCompletion(prompt);
console.log(result);
