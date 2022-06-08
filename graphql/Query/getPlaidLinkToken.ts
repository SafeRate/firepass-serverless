import { QueryResolvers } from "../../types/resolverTypes";

export const getPlaidLinkToken: QueryResolvers["getPlaidLinkToken"] = async (
  _parent,
  args,
  { user, parcelClient, plaidClient }
): Promise<string> => {
  return await plaidClient.getLinkToken(user.id, parcelClient);
};
