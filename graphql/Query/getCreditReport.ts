import { Consumer, QueryResolvers } from "../../types/resolverTypes";

export const getCreditReport: QueryResolvers["getCreditReport"] = async (
  _parent,
  args,
  context
): Promise<string> => {
  const userId = context.user.id;

  if (!userId) {
    throw new Error("User must be authenticated!");
  }

  const consumer: Consumer = await context.parcelClient.getEquifaxConsumer(
    userId
  );

  if (!consumer) {
    throw new Error("Consumer has not been verified!");
  }

  const referenceNumber = await context.equifaxClient.getOneView(consumer);

  return referenceNumber;
};
