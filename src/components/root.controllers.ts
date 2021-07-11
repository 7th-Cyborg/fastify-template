import { FastifyReply, FastifyRequest } from 'fastify';
export async function rootGet(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  reply.send({ status : 'OK' });
}