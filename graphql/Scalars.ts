import GraphQlIsoDate from "graphql-iso-date";
import GraphQLJSON from "graphql-type-json";
const { GraphQLDate, GraphQLDateTime } = GraphQlIsoDate;

export const Scalars = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
  JSON: GraphQLJSON,
};
