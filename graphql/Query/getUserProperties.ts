import {
  QueryResolvers,
  UserCreditReport,
  UserProperty,
} from "../../types/resolverTypes";

export const getUserProperties: QueryResolvers["getUserProperties"] = async (
  _parent,
  args,
  context
): Promise<UserProperty[]> => {
  let properties: UserProperty[] = [];

  const results = await context.parcelClient.getUserProperties(context.user.id);

  if (Array.isArray(results) && results.length) {
    for (let r = 0; r < results.length; r++) {
      const result = results[r];
      if (result.display) {
        properties.push({
          display: result.display,
        });
      }
    }
  }

  return properties;
};
