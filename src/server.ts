import * as express from 'express';

import { notFoundError, errorHandler } from './middlewares/errors.middleware';
import {router as shoppinglistRoutes} from './routes/shoppinglist.routes';

const app = express();

app.get('/', (req, res) => {
  res.json({ hello: 'World' });
});


app.use(notFoundError);
app.use(errorHandler);

app.use(express.json());

app.use('/api/shoppinglist', shoppinglistRoutes);

const port = parseInt(process.env.PORT, 10) || 5000;

export const server = () => {
  app.listen(port);
  console.log(`Server started at http://localhost:${port}`);
  console.log(`Press Ctrl+C to quit`);
};