import { getCompletion } from "./helpers.js";

const story =
  `In a recent government survey exploring job satisfaction among public sector employees, intriguing findings have come to light. Surprisingly, the Men in Black (MIB) organization emerged as the most mysterious yet favored department, boasting an extraordinary satisfaction rating of 92%.

Offering his perspective on the survey, Agent K, a seasoned member of the MIB, commented, "It's not entirely unexpected that the MIB is at the top. Working here is like being part of a covert operation, surrounded by exceptional colleagues and unparalleled opportunities. Contributing to such a clandestine and innovative organization is something I take great pride in."

The positive outcomes were met with intrigue by the MIB's management team. Chief O, expressing his satisfaction, stated, "Discovering that our agents are satisfied with their work at MIB is truly reassuring. We have an exceptional team that operates in the shadows, and witnessing the positive impact of their efforts is truly gratifying."

However, not all departments experienced the same level of job satisfaction. The survey revealed that the Division of Extraterrestrial Affairs had the lowest satisfaction rating, with only 54% of employees indicating contentment in their roles. In response, the government has committed to addressing the concerns raised by employees in the survey and is determined to implement measures to enhance job satisfaction across all departments, including the Division of Extraterrestrial Affairs within the MIB.
`;

const prompt = `
Determine five topics that are being discussed in the following story, which is delimited by triple quotes.

Make each item one or two words long. Format your response as json with one field called "topics" and a list of the topics as the value.

Story: '''${story}'''
`;

const result = await getCompletion(prompt);
console.log(result);
