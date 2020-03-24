import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ hello: 'World' });
});

export const initServer = () => {
  app.listen(8080);
  console.log(`Server started at http://localhost:${8080}`);
  console.log(`Press Ctrl+C to quit`);
};