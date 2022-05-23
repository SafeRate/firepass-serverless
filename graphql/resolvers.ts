import { Mutation } from "./Mutation/Mutation";
import { Query } from "./Query/Query";
import { Scalars } from "./Scalars";

const resolvers = {
  ...Scalars,
  Query,
  Mutation,
};

export { resolvers };
