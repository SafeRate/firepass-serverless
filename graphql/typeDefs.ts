import { gql } from "apollo-server-express";
import fs from "fs";
const schema = fs.readFileSync("./graphql/schema.graphql").toString("utf-8");

const typeDefs = gql`
  ${schema}
`;

export { typeDefs };
