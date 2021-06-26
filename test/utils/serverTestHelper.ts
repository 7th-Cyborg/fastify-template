import Fastify, { FastifyInstance } from 'fastify';
import app from '../../src/app';

export const server: FastifyInstance = Fastify({ logger: false });
server.register(app);