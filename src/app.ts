import 'dotenv/config';
import "reflect-metadata";
import fastify, { FastifyInstance } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import { FastifyReply, FastifyRequest } from 'fastify';
import AppError from "./helpers/utils/error";
import { ErrorResponse } from "./helpers/utils/response";
import routePrefix from "./helpers/utils/routePrefix";
import functionRoutes from './routes/functionRoutes';
import baseRoute from './routes/baseRoutes';

class App {
  public app: FastifyInstance<Server, IncomingMessage, ServerResponse>;
  public app_port = process.env.APP_PORT || 3000;

  constructor( ) {
    this.app = fastify({ logger: true });
    this.app.register(baseRoute);
    this.app.register(functionRoutes, { prefix: routePrefix.functionRouteV1 });
    this.listen();
  }

  public listen() {
    this.app.listen(this.app_port, "0.0.0.0", async () => {
        // 
    });
  }

  public getInstance() {
    return this.app;
  }

  public async close() {
    await this.app.close();
  }


  public setErrorHandler(fastify: any) {
    fastify.setErrorHandler((err: any, request: FastifyRequest, reply: FastifyReply) => {
      const statusCode = err.statusCode || 503;
      const message =
        err instanceof AppError
          ? err.message
          : "We are unable to proces your request. please try again";

      return reply.status(statusCode).send(ErrorResponse(message));
    });
  }
}
export default App;
