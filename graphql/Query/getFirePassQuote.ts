import { QueryResolvers } from "../../types/resolverTypes";

export const getFirePassQuote: QueryResolvers["getFirePassQuote"] = async (
  _parent,
  args,
  context
): Promise<boolean> => {
  return true;
};
