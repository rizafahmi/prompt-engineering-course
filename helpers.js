import OpenAI from "openai";
import fs from "fs/promises";
import pdfJs from "pdfjs-dist/legacy/build/pdf.js";

export async function getCompletion(
  prompt,
  model = "gpt-3.5-turbo",
  maxTokens = 128,
  temperature = 0,
) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const messages = [{ role: "user", content: prompt }];
  const response = await openai.chat.completions.create({
    messages,
    model,
    max_tokens: maxTokens, // this is the length of the model's output
    temperature: temperature, // this is the degree of randomness of the model's output [0-1]
  });

  return response.choices[0].message["content"];
}

export async function getCompletionFromMessages(
  messages,
  model = "gpt-3.5-turbo",
  maxTokens = 128,
  temperature = 1,
) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await openai.chat.completions.create({
    messages,
    model,
    max_tokens: maxTokens, // this is the length of the model's output
    temperature: temperature, // this is the degree of randomness of the model's output [0-1]
  });

  return response.choices[0].message["content"];
}

export async function loadPdfPages(path) {
  const pdfData = await fs.readFile(path);

  const pdf = await pdfJs.getDocument({
    data: new Uint8Array(
      pdfData.buffer,
      pdfData.byteOffset,
      pdfData.byteLength,
    ),
    useSystemFont: true,
  }).promise;

  const pageTexts = [];

  for (let i = 0; i < pdf.numPages; i += 1) {
    const page = await pdf.getPage(i + 1);
    const pageContent = await page.getTextContent();

    pageTexts.push({
      pageNumber: i + 1,
      text: pageContent.items
        .filter(function (item) {
          return item.str != null;
        })
        .map(function (item) {
          return item.str;
        })
        .join(" ")
        .replace(/\s+/g, " "),
    });
  }
  return pageTexts;
}

export function queryPdfToContext(pages, prompt) {
  const keywords = removeStopWords(prompt.toLowerCase().replace(/[?.,]/g, ""));

  const contexts = {};
  for (let i = 0; i < keywords.length; i += 1) {
    pages.forEach(function (page) {
      if (page.text.toLowerCase().includes(keywords[i])) {
        if (!contexts[keywords[i]]) {
          contexts[keywords[i]] = {};
          contexts[keywords[i]]["freq"] = 1;
          contexts[keywords[i]]["text"] = [page.text];
        } else {
          contexts[keywords[i]]["freq"] += 1;
          contexts[keywords[i]]["text"].push(page.text);
        }
      }
    });
  }
  const mostFrequent = getMostFrequent(contexts);

  return `Context: ${mostFrequent.join(". ")}`;
}

function removeStopWords(str) {
  return str.split(" ").filter(function (word) {
    return !stopWords.includes(word);
  });
}

export function getMostFrequent(contexts) {
  const sortedContexts = Object.keys(contexts).sort(function (a, b) {
    return contexts[b]["freq"] - contexts[a]["freq"];
  });
  return contexts[sortedContexts[0]]["text"];
}

const stopWords = [
  "a",
  "an",
  "the",
  "i",
  "my",
  "this",
  "that",
  "is",
  "it",
  "to",
  "of",
  "do",
  "does",
  "with",
  "and",
  "can",
  "will",
  "what",
];
