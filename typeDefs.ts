import { gql } from "apollo-server-express";

const myTypeDefs = gql`
  scalar Date
  scalar DateTime

  type Query {
    getHelloWorld(id: ID): String
  }

  type Mutation {
    createHelloWorld(id: ID): String
  }
`;

export { myTypeDefs };
