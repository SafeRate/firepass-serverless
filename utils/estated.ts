import axios from "axios";
import { env } from "./env";

// https://estated.com/developers/docs/v4/property/values

export type EstatedProperty = {
  address: EstatedPropertyAddress;
  assessments: EstatedPropertyAssessment[];
  boundary: EstatedPropertyBoundary;
  deeds: EstatedPropertyDeed[];
  market_assessments: EstatedPropertyAssessment[];
  metadata: EstatedPropertyMetadata;
  owner: EstatedPropertyOwner;
  parcel: EstatedPropertyParcel;
  structure: EstatedPropertyStructure;
  taxes: EstatedPropertyTaxes;
  valuation: EstatedPropertyValuation;
};

export type EstatedPropertyAddress = {
  carrier_code: string;
  census_tract: string;
  city: string;
  formatted_street_address: string;
  geocoding_accuracy: string;
  latitude: number;
  longitude: number;
  state: string;
  street_name: string;
  street_number: string;
  street_post_direction: string;
  street_pre_direction: string;
  street_suffix: string;
  unit_number: string;
  unit_type: string;
  zip_code: string;
  zip_plus_four_code: string;
};

export type EstatedPropertyAssessment = {
  improvement_value: number;
  land_value: number;
  total_value: number;
  year: number;
};

export type EstatedPropertyBoundary = {
  geojson: GeoJSON;
};

export type EstatedPropertyDeed = {
  buyer_address: string;
  buyer_city: string;
  buyer_first_name: string;
  buyer_last_name: string;
  buyer_state: string;
  buyer_unit_number: string;
  buyer_unit_type: string;
  buyer_zip_code: string;
  buyer_zip_plus_four_code: string;
  buyer2_first_name: string;
  buyer2_last_name: string;
  deed_book: string;
  deed_page: string;
  distressed_sale: boolean;
  document_id: string;
  document_type: string;
  lender_name: string;
  lender_type: string;
  loan_amount: number;
  loan_due_date: string;
  loan_finance_type: string;
  loan_interest_rate: number;
  loan_type: string;
  original_contract_date: string;
  real_estate_owned: string;
  recording_date: string;
  sale_price: number;
  sale_price_description: string;
  seller_address: string;
  seller_city: string;
  seller_first_name: string;
  seller_last_name: string;
  seller_state: string;
  seller_unit_number: string;
  seller_zip_code: string;
  seller_zip_plus_four_code: string;
  seller2_first_name: string;
  seller2_last_name: string;
  transfer_tax: number;
};

export type EstatedPropertyMetadata = {
  publishing_date: string;
};

export type EstatedPropertyOwner = {
  city: string;
  formatted_street_address: string;
  name: string;
  owner_occupied: string;
  state: string;
  unit_number: string;
  unit_type: string;
  zip_code: string;
  zip_plus_four_code: string;
};

export type EstatedPropertyParcel = {
  apn_original: string;
  apn_previous: string;
  apn_unformatted: string;
  area_acres: number;
  area_sq_ft: number;
  building_count: number;
  county_land_use_code: string;
  county_land_use_description: string;
  county_name: string;
  depth_ft: number;
  fips_code: string;
  frontage_ft: number;
  legal_description: string;
  location_descriptions: string[];
  lot_code: string;
  lot_number: string;
  municipality: string;
  section_township_range: string;
  standardized_land_use_category: string;
  standardized_land_use_description: string;
  standardized_land_use_type: string;
  subdivision: string;
  tax_account_number: string;
  zoning: string;
};

export type EstatedPropertyStructure = {
  air_conditioning_type: string;
  amenities: string[];
  architecture_type: string;
  basement_type: string;
  baths: number;
  beds_count: number;
  condition: string;
  construction_type: string;
  effective_year_built: number;
  exterior_wall_type: string;
  fireplaces: string;
  flooring_types: string[];
  foundation_type: string;
  heating_fuel_type: string;
  heating_type: string;
  interior_wall_type: string;
  other_areas: EstatedPropertyStructureOther[];
  other_features: EstatedPropertyStructureOther[];
  other_improvements: EstatedPropertyStructureOther[];
  other_rooms: string[];
  parking_spaces_count: number;
  parking_type: string;
  partial_baths_count: number;
  plumbing_fixtures_count: number;
  pool_type: string;
  quality: string;
  roof_material_type: string;
  roof_style_type: string;
  rooms_count: number;
  sewer_type: string;
  stories: number;
  total_area_sq_ft: number;
  units_count: number;
  water_type: string;
  year_built: number;
};

export type EstatedPropertyTaxes = {
  amount: number;
  exemptions: string[];
  rate_code_area: string;
  year: number;
};

export type EstatedPropertyStructureOther = {
  sq_ft: string;
  type: string;
};

export type EstatedPropertyValuation = {
  date: string;
  forecast_standard_deviation: number;
  high: number;
  low: number;
  value: number;
};

export type GeoJSON = {
  coordinates: number[][][];
  type: string;
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
