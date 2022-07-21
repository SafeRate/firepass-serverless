import { QueryResolvers } from "../../types/resolverTypes";
import { v4 as uuidv4 } from "uuid";
import { getDocumentById } from "./getDocumentById";
import {
  EquifaxCreditReportParent,
  EquifaxModelIdentifer,
} from "../../utils/equifax";
import { query } from "express";

type CreditReportQueryResult = {
  query: string;
  result: null | string | number | boolean;
};

type CreditReportQueriesResult = {
  id: string;
  queries: CreditReportQueryResult[];
};

export const queryCreditReport: QueryResolvers["queryCreditReport"] = async (
  _parent,
  args,
  context
): Promise<CreditReportQueriesResult> => {
  const crqr: CreditReportQueriesResult = {
    id: uuidv4(),
    queries: [],
  };

  const documentId = args.id;
  const queries: string[] = args.queries;

  if (documentId && Array.isArray(queries) && queries.length > 0) {
    const creditReportDocument: EquifaxCreditReportParent =
      await context.parcelClient.getJSONDocumentById(documentId);

    if (!creditReportDocument) {
      throw new Error("No credit report found");
    }

    const creditReport =
      creditReportDocument.consumers.equifaxUSConsumerCreditReport[0];

    for (let q = 0; q < queries.length; q++) {
      const query = queries[q];
      let result: null | string | number | boolean = null;
      switch (query) {
        case "hasBankruptcies":
          result = creditReport.bankruptcies.length > 0;
          break;
        case "fico 8 nonfacta":
          for (let c = 0; c < creditReport.models.length; c++) {
            const model = creditReport.models[c];
            if (
              model.modelNumber ===
              parseInt(EquifaxModelIdentifer.FICO_8_NONFACTA)
            ) {
              result = model.score;
              break;
            }
          }
          break;
        case "vantage 3 english":
          for (let c = 0; c < creditReport.models.length; c++) {
            const model = creditReport.models[c];
            if (
              model.modelNumber ===
              parseInt(EquifaxModelIdentifer.VANTAGE_SCORE_3_ENGLISH)
            ) {
              result = model.score;
              break;
            }
          }
          break;
        default:
          break;
      }

      const queryResult: CreditReportQueryResult = {
        query,
        result,
      };

      crqr.queries.push(queryResult);
    }
  } else {
    throw new Error("Insufficient args passed to query credit report");
  }

  return crqr;
};
