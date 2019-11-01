import {FastifyInstance} from 'fastify';

export async function helloworld(fastify: FastifyInstance): Promise<void> {
	fastify.get('/', async () => {
		return 'Hello world!';
	});
}
