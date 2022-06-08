import { equifaxClient } from "../utils/equifax";
import { parcelClient } from "../utils/parcel";
import { plaidClient } from "../utils/plaid";

export interface Auth0User {
  auth: string;
  email: string;
  emailVerified: boolean;
  firstName: string;
  id: string;
  lastName: string;
  name: string;
  nickname: string;
  picture: string;
  roles: string[];
}

export type IScopes = {
  isBorrower?: boolean;
  isInvestor?: boolean;
  isSaver?: boolean;
  isServicer?: boolean;
};
export type Context = {
  equifaxClient: typeof equifaxClient;
  ip: string;
  parcelClient: typeof parcelClient;
  plaidClient: typeof plaidClient;
  scopes: IScopes;
  user: Auth0User;
};
