import { QueryResolvers } from "../../types/resolverTypes";

export const getUserData: QueryResolvers["getUserData"] = async (
  _parent,
  args,
  { parcelClient }
) => {
  return JSON.stringify(await parcelClient.getUserData());
};
