import { params } from "@serverless/cloud";

type Env = {
  AUTH_SAFE_RATE_ROLES_URL: string;
  AUTH_SAFE_RATE_ID_URL: string;
  AUTH_SAFE_RATE_TOKEN_URL: string;
  AUTH_SAFE_RATE_AUTH0: string;
  AUTH_SAFE_RATE_AUTH0_AUDIENCE: string;
  AUTH_SAFE_RATE_AUTH0_ENCRYPTION: string;
  PARCEL_APP_ID: string;
  PARCEL_CLIENT_ID: string;
  PARCEL_DATABASE_ID: string;
  PARCEL_PRIVATE_KEY: string;
  STORAGE_TEMP_ROOT: string;
};

export const env: Env = {
  ...params,
};
