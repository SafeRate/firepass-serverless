import { QueryResolvers } from "../../types/resolverTypes";

export const getPlaidLinkToken: QueryResolvers["getPlaidLinkToken"] = async (
  _parent,
  args,
  { userId, parcelClient, plaidClient }
): Promise<string> => {
  return await plaidClient.getLinkToken(userId, parcelClient);
};
