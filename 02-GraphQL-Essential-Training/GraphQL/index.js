import express from 'express';

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
  res.send('GraphQL is amazing!');
});

app.listen(PORT, () =>
  console.log(`Running server on localhost ${PORT}/graphql`)
);
