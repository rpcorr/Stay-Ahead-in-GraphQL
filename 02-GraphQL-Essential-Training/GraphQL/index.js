import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './data/schema';

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
  res.send('GraphQL is amazing!');
});

const root = { hello: () => "Hi, I'm Ronan!" };

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () =>
  console.log(`Running server on localhost:${PORT}/graphql`)
);
