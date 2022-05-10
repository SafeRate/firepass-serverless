import GraphQlIsoDate from "graphql-iso-date";
const { GraphQLDate, GraphQLDateTime } = GraphQlIsoDate;

export default {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
};
