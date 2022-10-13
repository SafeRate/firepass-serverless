import axios from "axios";
import { env } from "./env";
import { CreditReport } from "./creditReport";
import { Property } from "./property";
import { v4 as uuidv4, v4 } from "uuid";

export type CoveredLocationConstructionInfo = {
  additionalFoundationType: CoveredLocationConstructionInfoFoundationTypeAdditional;
  additionalHeating: string;
  ceilings: CoveredLocationConstructionInfoFeaturePercentage[];
  centralCooling: string;
  constructionType: string;
  exteriorWalls: string;
  foundationType: CoveredLocationConstructionInfoFoundationType;
  flooring: CoveredLocationConstructionInfoFeaturePercentage[];
  fullBathroomDescription: string;
  garages: CoveredLocationConstructionInfoGarages[];
  halfBathroomDescription: number;
  heating: string;
  kitchenDescription: string;
  otherStructures: CoveredLocationConstructionInfoOtherStructures;
  numberOfFullBathrooms: number;
  numberOfHalfBathrooms: number;
  numberOfKitchens: number;
  numberOfStories: string;
  roofMaterial: string;
  siteAccess: string;
  squareFootage: number;
  wallHeights: CoveredLocationConstructionInfoHeightPercentage[];
  walls: CoveredLocationConstructionInfoFeaturePercentage[];
  yearBuilt: number;
};

export type CoveredLocationConstructionInfoFeaturePercentage = {
  feature: string;
  percentage: number;
};

export type CoveredLocationConstructionInfoHeightPercentage = {
  height: number;
  percentage: number;
};

export type CoveredLocationConstructionInfoFoundationType = {
  slab: boolean;
  crawlSpace: boolean;
  basement: boolean;
  daylightWalkoutBasement: boolean;
  piersRaised: boolean;
  suspendedOverHillside: boolean;
};

export type CoveredLocationConstructionInfoFoundationTypeAdditional = {
  concreteMasonry: boolean;
  dirt: boolean;
  landfill: boolean;
  open: boolean;
  rock: boolean;
  sand: boolean;
};

export type CoveredLocationConstructionInfoGarages = {
  numberOfCars: number;
  squareFeet: number;
  garageType: string;
};

export type CoveredLocationConstructionInfoOtherStructures = {
  openPorch: boolean;
  screenPorch: boolean;
  sunSolarRoom: boolean;
  woodDeck: boolean;
  breezeway: boolean;
};

export type CoveredLocationRiskItemsDogs = {
  dogBreed: string;
  biteHistory: boolean;
};

export type CoveredLocationRiskItems = {
  animalThatCausedInjury: boolean;
  dangerousOrExoticAnimal: boolean;
  distanceToNonOwnedBuildingPool: string;
  distanceToNonOwnedBuildingTrampoline: string;
  divingBoard: boolean;
  dogs: CoveredLocationRiskItemsDogs[];
  haveDogs: boolean;
  poolFence: boolean;
  poolLadder: boolean;
  poolSlide: boolean;
  removableLadder: boolean;
  selfLatchingGate: boolean;
  swimmingLessonsProvided: boolean;
  swimmingPool: boolean;
  trampoline: boolean;
  trampolineFence: boolean;
  trampolineNet: boolean;
  trampolineTieDowns: boolean;
  typeOfSwimmingPool: string;
  waterDepthUnderDivingBoard: number;
  waterDepthUnderSlide: number;
};

export type CoveredLocationOilTank = {
  isClosureFillCertified: boolean;
  yearTankInstalled: number;
  tankMaterial: string;
  tankLocation: string;
};

export type CoveredLocationProtectiveDevicesWindMitigations = {
  category: string;
  selectedOption: string;
};

export type CoveredLocationProtectiveDevices = {
  burglarAlarm: string;
  fireOrSmokeAlarm: string;
  hasSecondaryWaterResistance: boolean;
  hasWroughtIronBar: boolean;
  sprinklerSystem: string;
  windMitigations: CoveredLocationProtectiveDevicesWindMitigations[];
  windProtectiveDevices: string[];
};

export type CoveredLocationWiring = {
  circuitBreaker: boolean;
  aluminumWire: boolean;
  knobTube: boolean;
  fuseBox: boolean;
};

export type CoveredLocation = {
  businessOnPremises: boolean;
  childCareBusiness: boolean;
  constructionInfo: CoveredLocationConstructionInfo;
  currentConstruction: boolean;
  currentRemodelingOrRehabiliation: boolean;
  datePurchased: string;
  deededOwner: boolean;
  electricalWiring: CoveredLocationWiring;
  flatRoof: boolean;
  gatedCommunity: boolean;
  hasHydrantIn1000Ft: boolean;
  hasOilTank: boolean;
  historicDistrict: boolean;
  isInCurrLocForThreeYrs: boolean;
  isShortSaleAuctForeclose_Ext: boolean;
  modularHome: boolean;
  nonResidentialToResidential: boolean;
  numberOfAmps: string;
  numberOfFamilies: number;
  numberOfOccupants: number;
  numberOfUnits: number;
  occupancy: string;
  oilTank: CoveredLocationOilTank;
  own: boolean;
  ownershipType: string;
  protectiveDevices: CoveredLocationProtectiveDevices;
  reconstructionCost: number;
  registeredHistoric: boolean;
  riskItems: CoveredLocationRiskItems;
  roofCondition: string;
  roofUlType: string;
  seasonal: boolean;
  secondaryHome: boolean;
  state: string;
  thermostat: boolean;
  townhouse: boolean;
  unitsBetweenFirewalls: number;
  zipCode: string;
};

