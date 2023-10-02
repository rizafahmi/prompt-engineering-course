import { getCompletion } from "./helpers.js";

const text =
  `When interacting with a language model, it's essential to communicate your intentions effectively. To achieve the desired results, you should express what you want the model to do by providing instructions that are as clear and specific as you can possibly make them. This level of clarity will serve as a guiding light for the model, steering it towards producing the output you seek.

It's worth emphasizing that clarity doesn't equate to brevity. While brevity is valuable in some contexts, particularly for succinct commands, there are many situations where longer prompts are more advantageous. Longer prompts offer an opportunity to provide additional context, nuances, and details that can significantly impact the quality and relevance of the model's responses.

In essence, longer prompts can provide a richer foundation for the model to work from. They can encompass the intricacies of your request, any specific constraints or requirements, and even examples or scenarios to illustrate your intent. This wealth of information can help the model generate more detailed, accurate, and contextually relevant outputs, making your interactions with it more productive and satisfying.

So, when formulating prompts for a language model, remember that the more comprehensive and explicit your instructions, the better the chances of receiving the kind of responses you're looking for. Take the time to craft your prompts thoughtfully, considering the depth of information and context you can provide. By doing so, you'll harness the full potential of the model and ensure that it truly understands and fulfills your needs.
`;

const prompt =
  `Summarize the text delimited by triple quote into a single sentence. '''${text}'''`;

const result = await getCompletion(prompt);
console.log(result);
