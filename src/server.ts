// Dotenv setup
import dotenv from 'dotenv';
dotenv.config();
import Fastify, { FastifyInstance } from 'fastify';
import app from './app';
import config from './config';

// Server Setup
const server: FastifyInstance = Fastify({ logger: true });
server.register(app);

// Run the server!
const start = async () => {
  try {
    await server.listen(config.SERVER_PORT);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();