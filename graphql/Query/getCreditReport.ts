import { Consumer, QueryResolvers } from "../../types/resolverTypes";
import { EquifaxCreditReportParent } from "../../utils/equifax";

export const getCreditReport: QueryResolvers["getCreditReport"] = async (
  _parent,
  args,
  context
): Promise<string> => {
  const userId = context.user.id;
  let returnResult: string = "";

  if (!userId) {
    throw new Error("User must be authenticated!");
  }

  const consumer: Consumer = await context.parcelClient.getEquifaxConsumer(
    userId
  );

  if (!consumer) {
    throw new Error("Consumer has not been verified!");
  }

  const creditReportParent: EquifaxCreditReportParent =
    await context.equifaxClient.getOneView(consumer);

  if (creditReportParent) {
    if (
      Array.isArray(
        creditReportParent.consumers.equifaxUSConsumerCreditReport
      ) &&
      creditReportParent.consumers.equifaxUSConsumerCreditReport.length > 0
    ) {
      returnResult =
        creditReportParent.consumers.equifaxUSConsumerCreditReport[0]
          .customerReferenceNumber;

      const documentId = await context.parcelClient.uploadJSONDocument(
        returnResult,
        creditReportParent,
        [returnResult]
      );

      return documentId;
    }
  } else {
    throw new Error("Could not obtain credit report");
  }

  return returnResult;
};
