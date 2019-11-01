import { createServer } from '../src/server';
import { noop } from './testutils';

const app = createServer();

test('createServer', async () => {
	const response = await app.inject({method: 'GET', url: '/'});
	expect(response.statusCode).toStrictEqual(200);
	expect(response.payload).toStrictEqual('Hello world!');
});

afterAll(() => app.close(noop));
