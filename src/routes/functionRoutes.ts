import { FastifyPluginAsync } from "fastify";
import { METHODS } from "../enums/method";
import { container } from "tsyringe";
import FunctionController from "../controllers/FunctionController";

let functionController = container.resolve(FunctionController);

const functionRoutes: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.route({
    method: METHODS.GET,
    url: `/health_check`,
    preHandler: [],
    handler: functionController.healthCheck,
  });

  fastify.route({
    method: METHODS.POST,
    url: "/route-1",
    preHandler: [],
    handler: functionController.test,
  });
};

export default functionRoutes;
