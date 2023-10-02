import { getCompletion } from "./helpers.js";

const text = `One random sentence without any instruction.`;

const prompt =
  `You will be provided with text delimited by triple quotes. If it contains a sequencee of instruction, rewrite those instructions in the following format:

Step 1 - ...
Step 2 - ...
...
Step n - ...

If the text does not contain any instructions, write "No step provided."

'''${text}'''
`;

const result = await getCompletion(prompt);
console.log(result);
