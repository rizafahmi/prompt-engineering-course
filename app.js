import Fastify from "fastify";
const app = Fastify({ logger: true });

app.get("/", function (req, res) {
  return { hello: "world" };
});

try {
  await app.listen({ port: 3000 });
} catch {
  app.log.error(err);
  process.exit(1);
}
