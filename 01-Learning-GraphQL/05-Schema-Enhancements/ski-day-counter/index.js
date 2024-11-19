const { ApolloServer, gql } = require('apollo-server');
const { MockList } = require('@graphql-tools/mock');

const typeDefs = gql`
  scalar Date

  """
  An object that describes the characteristics of a ski day
  """
  type SkiDay {
    "A ski day's unique identifier"
    id: ID!
    "The date that a ski day occurred"
    date: Date!
    "The location where a ski day occurred"
    mountain: String!
    "The shape that the snow was in when this ski day happened"
    conditions: Conditions
  }

  enum Conditions {
    POWDER
    HEAVY
    ICE
    THIN
  }

  type Query {
    totalDays: Int!
    allDays: [SkiDay!]!
  }

  input AddDayInput {
    date: Date!
    mountain: String!
    conditions: Conditions
  }

  type RemoveDayPayload {
    day: SkiDay!
    remove: Boolean
    totalBefore: Int
    totalAfter: Int
  }

  type Mutation {
    addDay(input: AddDayInput!): SkiDay
    removeDay(id: ID!): RemoveDayPayload!
  }

  type Subscription {
    newDay: SkiDay!
  }
`;

const mocks = {
  Date: () => '1/2/2025',
  String: () => 'Cool data',
  Query: () => ({
    allDays: () => new MockList([1, 15]),
  }),
};

const server = new ApolloServer({
  typeDefs,
  mocks,
});

server.listen().then(({ url }) => console.log(`Server running at ${url}`));
