import { gql } from "apollo-server-express";

export default gql`
  scalar Date
  scalar DateTime

  type Query {
    getHelloWorld(id: ID): String
  }

  type Mutation {
    createHelloWorld(id: ID): String
  }
`;