export type HomeownersQuote = {
  premium: HomeownersQuotePremium;
  discounts: HomeownersQuoteDiscount[];
};

export type HomeownersQuoteAmountCurrency = {
  amount: number;
  currency: string;
};

export type HomeownersQuotePremium = {
  fees: HomeownersQuoteAmountCurrency;
  taxes: HomeownersQuoteAmountCurrency;
  termMonths: number;
  total: HomeownersQuoteAmountCurrency;
  totalBeforeTaxes: HomeownersQuoteAmountCurrency;
};

export type HomeownersQuoteDiscount = {
  description: string;
  isDiscountApplied: boolean;
  category: string;
  coverableId: string;
};

export type HomeownersQuoteInput = {
  age: number;
  creditScore: number;
  coveredLocation: CoveredLocation;
};

export const getHomeownersQuote = async (
  creditReport: CreditReport,
  property: Property,
  overrides: CoveredLocation
): Promise<HomeownersQuote> => {
  let homeownersQuoteInput: HomeownersQuoteInput = {
    age: creditReport.age,
    creditScore: creditReport.fico8,
    coveredLocation: getCoveredLocationDetails(property, overrides),
  };

  const quoteResponse = await axios.post(
    env.NATIONWIDE_QUOTE_API,
    homeownersQuoteInput,
    {
      headers: {
        client_id: env.NATIONWIDE_CLIENT_ID,
        "X-NW-Message-ID": v4(),
      },
    }
  );

  if (quoteResponse.data) {
    return quoteResponse.data;
  } else {
    throw new Error("could not obtain homeowners quote");
  }
};

