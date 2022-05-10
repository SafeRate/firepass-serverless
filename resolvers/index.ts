import { Mutation } from "./Mutation";
import { Query } from "./Query";
import Scalars from "./Scalars";

export const resolvers = {
  ...Scalars,
  Query,
  Mutation,
};
