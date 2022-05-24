import { MutationResolvers } from "../../types/resolverTypes";

export const createDatabase: MutationResolvers["createDatabase"] = async (
  _parent,
  { users, equifax, plaid, stripe },
  { parcelClient }
) => {
  const isSuccessful = await parcelClient.createDatabase(
    users,
    equifax,
    plaid,
    stripe
  );
  return isSuccessful;
};
