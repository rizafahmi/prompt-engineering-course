import { getCompletion } from "./helpers.js";

const prompt =
  `Generate a list of three made-up startup names along with a tagline and industry type. Provide them in JSON format with the following keys: name, tagline, industry.`;

const result = await getCompletion(prompt);
console.log(result);
