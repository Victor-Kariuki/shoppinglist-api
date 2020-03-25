import 'dotenv/config';

import {server} from './server';
import { initDb } from './database';

(async () => {
  await initDb();
  await server();
})();