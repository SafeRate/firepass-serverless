import { QueryResolvers } from "../../types/resolverTypes";
import { v4 as uuidv4 } from "uuid";
import { getDocumentById } from "./getDocumentById";
import {
  EquifaxCreditReportParent,
  EquifaxModelIdentifer,
} from "../../utils/equifax";
import { query } from "express";
import { EstatedProperty } from "../../utils/estated";

type EstatedQueryResult = {
  query: string;
  result: null | string | number | boolean;
};

type EstatedQueriesResult = {
  id: string;
  queries: EstatedQueryResult[];
};

export const queryEstated: QueryResolvers["queryEstated"] = async (
  _parent,
  args,
  context
): Promise<EstatedQueriesResult> => {
  console.log(args);

  const crqr: EstatedQueriesResult = {
    id: uuidv4(),
    queries: [],
  };

  const documentId = args.id;
  const queries: string[] = args.queries;

  if (documentId && Array.isArray(queries) && queries.length > 0) {
    const estatedDocument: EstatedProperty =
      await context.parcelClient.getJSONDocumentById(documentId);

    if (!estatedDocument) {
      throw new Error("No estated found");
    }

    for (let q = 0; q < queries.length; q++) {
      const query = queries[q];
      let result: null | string | number | boolean = null;
      switch (query) {
        case "squareFootage":
          result = estatedDocument.parcel.area_sq_ft;
          break;
        default:
          break;
      }

      const queryResult: EstatedQueryResult = {
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
