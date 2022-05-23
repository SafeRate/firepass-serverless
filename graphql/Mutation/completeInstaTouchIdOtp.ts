import { MutationResolvers } from "../../types/resolverTypes";

export const completeInstaTouchIdOtp: MutationResolvers["completeInstaTouchIdOtp"] =
  async (
    _parent,
    { mobileNumber, passcode, sessionId, transactionKey, SSN, zipCode },
    { equifaxClient }
  ) => {
    await equifaxClient.completeInstaTouchOtp(
      mobileNumber,
      passcode,
      sessionId,
      transactionKey,
      SSN,
      zipCode
    );

    return true;
  };
