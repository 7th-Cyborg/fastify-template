import { FastifyInstance } from 'fastify';
import { rootGet } from './root.controllers';

const rootGetOpts = {
  schema: {
    tags:['Server Status'],
    description: 'Check server status',
    response: {
      200: {
        type: 'object',
        properties: {
          status: { type: 'string' },
        }
      },
    },
  },
  handler: rootGet,
};

export default async function root(fastify: FastifyInstance): Promise<void> {
  fastify.get('/', rootGetOpts);
}