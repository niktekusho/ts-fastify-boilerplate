import * as fastify from 'fastify';

import {helloworld} from './services/helloworld';

export function createServer(options: fastify.ServerOptions = {}): fastify.FastifyInstance {
	const app = fastify.default(options);

	app.register(helloworld);

	return app;
}
