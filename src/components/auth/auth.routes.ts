import { FastifyInstance } from 'fastify';
import { rootGet } from './auth.controllers';

const rootGetOpts = {
  schema: {
    tags:['Server Authentication'],
    description: 'Check Users Credential',
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