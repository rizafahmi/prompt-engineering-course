import { getCompletion, loadPdfPages, queryPdfToContext } from "./helpers.js";

const pdfPath = "./brochure.pdf";

async function main() {
  const pages = await loadPdfPages(pdfPath);
  const prompt = "What is the size of alloy wheels?";
  const context = queryPdfToContext(pages, prompt);
  const query = `${context}\n\nquery: ${prompt}\n\nanswer:`;
  const completion = await getCompletion(query);
  console.log(completion);
}

main();
