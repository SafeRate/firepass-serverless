import { params } from "@serverless/cloud";

type Env = {
  AUTH_SAFE_RATE_ROLES_URL: string;
  AUTH_SAFE_RATE_ID_URL: string;
  AUTH_SAFE_RATE_TOKEN_URL: string;
  AUTH_SAFE_RATE_AUTH0: string;
  AUTH_SAFE_RATE_AUTH0_AUDIENCE: string;
  AUTH_SAFE_RATE_AUTH0_ENCRYPTION: string;
  CARTOFRONT_AWS_ACCESS_KEY_ID: string;
  CARTOFRONT_AWS_SECRET_ACCESS_KEY: string;
  CARTOFRONT_QUOTE_API: string;
  EQUIFAX_B2B2C_ACCESS_TOKEN: string;
  EQUIFAX_B2B2C_STAGE: string;
  EQUIFAX_CUSTOMER_CODE: string;
  EQUIFAX_MERCHANT_ID: string;
  EQUIFAX_SECURITY_CODE_3DIG: string;
  EQUIFAX_STANDARD_STS_ACCESS_ID: string;
  EQUIFAX_STANDARD_STS_ACCESS_SECRET: string;
  EQUIFAX_STANDARD_STS_ACCOUNT: string;
  EQUIFAX_STANDARD_STS_SECURITY: string;
  EQUIFAX_STANDARD_STS_STAGE: string;
  ESTATED_URL: string;
  ESTATED_API_KEY: string;
  HELLOSIGN_API_KEY: string;
  NATIONWIDE_CLIENT_ID: string;
  NATIONWIDE_QUOTE_API: string;
  PARCEL_APP_ID: string;
  PARCEL_CLIENT_ID: string;
  PARCEL_DATABASE_ID: string;
  PARCEL_PRIVATE_KEY: string;
  PLAID_CLIENT_ID: string;
  PLAID_ENVIRONMENT: string;
  PLAID_REDIRECT_URI: string;
  PLAID_SECRET: string;
  SAFE_RATE_QUOTE_API: string;
  STORAGE_TEMP_ROOT: string;
};

export const env: Env = {
  ...(params as Env),
};
