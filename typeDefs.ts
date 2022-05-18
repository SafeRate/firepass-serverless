import { gql } from "apollo-server-express";

const myTypeDefs = gql`
  scalar Date
  scalar DateTime

  type Query {
    getDocumentById(id: ID): String
    getOneView: String
    helloWorld: String
  }

  type Mutation {
    helloWorldMutate: String
  }
`;

export { myTypeDefs };
