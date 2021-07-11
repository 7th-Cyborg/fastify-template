import { join } from 'path';
import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload';
import { FastifyInstance } from 'fastify';

export type AppOptions = {
  // Custom Options
} & Partial<AutoloadPluginOptions>;

// App
export default async function App(fastify: FastifyInstance, opts: AppOptions): Promise<void> {
  // Plugins Loading
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: opts
  });

  // Routes
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'components'),
    indexPattern: /.*routes(\.ts|\.js)$/, // Match only ts and js file that have 'routes' string included in name of the file (e.g. 'root.routes.ts')
    options: opts
  });
}