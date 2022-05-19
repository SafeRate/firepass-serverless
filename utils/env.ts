import { params } from "@serverless/cloud";

type Env = {
  AUTH_SAFE_RATE_ROLES_URL: string;
  AUTH_SAFE_RATE_ID_URL: string;
  AUTH_SAFE_RATE_TOKEN_URL: string;
  AUTH_SAFE_RATE_AUTH0: string;
  AUTH_SAFE_RATE_AUTH0_AUDIENCE: string;
  AUTH_SAFE_RATE_AUTH0_ENCRYPTION: string;
  EQUIFAX_B2B2C_ACCESS_TOKEN: string;
  EQUIFAX_B2B2C_STAGE: string;
  EQUIFAX_MERCHANT_ID: string;
  EQUIFAX_STANDARD_STS_ACCESS_ID: string;
  EQUIFAX_STANDARD_STS_ACCESS_SECRET: string;
  EQUIFAX_STANDARD_STS_ACCOUNT: string;
  EQUIFAX_STANDARD_STS_SECURITY: string;
  EQUIFAX_STANDARD_STS_STAGE: string;
  PARCEL_APP_ID: string;
  PARCEL_CLIENT_ID: string;
  PARCEL_DATABASE_ID: string;
  PARCEL_PRIVATE_KEY: string;
  STORAGE_TEMP_ROOT: string;
};

export const env: Env = {
  ...params,
};
