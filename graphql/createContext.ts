import { equifaxClient } from "../utils/equifax";
import { parcelClient } from "../utils/parcel";

export const createContext = function () {
  return {
    equifaxClient,
    parcelClient,
  };
};
