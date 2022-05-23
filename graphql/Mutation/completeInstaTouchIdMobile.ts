import { MutationResolvers } from "../../types/resolverTypes";

export const completeInstaTouchIdMobile: MutationResolvers["completeInstaTouchIdMobile"] =
  (_parent, { sessionId, SSN, zipCode }, { equifaxClient }) => {
    return true;
  };
