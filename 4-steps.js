import { getCompletion } from "./helpers.js";

const text =
  `Once upon a time, in a small village, there lived a poor woodcutter with his two children, Hansel and Gretel. Times were tough, and the family struggled to make ends meet. Famine had struck the land, and the woodcutter, unable to provide enough food for his children, was persuaded by his wicked stepmother to abandon them in the forest. The children overheard their parents' plan and devised a clever trick to leave a trail of breadcrumbs behind them as they ventured into the woods, ensuring they could find their way back home.

However, the plan took an unexpected turn. As they walked deeper into the forest, Hansel and Gretel realized that the birds had eaten the breadcrumbs, leaving them lost and alone. Panic set in as night fell, and they stumbled upon a strange and enticing sight—a house made entirely of candy and sweets. Hunger overcoming caution, the hungry siblings began to nibble on the walls of the tempting house, unaware that it belonged to a wicked witch with a taste for children.`;

const prompt = `
Your task is to perform the following actions:
1. Summarize the following text delimited by <> with 1 sentence.
2. Translate the summary into Bahasa Indonesia.
3. List each name in the Bahasa Indonesia summary.
4. Output a json object that contains the following keys: translation_length, num_names.

Use the following format:
Text: <text to summarize>
Summary: <summary>
Translation: <translation>
Names: <names>
Output JSON: <json with translation_length and num_names>

Text: ---${text}---
`;

const result = await getCompletion(prompt);
console.log(result);
