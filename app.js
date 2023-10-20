import Fastify from "fastify";
import ftatic from "@fastify/static";
import path from "path";

import { getCompletionFromMessages } from "./helpers.js";

const app = Fastify({ logger: true });

app.register(ftatic, {
  root: path.join(path.resolve(), "public"),
});

app.get("/", function (req, res) {
  res.sendFile("index.html");
});

app.post("/completion", async function (req, res) {
  const { messages } = req.body;

  const result = await getCompletionFromMessages(messages);

  // DONE: Mekanisme simpan messages. Apakah sebaiknya di localstorage client aja?
  // TODO: Messages disimpan di server sepertinya lebih make sense?
  // DONE: Ketika bot personality berubah, messages direset
  // DONE: Pakai static html aja daripada view render

  return { result };
});

try {
  await app.listen({ port: 3000 });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
