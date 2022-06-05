import { equifaxClient } from "../utils/equifax";
import { parcelClient } from "../utils/parcel";
import { plaidClient } from "../utils/plaid";

export type Context = {
  equifaxClient: typeof equifaxClient;
  ip: string;
  parcelClient: typeof parcelClient;
  plaidClient: typeof plaidClient;
  userId: string;
};
