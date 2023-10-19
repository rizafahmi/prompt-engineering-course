import Fastify from "fastify";
import view from "@fastify/view";
import nunjucks from "nunjucks";
import path from "path";

const app = Fastify({ logger: true });
app.register(view, {
  engine: { nunjucks },
  viewExt: "njk.html",
  root: path.join(path.resolve(), "templates"),
});

app.get("/", function (req, res) {
  res.view("index", { text: "Hello, world!" });
});

try {
  await app.listen({ port: 3000 });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
