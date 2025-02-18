import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './data/schema';

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
  res.send('GraphQL is amazing!');
});

const root = {
  product: () => {
    return {
      id: 29729872,
      name: 'Widget',
      description: 'Beautiful widget to use in the garden',
      price: 34.99,
      soldout: false,
    };
  },
};

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
