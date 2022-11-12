import { FastifyPluginAsync } from "fastify";
import httpStatus from "http-status";
import { METHODS } from "../enums/method";

const baseRoute: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.route({
    method: METHODS.GET,
    url: '/',
    preHandler: [],
    handler: (req, reply) => {
        return reply.send({
            status: httpStatus.OK,
            message: 'Application running smoothly'
        });
    },
  });
};

export default baseRoute;
