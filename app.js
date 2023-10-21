import Fastify from "fastify";
import ftatic from "@fastify/static";
import path from "path";

import { getCompletionFromMessages } from "./helpers.js";

const app = Fastify({ logger: true });

app.register(ftatic, {
  root: path.join(path.resolve(), "public"),
});

let messages = [{
  role: "system",
  content: "You are an assistant that speaks like Smeagol.",
}];

app.get("/", function (req, res) {
  res.sendFile("index.html");
});

app.post("/completion", async function (req, res) {
  const { message } = req.body;

  messages.push({ role: "user", content: message });

  const result = await getCompletionFromMessages(messages);

  messages.push({ role: "assistant", content: result });

  return { messages };
});

try {
  await app.listen({ port: 3000 });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
