import { MutationResolvers } from "../../types/resolverTypes";
import {
  EquifaxConsumerIdentity,
  EquifaxConsumerIdentityAddress,
  EquifaxCurrentDesignator,
} from "../../utils/equifax";
import { v4 as uuidv4 } from "uuid";

export const completeInstaTouchIdOtp: MutationResolvers["completeInstaTouchIdOtp"] =
  async (
    _parent,
    { mobileNumber, passcode, sessionId, transactionKey, SSN, zipCode },
    { equifaxClient, parcelClient, user }
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

    const userId = user && user.id ? user.id : uuidv4();
    console.log("userId", userId);

    if (consumerIdentity) {
      try {
        await parcelClient.insertEquifaxConsumer(consumerIdentity, userId);
      } catch (error) {
        console.log("Error inserting equifax into parcel");
      }

      const equifaxConsumer = await parcelClient.getEquifaxConsumer(userId);

      console.log("equifaxConsumer", equifaxConsumer);

      return equifaxConsumer;
    }

    console.log("Returning");

    return null;
  };
