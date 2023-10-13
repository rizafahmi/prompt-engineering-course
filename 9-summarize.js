import { getCompletion } from "./helpers.js";

// https://www.coursereport.com/schools/hacktiv8
const text =
  `the bootcamp was a challenging and intense program, but it was also incredibly rewarding. I got the chance to work on a range of projects, from creating simple web applications to participating in bigger team initiatives. Additionally, I had the opportunity to learn from experienced programmers and instructors who shared their insights with me. I have encountered several difficulties throughout the bootcamp, such as understanding out new technologies and debugging my code, but I have also experienced many exciting and satisfying moments when I was able to resolve an issue or watch my code run well. Although there have been tears along the way, the experience has been very valuable and has taught me the value of persistence and perseverance.`;

const prompt =
  `Your task is to generate a short summary of a testimonial or review about coding bootcamp.

Summarize the review below, delimited by triple single quote, in at most 30 words.

Review: '''${text}'''
`;

const result = await getCompletion(prompt);
console.log(result);
