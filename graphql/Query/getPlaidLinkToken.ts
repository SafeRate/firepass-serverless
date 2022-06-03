import { QueryResolvers } from "../../types/resolverTypes";

export const getPlaidLinkToken: QueryResolvers["getPlaidLinkToken"] = async (
  _parent,
  args,
  { plaidClient }
) => {
  return await plaidClient.getLinkToken();
};