const getCoveredLocationDetails = (
  property: Property,
  overrides: CoveredLocation
): CoveredLocation => {
  const propertyStructure = property.estated.structure;

  let breezeway = false;
  let openPorch = false;
  let screenPorch = false;
  let sunSolarRoom = false;
  let woodDeck = false;

  if (Array.isArray(propertyStructure.other_areas)) {
    for (let oa = 0; oa < propertyStructure.other_areas.length; oa++) {
      const otherArea = propertyStructure.other_areas[oa];
      breezeway = breezeway || otherArea.type === "Breezeway";
      openPorch =
        openPorch ||
        (otherArea.type.includes("Porch") &&
          otherArea.type !== "Screened Porch");
      screenPorch = screenPorch || otherArea.type === "Screened Porch";
    }
  }

  if (Array.isArray(propertyStructure.other_rooms)) {
    sunSolarRoom = propertyStructure.other_rooms.includes("Sun Room");
  }

  if (Array.isArray(propertyStructure.other_improvements)) {
    for (let oi = 0; oi < propertyStructure.other_improvements.length; oi++) {
      const otherImprovement = propertyStructure.other_improvements[oi];
      woodDeck = woodDeck || otherImprovement.type === "Wood Deck";
    }
  }

  let coveredLocationDetails: CoveredLocation = {
    businessOnPremises: false,
    childCareBusiness: false,
    constructionInfo: {
      additionalFoundationType: {
        concreteMasonry:
          propertyStructure.foundation_type &&
          (propertyStructure.foundation_type === "Concrete" ||
            propertyStructure.foundation_type === "Masonry" ||
            propertyStructure.foundation_type === "Concrete Block" ||
            propertyStructure.foundation_type === "Concrete Beam" ||
            propertyStructure.foundation_type === "Brick")
            ? true
            : false,
        dirt:
          propertyStructure.foundation_type &&
          (propertyStructure.foundation_type === "Earth" ||
            propertyStructure.foundation_type === "Mud Sill")
            ? true
            : false,
        landfill: false,
        open:
          propertyStructure.foundation_type &&
          propertyStructure.foundation_type === "Open Piers"
            ? true
            : false,
        rock:
          propertyStructure.foundation_type &&
          propertyStructure.foundation_type === "Stone"
            ? true
            : false,
        sand: false,
      },
      additionalHeating: propertyStructure.heating_fuel_type,
      ceilings: [],
      centralCooling:
        propertyStructure.air_conditioning_type === "CENTRAL" ? true : false,
      constructionType: propertyStructure.construction_type,
      exteriorWalls: propertyStructure.exterior_wall_type,
      foundationType: {
        basement:
          propertyStructure.basement_type &&
          propertyStructure.basement_type !== "None" &&
          propertyStructure.basement_type !== "Crawl Space",
        crawlSpace:
          propertyStructure.basement_type &&
          propertyStructure.basement_type.includes("Crawl Space")
            ? true
            : false,
        daylightWalkoutBasement:
          propertyStructure.basement_type &&
          propertyStructure.basement_type.includes("Dalight")
            ? true
            : false,
        piersRaised:
          propertyStructure.foundation_type &&
          propertyStructure.foundation_type === "Piers"
            ? true
            : false,
        slab:
          propertyStructure.foundation_type &&
          propertyStructure.foundation_type === "Slab"
            ? true
            : false,
      },
      flooring: [],
      fullBathroomDescription: "",
      garages:
        propertyStructure.parking_type &&
        propertyStructure.parking_type.includes("GARAGE")
          ? [
              {
                garageType: propertyStructure.parking_type,
                numberOfCars: propertyStructure.parking_spaces_count,
                squareFeet: 100,
              },
            ]
          : [],
      halfBathroomDescription: 0,
      heating: propertyStructure.heating_type,
      kitchenDescription: "",
      otherStructures: {
        breezeway,
        openPorch,
        screenPorch,
        sunSolarRoom,
        woodDeck,
      },
      numberOfFullBathrooms:
        propertyStructure.baths - propertyStructure.partial_baths_count,
      numberOfHalfBathrooms: propertyStructure.partial_baths_count,
      numberOfKitchens: 1,
      numberOfStories: propertyStructure.stories,
      roofMaterial: propertyStructure.roof_material_type,
      siteAccess: "",
      squareFootage: propertyStructure.total_area_sq_ft,
      wallHeights: [],
      walls: [],
      yearBuilt: propertyStructure.effective_year_built,
    },
    currentConstruction: false,
    currentRemodelingOrRehabiliation: false,
    datePurchased: new Date().toISOString().split("T")[0],
    deededOwner: true,
    electricalWiring: {
      aluminumWire: false,
      circuitBreaker: true,
      fuseBox: true,
      knobTube: false,
    },
    flatRoof: propertyStructure.roof_style_type === "Flat" ? true : false,
    gatedCommunity: false,
    hasHydrantIn1000Ft: true,
    hasOilTank: false,
    historicDistrict: false,
    isInCurrLocForThreeYrs: false,
    isShortSaleAuctForeclose_Ext: false,
    modularHome: false,
    nonResidentialToResidential: false,
    numberOfAmps: "100 amps",
    numberOfFamilies: property.units,
    numberOfOccupants: property.units * 2,
    numberOfUnits: property.units,
    occupancy: "primary",
    oilTank: {
      isClosureFillCertified: true,
      tankMaterial: "",
      tankLocation: "",
      yearTankInstalled: 0,
    },
    own: true,
    ownershipType: "primary",
    protectiveDevices: {
      burglarAlarm:
        Array.isArray(propertyStructure.amenities) &&
        propertyStructure.amenities.includes("Alarm System")
          ? true
          : false,
      fireOrSmokeAlarm:
        Array.isArray(propertyStructure.amenities) &&
        propertyStructure.amenities.includes(
          "Smoke or Carbon Monoxide Detector"
        )
          ? true
          : false,
      hasSecondaryWaterResistance: false,
      hasWroughtIronBar: false,
      sprinklerSystem:
        Array.isArray(propertyStructure.amenities) &&
        propertyStructure.amenities.includes("Fire Sprinklers")
          ? true
          : false,
      windMitigations: [],
      windProtectiveDevices: "",
    },
    reconstructionCost: property.estimatedValue,
    registeredHistoric: false,
    riskItems: {
      animalThatCausedInjury: false,
      dangerousOrExoticAnimal: false,
      distanceToNonOwnedBuildingPool: 1000,
      distanceToNonOwnedBuildingTrampoline: 1000,
      divingBoard: false,
      dogs: [],
      haveDogs: false,
      poolFence:
        propertyStructure.pool_type &&
        propertyStructure.pool_type.includes("Fence"),
      poolLadder: false,
      poolSlide: false,
      removableLadder: false,
      selfLatchingGate: false,
      swimmingLessonsProvided: false,
      swimmingPool:
        propertyStructure.pool_type &&
        propertyStructure.pool_type !== "Community Pool or Spa",
      trampoline: false,
      trampolineFence: false,
      trampolineNet: false,
      trampolineTieDowns: false,
      typeOfSwimmingPool: false,
      waterDepthUnderDivingBoard: 3,
      waterDepthUnderSlide: 3,
    },
    roofCondition: "",
    roofUlType: propertyStructure.roof_style_type,
    seasonal: false,
    secondaryHome: false,
    state: property.estated.address.state,
    thermostat: true,
    townhouse: property.townhome,
    unitsBetweenFirewalls: property.units,
    zipCode: property.estated.address.zip_code,
    ...overrides,
  };

  return coveredLocationDetails;
};
