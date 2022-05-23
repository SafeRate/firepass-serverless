import { QueryResolvers } from "../../types/resolverTypes";

export const getInstaTouchIdSession: QueryResolvers["getInstaTouchIdSession"] =
  async (_parent, _args, { equifaxClient, ip }) => {
    if (!ip) {
      throw new Error("InstatouchID session is not getting an IP address");
    }

    return await equifaxClient.getInstaTouchID(ip);
  };
