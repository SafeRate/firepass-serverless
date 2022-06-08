import { ExpressContext } from "apollo-server-express";
import { equifaxClient } from "../utils/equifax";
import { getUserAndScopesFromTokens } from "../utils/getUserAndScopesFromTokens";
import { parcelClient } from "../utils/parcel";
import { plaidClient } from "../utils/plaid";

export const createContext = async (req: ExpressContext["req"]) => {
  const { user, scopes } = await getUserAndScopesFromTokens(req);

  // if (!user) {
  //   throw new Error(`User does not have permission to access the API`);
  // }

  return {
    equifaxClient,
    parcelClient,
    plaidClient,
    scopes,
    user,
  };
};
