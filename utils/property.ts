import { EstatedProperty } from "./estated";

export class Property {
  addressFull: string;
  condo: boolean;
  coop: boolean;
  estimatedValue: number;
  manufactured: boolean;
  mobileHome: boolean;
  singleFamily: boolean;
  townhome: boolean;
  units: number;

  estated: EstatedProperty;

  constructor(estatedProperty: EstatedProperty) {
    this.estated = estatedProperty;
    this.addressFull = `${estatedProperty.address.formatted_street_address}, ${
      estatedProperty.address.city
    } ${estatedProperty.address.state} ${estatedProperty.address.zip_code}${
      estatedProperty.address.zip_plus_four_code
        ? "-" + estatedProperty.address.zip_plus_four_code
        : ""
    }`;
    this.condo = false;
    this.coop = false;
    this.manufactured = false;
    this.mobileHome = false;
    this.singleFamily = false;
    this.townhome = false;
    this.units = 1;

    this.estimatedValue = 320000;

    const condoItems = ["condominium unit"];

    const coopItems = ["cooperative unit"];

    const manufacturedItems = [
      "mobile or manufactured home",
      "modular or pre-fabricated homes",
    ];
    const mobileHomeItems = [
      "mobile or manufactured home",
      "mobile Home or trailer park",
    ];
    const singleFamilyItems = [
      "single residential",
      "single family residential",
      "cluster home",
      "row house",
      "rural or agricultural residence",
      "bungalow",
      "duplex",
      "triplex",
      "quadruplex",
    ];
    const townhomeItems = ["townhouse"];

    const landUseType =
      this.estated.parcel.standardized_land_use_type.toLowerCase();

    for (let sfi = 0; sfi < singleFamilyItems.length; sfi++) {
      if (landUseType === singleFamilyItems[sfi]) {
        this.singleFamily = true;
        break;
      }
    }

    for (let ci = 0; ci < condoItems.length; ci++) {
      if (landUseType === condoItems[ci]) {
        this.condo = true;
        break;
      }
    }

    for (let ci = 0; ci < coopItems.length; ci++) {
      if (landUseType === coopItems[ci]) {
        this.coop = true;
        break;
      }
    }

    for (let ti = 0; ti < townhomeItems.length; ti++) {
      if (landUseType === townhomeItems[ti]) {
        this.townhome = true;
        this.singleFamily = true;
        break;
      }
    }

    for (let mi = 0; mi < manufacturedItems.length; mi++) {
      if (landUseType === manufacturedItems[mi]) {
        this.manufactured = true;
        this.singleFamily = true;
        break;
      }
    }

    for (let mhi = 0; mhi < mobileHomeItems.length; mhi++) {
      if (landUseType === mobileHomeItems[mhi]) {
        this.mobileHome = true;
        break;
      }
    }

    if (this.estated.structure.units_count) {
      this.units = this.estated.structure.units_count;
    } else {
      if (landUseType === "duplex") {
        this.units = 2;
      } else if (landUseType === "triplex") {
        this.units = 3;
      } else if (landUseType === "quadruplex") {
        this.units = 4;
      }
    }

    if (this.estated.valuation?.value) {
      this.estimatedValue = this.estated.valuation.value;
    }
  }
}
