// eslint-disable-next-line import/no-unassigned-import
require('make-promises-safe');

import {createServer} from './server';

const start = async (): Promise<void> => {
	// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/no-unnecessary-condition
	const port = parseInt(JSON.stringify(process.env.PORT), 10) || 3000;

	const app = createServer({logger: true});
	try {
		await app.listen(port);
	} catch (error) {
		app.log.error(error);
		// eslint-disable-next-line unicorn/no-process-exit
		process.exit(1);
	}
};

start();
