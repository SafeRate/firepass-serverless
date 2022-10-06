import { ExpressContext } from "apollo-server-express";
import { equifaxClient } from "../utils/equifax";
import { estatedClient } from "../utils/estated";
import { getUserAndScopesFromTokens } from "../utils/getUserAndScopesFromTokens";
import { parcelClient } from "../utils/parcel";
import { plaidClient } from "../utils/plaid";

export const createContext = async (req: ExpressContext["req"]) => {
  let { user, scopes } = await getUserAndScopesFromTokens(req);

  if (!user) {
    user = {
      auth: "authyo",
      emailVerified: true,
      email: "dylhallan@gmail.com",
      firstName: "Test",
      id: "0000-0000-0000-0000-0000-0000-0000-0000",
      lastName: "User",
      name: "Test User",
      nickname: "Tes",
      picture: null,
      roles: [],
    };
  }
  // if (!user) {
  //   throw new Error(`User does not have permission to access the API`);
  // }

  return {
    equifaxClient,
    estatedClient,
    parcelClient,
    plaidClient,
    scopes,
    user,
  };
};
