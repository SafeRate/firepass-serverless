import { Mutation } from "./Mutation";
import { Query } from "./Query";
import { Scalars } from "./Scalars";

const resolvers = {
  ...Scalars,
  Query,
  Mutation,
};

export { resolvers };
