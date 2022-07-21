import axios from "axios";
import { env } from "./env";

export type EstatedProperty = {
  parcel: EstatedPropertyParcel;
};

type EstatedPropertyParcel = {
  area_sq_ft: number;
  county_land_use_description: string;
  county_name: string;
  standardized_land_use_category: string;
  standardized_land_use_description: string;
};

export class EstatedClient {
  constructor() {}

  public getEstatedProperty = async function (
    combinedAddress: string
  ): Promise<EstatedProperty | null> {
    let returnValue: EstatedProperty | null = null;

    const url = `${env.ESTATED_URL}?token=${
      env.ESTATED_API_KEY
    }&combined_address=${encodeURIComponent(combinedAddress)}`;

    try {
      const results = await axios.get(url);
      if (results.data) {
        if (results.data.data) {
          returnValue = results.data.data as EstatedProperty;
        }
      }
    } catch (error) {
      throw new Error(error);
    }

    return returnValue;
  };
}

export const estatedClient = new EstatedClient();
