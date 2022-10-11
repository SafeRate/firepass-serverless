import { QueryResolvers, UserCreditReport } from "../../types/resolverTypes";

export const getUserCreditReports: QueryResolvers["getUserCreditReports"] =
  async (_parent, args, context): Promise<UserCreditReport[]> => {
    let creditReports: UserCreditReport[] = [];

    const results = await context.parcelClient.getUserCreditReports(
      context.user.id
    );

    if (Array.isArray(results) && results.length) {
      for (let r = 0; r < results.length; r++) {
        const result = results[r];
        if (result.timestamp) {
          creditReports.push({
            timestamp: result.timestamp,
          });
        }
      }
    }

    return creditReports;
  };
