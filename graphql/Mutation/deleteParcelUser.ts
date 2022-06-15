import { MutationResolvers } from "../../types/resolverTypes";

export const deleteParcelUser: MutationResolvers["deleteParcelUser"] = async (
  _parent,
  { id },
  { parcelClient, user }
) => {
  console.log("Deleting parcel user", user);

  return null;
};
