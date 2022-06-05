import { equifaxClient } from "../utils/equifax";
import { parcelClient } from "../utils/parcel";
import { plaidClient } from "../utils/plaid";

export const createContext = function () {
  return {
    equifaxClient,
    parcelClient,
    plaidClient,
  };
};
