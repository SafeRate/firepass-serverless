import { MutationResolvers } from "../../types/resolverTypes";

export const createParcelUser: MutationResolvers["createParcelUser"] = async (
  _parent,
  _args,
  { parcelClient, user }
) => {
  console.log("Creating parcel user", user);

  return null;
};
