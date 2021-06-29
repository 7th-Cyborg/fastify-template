import fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';
import swagger from 'fastify-swagger';

const swaggerOpts = {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: { 
      title: 'Documentation',
      description: 'Documentation API',
      version: '0.1.0' },
  },
  host: 'localhost',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
};

async function swaggerDocumentation(fastify: FastifyInstance): Promise<void> {
  fastify.register(swagger, swaggerOpts);
}

export default fp(swaggerDocumentation);