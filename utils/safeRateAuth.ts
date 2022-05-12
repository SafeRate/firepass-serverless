const SAVER_ROLE = "saver";
const SAFE_RATE_ROLES_URL = "https://saferate.com/roles";
const SAFE_RATE_ID_URL = "https://saferate.com/safe_rate_id";
const SAFE_RATE_TOKEN_URL =
  "https://saferate.us.auth0.com/.well-known/jwks.json";
const SAFE_RATE_AUTH0 = "https://saferate.us.auth0.com/";
const SAFE_RATE_AUTHO_AUDIENCE = "PermissionsAPI";
const SAFE_RATE_AUTH0_ENCRYPTION = "RS256";

let mapFields = {
  email: "emailPrimary",
  email_verified: "emailVerified",
  family_name: "lastName",
  given_name: "firstName",
};

mapFields[SAFE_RATE_ROLES_URL] = "roles";
mapFields[SAFE_RATE_ID_URL] = "saverUser";

const userFields = [
  "email",
  "email_verified",
  "family_name",
  "given_name",
  "name",
  "nickname",
  "picture",
  SAFE_RATE_ROLES_URL,
  SAFE_RATE_ID_URL,
];
