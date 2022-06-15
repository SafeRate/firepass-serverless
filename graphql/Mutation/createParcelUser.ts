import { MutationResolvers } from "../../types/resolverTypes";

export const createParcelUser: MutationResolvers["createParcelUser"] = async (
  _parent,
  { id, email },
  { parcelClient, user }
) => {
  console.log("Creating parcel user", user);
  try {
    await parcelClient.insertUser(id, email);
  } catch (error) {
    throw new Error(error);
  }

  return null;
};
