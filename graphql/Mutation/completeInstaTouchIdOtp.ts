import { MutationResolvers } from "../../types/resolverTypes";
import {
  EquifaxConsumerIdentity,
  EquifaxConsumerIdentityAddress,
  EquifaxCurrentDesignator,
} from "../../utils/equifax";

export const completeInstaTouchIdOtp: MutationResolvers["completeInstaTouchIdOtp"] =
  async (
    _parent,
    { mobileNumber, passcode, sessionId, transactionKey, SSN, zipCode },
    { equifaxClient, parcelClient }
  ) => {
    const consumerIdentity: EquifaxConsumerIdentity =
      await equifaxClient.completeInstaTouchOtp(
        mobileNumber,
        passcode,
        sessionId,
        transactionKey,
        SSN,
        zipCode
      );

    if (consumerIdentity) {
      const insertResult = await parcelClient.insertEquifaxConsumer(
        consumerIdentity
      );

      console.log(insertResult);
    }

    return true;
  };
