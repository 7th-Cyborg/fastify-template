import Fastify, { FastifyInstance } from 'fastify';
import app from './app';

// Server Setup
const server: FastifyInstance = Fastify({ logger: true });
server.register(app);

// Run the server!
const start = async () => {
  try {
    await server.listen(3000);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();