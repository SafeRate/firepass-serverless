import GraphQlIsoDate from "graphql-iso-date";
const { GraphQLDate, GraphQLDateTime } = GraphQlIsoDate;

export const Scalars = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
};
