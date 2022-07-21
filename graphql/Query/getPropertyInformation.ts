import { QueryResolvers } from "../../types/resolverTypes";
import { EstatedProperty } from "../../utils/estated";
import { v4 as uuidv4 } from "uuid";

export const getPropertyInformation: QueryResolvers["getPropertyInformation"] =
  async (_parent, args, context) => {
    let returnResult: string | null = null;

    const fullAddress = args.fullAddress;
    const estatedProperty: EstatedProperty =
      await context.estatedClient.getEstatedProperty(fullAddress);

    if (estatedProperty) {
      const id = uuidv4();

      const document = await context.parcelClient.uploadJSONDocument(
        id,
        estatedProperty,
        [id]
      );

      if (document) {
        returnResult = document;
      }
    }

    return returnResult;
  };
