import { getCompletion } from "./helpers.js";

const text =
  `Making instant noodle is easy! First, you need to boil the water. Then, you need to put the noodle into the boiling water. After 3 minutes, you can put the seasoning into the noodle. Finally, you can eat the noodle.`;

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
