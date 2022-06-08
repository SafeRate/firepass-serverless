import { ExpressContext } from "apollo-server-express";
import { Auth0User, IScopes } from "../types/general";
import jsonwebtoken from "jsonwebtoken";
import jwksClient from "jwks-rsa";
const { decode, verify } = jsonwebtoken;

const SCOPES = {
  BORROWER_READ: "read:borrower",
  BORROWER_WRITE: "write:borrower",
  SAVER_READ: "read:saver",
  SAVER_WRITE: "write:saver",
  SERVICER_READ: "read:servicer",
  SERVICER_WRITE: "write:servicer",
  INVESTOR_READ: "read:investor",
  INVESTOR_WRITE: "write:investor",
  USER_UPDATE_METADATA: "update:current_user_metadata",
  USER_READ: "read:current_user",
};

const mapFields: any = {
  email_verified: "emailVerified",
  family_name: "lastName",
  given_name: "firstName",
  "https://saferate.com/roles": "roles",
  "https://saferate.com/safe_rate_id": "id",
};

const userFields = [
  "email",
  "email_verified",
  "family_name",
  "given_name",
  "name",
  "nickname",
  "picture",
  "https://saferate.com/roles",
  "https://saferate.com/safe_rate_id",
];

const getAuthPermissions = ({ scope }: { scope: string }) => {
  const returnObj: any = {};
  if (scope) {
    const scopeItems = scope.split(" ");

    if (
      scopeItems.includes(SCOPES.SERVICER_READ) ||
      scopeItems.includes(SCOPES.SERVICER_WRITE)
    ) {
      returnObj.isServicer = true;
    }

    if (
      scopeItems.includes(SCOPES.BORROWER_READ) ||
      scopeItems.includes(SCOPES.BORROWER_WRITE)
    ) {
      returnObj.isBorrower = true;
    }

    if (
      scopeItems.includes(SCOPES.SAVER_READ) ||
      scopeItems.includes(SCOPES.SAVER_WRITE)
    ) {
      returnObj.isSaver = true;
    }

    if (
      scopeItems.includes(SCOPES.INVESTOR_READ) ||
      scopeItems.includes(SCOPES.INVESTOR_WRITE)
    ) {
      returnObj.isInvestor = true;
    }
  }

  return returnObj;
};

export const getUserAndScopesFromTokens = async (
  req: ExpressContext["req"]
): Promise<{ user: Auth0User | null; scopes: IScopes }> => {
  let user: Auth0User | null = null;
  let scopes: IScopes = {};

  try {
    let Authorization = "";
    try {
      // for queries and mutations
      Authorization = req.get("Authorization");
    } catch (e) {
      // specifically for subscriptions as the above will fail
      // Authorization = ctx?.connection?.context?.Authorization;
    }

    const idToken = req.get("idToken");

    const decodedIdToken: any = decode(idToken, { complete: true });

    if (decodedIdToken && decodedIdToken.payload) {
      const buildObj: any = {};
      buildObj.auth = decodedIdToken.payload.sub;

      userFields.forEach((field) => {
        if (decodedIdToken.payload[field]) {
          buildObj[field] = decodedIdToken.payload[field];
        }
      });

      // need to map the auth0 fields from underscore to camel case
      const mapFieldsKeys = Object.keys(mapFields);
      mapFieldsKeys.forEach((mapFieldKey) => {
        if (buildObj[mapFieldKey]) {
          const mapFieldValue = mapFields[mapFieldKey];
          buildObj[mapFieldValue] = buildObj[mapFieldKey];

          delete buildObj[mapFieldKey];
        }
      });

      // if user doesn't have firstName and lastName, add it by splitting on name
      if (buildObj.name) {
        const split = buildObj.name.split(" ");
        if (split[0]) {
          buildObj.firstName = split[0];
        }

        if (split.length > 1) {
          buildObj.lastName = split.slice(1).join(" ");
        }
      }

      user = buildObj;
    }

    const parts = Authorization && Authorization.split(" ");

    if (!parts || parts.length != 2) {
      throw new Error("No token");
    }

    const token = parts[1];
    const decodedToken: any = decode(token, { complete: true });

    if (decodedToken?.header?.alg !== "RS256") {
      throw new Error("Not RS256 token");
    }

    if (decodedToken.header) {
      const client = jwksClient({
        jwksUri: "https://saferate.us.auth0.com/.well-known/jwks.json",
      });
      const { kid } = decodedToken.header;

      const key = await client.getSigningKey(kid);
      const signingKey = key.getPublicKey();

      const identity: any = await verify(token, signingKey, {
        audience: "PermissionsAPI",
        issuer: [`https://saferate.us.auth0.com/`],
        algorithms: ["RS256"],
      });

      if (identity.scope) {
        scopes = getAuthPermissions({ scope: identity.scope });
      }
    } else {
      throw new Error("No token header");
    }
  } catch (e) {}

  return {
    scopes,
    user,
  };
};
