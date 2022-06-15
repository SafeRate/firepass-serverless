import { DatabaseId } from "@oasislabs/parcel";
import { QueryResolvers } from "../../types/resolverTypes";

export const sandbox: QueryResolvers["sandbox"] = async function (
  _parent,
  { sql, params },
  { parcelClient }
) {
  console.log("Sandbox starting");
  try {
    const result = await parcelClient.sandbox(sql, params);
    console.log("result", result);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }

  console.log("Sandbox ending");
  return true;
};
