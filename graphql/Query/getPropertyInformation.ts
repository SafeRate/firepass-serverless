import { QueryResolvers } from "../../types/resolverTypes";
import { EstatedProperty } from "../../utils/estated";
import { v4 as uuidv4 } from "uuid";
import { parcelClient } from "../../utils/parcel";

export const getPropertyInformation: QueryResolvers["getPropertyInformation"] =
  async (_parent, args, context) => {
    let returnResult: string | null = null;

    const fullAddress = args.fullAddress;

    const estatedProperty: EstatedProperty =
      await context.estatedClient.getEstatedProperty(fullAddress);

    if (estatedProperty) {
      const id = uuidv4();
      estatedProperty.id = id;

      const display = `${estatedProperty.address.formatted_street_address}, ${
        estatedProperty.address.city
      } ${estatedProperty.address.state} ${estatedProperty.address.zip_code}${
        estatedProperty.address.zip_plus_four_code
          ? "-" + estatedProperty.address.zip_plus_four_code
          : ""
      }`;

      try {
        const documentId = await context.parcelClient.uploadJSONDocument(
          display,
          estatedProperty,
          [display]
        );

        if (documentId) {
          await parcelClient.insertUserProperty(
            display,
            documentId,
            false,
            context.user.id
          );

          returnResult = documentId;
          console.log(
            `successfully added ${display} for user ${context.user.id} as property ${id}`
          );
        }
      } catch (error) {
        console.log("unable to add property to user");
        console.log(error);
      }
    }

    return returnResult;
  };
