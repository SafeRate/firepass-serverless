import { env } from "./env";

let mapFields = {
  email: "emailPrimary",
  email_verified: "emailVerified",
  family_name: "lastName",
  given_name: "firstName",
};

mapFields[env.AUTH_SAFE_RATE_ROLES_URL] = "roles";
mapFields[env.AUTH_SAFE_RATE_ID_URL] = "saverUser";

const userFields = [
  "email",
  "email_verified",
  "family_name",
  "given_name",
  "name",
  "nickname",
  "picture",
  env.AUTH_SAFE_RATE_ROLES_URL,
  env.AUTH_SAFE_RATE_ID_URL,
];
