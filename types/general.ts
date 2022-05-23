import { equifaxClient } from "../utils/equifax";
import { parcelClient } from "../utils/parcel";

export type Context = {
  equifaxClient: typeof equifaxClient;
  parcelClient: typeof parcelClient;
};
