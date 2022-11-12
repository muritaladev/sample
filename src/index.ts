import App from "./app";
import { FastifyReply, FastifyRequest } from 'fastify';

const app = new App();

process.on("SIGINT", () => {
  app.close();
  process.exit(0);
});


const fastifyFunction = async (req: FastifyRequest, reply: FastifyReply) => {
  await app.getInstance().ready();
  app.getInstance().server.emit("request", req, reply);
};

export {
  fastifyFunction
};