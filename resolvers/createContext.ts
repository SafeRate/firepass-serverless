import { parcelClient } from "../utils/parcel";

export type Context = {
  parcelClient: typeof parcelClient;
};

export const createContext = function (): Context {
  return {
    parcelClient,
  };
};
