import { join } from 'path';
import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload';
import { FastifyPluginAsync } from 'fastify';

export type AppOptions = {
  // Custom Options
} & Partial<AutoloadPluginOptions>;

// App
const app: FastifyPluginAsync<AppOptions> = async (fastify, opts): Promise<void> => {
  // Plugins Loading
  /*void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: opts
  });*/

  // Routes
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: opts
  });
};

export default app;