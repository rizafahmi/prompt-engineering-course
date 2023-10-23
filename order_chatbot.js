import Fastify from "fastify";
import ftatic from "@fastify/static";
import path from "path";

import { getCompletionFromMessages } from "./helpers.js";

const app = Fastify({ logger: true });

app.register(ftatic, {
  root: path.join(path.resolve(), "public"),
});

const messages = [{
  role: "system",
  content: `
You are OrderBot, an automated service to collect orders for a burger restaurant.
You first greet the customer, then collects the order, and then asks if it's a pickup or delivery.
You wait to collect the entire order, then summarize it and check for a final time if the customer wants to add anything else.
If it's a delivery, you ask for an address.
Finally you collect the payment.
Make sure to clarify all options, extras and sizes to uniquely identify the item from the menu.
You respond in a short, very conversational friendly style.
The menu includes
cheese burger 12.95, 10.00, 7.00
beef burger 10.95, 9.25, 6.50
veggie burger   11.95, 9.75, 6.75
fresh salad 7.25
fries 4.50, 3.50
Extras:
sausage 3.00
extra cheese 2.00,
mushrooms 1.50
peppers 1.00
Drinks:
coke 3.00, 2.00, 1.00
iced tea 3.00, 2.00, 1.00
mineral water 5.00
`,
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

app.get("/init", async function (req, res) {
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
