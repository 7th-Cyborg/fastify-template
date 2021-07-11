import Fastify, { FastifyInstance } from 'fastify';
import app from '../app';

export default function setupServer(config = { logger: false }): FastifyInstance {
  const server: FastifyInstance = Fastify(config);
  server.register(app);

  beforeAll(async () => {
    await server.ready();
  });

  afterAll(() => server.close());

  return server;
}