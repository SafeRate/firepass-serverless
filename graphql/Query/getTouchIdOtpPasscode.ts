import { QueryResolvers } from "../../types/resolverTypes";

export const getTouchIdOtpPasscode: QueryResolvers["getTouchIdOtpPasscode"] =
  async (_parent, { sessionId, mobileNumber }, { equifaxClient }) => {
    try {
      const test = await equifaxClient.getOtpPasscode(sessionId, mobileNumber);

      console.log("test", test);

      return test;
    } catch (error) {
      throw new Error(error);
    }
  };
