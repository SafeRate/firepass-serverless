import { QueryResolvers } from "../../types/resolverTypes";

export const getDocumentById: QueryResolvers["getDocumentById"] = async (
  _parent,
  args,
  context
) => {
  return await context.parcelClient.getDocumentById(args.id);
};
