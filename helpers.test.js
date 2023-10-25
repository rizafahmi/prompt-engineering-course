import test from "node:test";
import assert from "node:assert";
import { getMostFrequent, loadPdfPages, queryPdfToContext } from "./helpers.js";

test("smoke test", function () {
  assert.equal(1, 1);
});

test("load text from pdf", async function () {
  const text = await loadPdfPages("./brochure.pdf");
  assert.strictEqual(text.length, 46);
});

test("provide context from pdf file", async function () {
  const text = await loadPdfPages("./brochure.pdf");
  const prompt = "What is the size of alloy wheels?";
  const context = queryPdfToContext(text, prompt);
  console.log(context);
  assert.equal(context.match(/Context: [\w*\s&.),(-]+/mg).length, 1);
});
