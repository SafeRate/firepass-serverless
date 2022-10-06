import { Consumer, QueryResolvers } from "../../types/resolverTypes";
import { equifaxClient, EquifaxCreditReportParent } from "../../utils/equifax";
import { v4 as uuidv4 } from "uuid";
import { parcelClient } from "../../utils/parcel";

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

      try {
        const documentId = await context.parcelClient.uploadJSONDocument(
          returnResult,
          creditReportParent,
          [returnResult]
        );

        await context.parcelClient.insertCreditReport(
          documentId,
          context.user.id
        );

        console.log("Added credit report");
        return documentId;
      } catch (error) {
        console.log("Unable to add credit report");
        console.log(error);
      }
    }
  } else {
    throw new Error("Could not obtain credit report");
  }

  return returnResult;
};
