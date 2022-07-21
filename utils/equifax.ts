import { env } from "./env";
import axios from "axios";
import qs from "qs";
import { Consumer } from "../types/resolverTypes";
import { parcelClient } from "./parcel";
import { v4 as uuidv4 } from "uuid";
// import FormData from "form-data";

enum EquifaxStage {
  SANDBOX = "sandbox",
  TEST = "test",
  LIVE = "live",
}

enum EquifaxScope {
  AML_CONNECT = "https://api.equifax.com/business/amlc/v1/entity-screenings",
  CONSUMER_ENROLLMENT = "https://api.equifax.com/personal/consumer-data-suite/v1/enrollment",
  CONSUMER_CREDIT_REPORT_MONITORING = "https://api.equifax.com/personal/consumer-data-suite/v1/creditMonitoring",
  CONSUMER_CREDIT_REPORTS = "https://api.equifax.com/personal/consumer-data-suite/v1/creditReport",
  CONSUMER_CREDIT_SCORES = "https://api.equifax.com/personal/consumer-data-suite/v1/creditScore",
  DIGITAL_IDENTITY_TRUST = "https://api.equifax.com/business/id-risk-assessment/v2",
  INSTATOUCH_ID = "https://api.equifax.com/business/instatouch-identity",
  ONEVIEW = "https://api.equifax.com/business/oneview/consumer-credit/v1",
  PREAPPROVAL_OF_ONE = "https://api.equifax.com/business/preapproval-of-one/v1",
  PROPERTY_VERIFICATION = "https://api.equifax.com/business/verifications/v1/property:r",
  SCORES_AND_ATTRIBUTES = "https://api.equifax.com/business/scores-and-attributes/v1",
  STATE_ISSUED_ID_TRUST = "https://api.equifax.com/business/states-id-cards-verify",
  TALENT_REPORT_EDUCATION = "https://api.equifax.com/business/talent-reports/v1",
  TALENT_REPORT_EMPLOYMENT = "https://api.equifax.com/business/staffing/v2/talent-reports/employment",
}

enum EquifaxConsentEventType {
  OPT_IN = "opt-in",
  OPT_OUT = "opt-out",
}

enum EquifaxConsentType {
  SMS = "SMS",
  WHITELIST = "whitelist",
}

enum EquifaxConsentMethod {
  TCO = "TCO",
  TCP = "TCP",
  MA = "MA",
  OTHER = "Other",
}

enum EquifaxRentBuyOwn {
  BUY = "B",
  OWN = "O",
  RENT = "R",
}

enum EquifaxConsentServices {
  IDENTITY = "identity",
}

enum EquifaxIdentityOutputCode {
  EN = "EN",
  "EN-PF" = "EN-PF",
}

export enum EquifaxCurrentDesignator {
  CURRENT = "CURRENT",
  PREVIOUS = "PREVIOUS",
}

type EquifaxInstaTouchIdHandshake = {
  sessionId: string;
  instaTouch: string;
  carrier: string | null;
};

enum EquifaxIdentifier {
  ADDITIONAL = "additional",
  CURRENT = "current",
  FORMER = "former",
}

enum EquifaxFlagIndicator {
  YES = "Y",
  NO = "N",
}

enum EquifaxCreditReportTradeType {
  INSTALLMENT = "I",
  LEASE = "L",
  LINE_OF_CREDIT = "C",
  MORTGAGE = "M",
  OPEN = "O",
  REVOLVING = "R",
}

// https://help.cubase.org/cubase/crdtbureauaccttypecodes.htm
enum EquifaxCreditReportAccountTypeCode {
  AGRICULTURAL = "7B",
  ATTORNEY_FEES = 95,
  AUTO = 0,
  AUTO_LEASE = "3A",
  BUSINESS_CREDIT_CARD = "8A",
  BUSINESS_LINE_PERSONALLY_GUARANTEED = "9B",
  BUSINESS_LOAN = 10,
  CHARGE_ACCOUNT = 7,
  CHILD_SUPPORT = 93,
  COLLECTION_AGENCY_ATTORNEY = 48,
  COMBINED_CREDIT_PLAN = 37,
  COMMERCIAL_INSTALLMENT_LOAN = "6A",
  COMMERCIAL_LINE_OF_CREDIT = "7A",
  COMMERCIAL_MORTGAGE_LOAN = "6B",
  CONSTRUCTION_LOAN = "0F",
  CONVENTIONAL_REAL_ESTATE_MORTGAGE = 26,
  CREDIT_CARD = 18,
  CREDIT_LINE_SECURED = 47,
  DEBIT_CARD = 43,
  DEBT_CONSOLIDATION = 91,
  DEBT_COUNSELING_SERVING = 34,
  DEBT_PURCHASER = "0C",
  DEPOSIT_RELATED = "8B",
  EDUCATIONAL_LOAN = 12,
  FAMILY_SUPPORT = 50,
  FARMERS_HOME_ADMIN_MORTGAGE_LOAN = "2C",
  FHA_HOME_IMPROVEMENT_LOAN = 5,
  FHA_MORTGAGE_LOAN = 19,
  FLEXIBLE_SPENDING_CREDIT_CARD = "0G",
  GOVERNMENT_BENEFIT = 75,
  GOVERNMENT_EMPLOYEE_ADVANCE = 73,
  GOVERNMENT_FEE_FOR_SERVICES = 72,
  GOVERNMENT_FINE = 71,
  GOVERNMENT_GRANT = 69,
  GOVERNMENT_MISC_DEBT = 74,
  GOVERNMENT_OVERPAYMENT = 70,
  GOVERNMENT_SECURED_DIRECT_LOAN = 68,
  GOVERNMENT_UNSECURED_DIRECT_LOAN = 67,
  GOVERNMENT_UNSECURED_GUARANTEED_LOAN = 65,
  HOME_EQUITY = "6D",
  HELOC = 89,
  HOME_IMPROVEMENT = 4,
  HOUSEHOLD_GOODS = "1C",
  INSTALLMENT_SALES_CONTRACT = 6,
  LEASE = 13,
  LINE_OF_CREDIT = 15,
  MANUFACTURED_HOUSING = 17,
  MEDICAL_DEBT = 90,
  NOTE_LOAN = 20,
  PARTIALLY_SECURED = 3,
  REAL_ESTATE_JUNIOR_LIEN = "5A",
  RECREATIONAL_MERCHANDISE = 11,
  RENTAL_AGREEMENT = 29,
  RETURNED_CHECK = 77,
  SECOND_MORTGAGE = "5B",
  SECURED_BY_HOUSEHOLD_GOODS = 22,
  SECURED_BY_HOUSEHOLDS_GOOD_AND_OTHER_COLLATERAL = 23,
  SECURED_CREDIT_CARD = "2A",
  SECURED_HOME_IMPROVEMENT = "9A",
  SECURED = 2,
  TELECOM_OR_CELLULAR = "4D",
  TIME_SHARE_LOAN = "0A",
  UNSECURED = 1,
  UTILITY_COMPANY = 92,
  VA_MORTGAGE = 25,
}

// https://www.experian.com/esolutions/pdf/ARF7-Glossary.pdf
enum EquifaxCreditReportIndustry {
  AUTO_RENTAL = "AB",
  // todo add all definitions
}

enum EquifaxCreditReportMannerOfPayment {
  BAD_DEBT = 9,
  DUE_DAYS_120_PLUS = 5,
  DUE_PAYMENTS_FOUR = 4,
  DUE_PAYMENTS_NONE_OR_ONE = 1,
  DUE_PAYMENTS_THREE = 3,
  DUE_PAYMENTS_TWO = 2,
  MAKING_PAYMENTS_UNDER_CONSOLIDATION_AGREEMENT = 7,
  NEW = 0,
  NOT_AVAILABLE = "*",
  REPOSSESSION = 8,
}

type EquifaxCodeDescription = {
  code: number | string;
  description: string;
};

type EquifaxConsumerCreditRequest = {
  consumers: EquifaxRequestConsumers;
  customerReferenceIdentifier: string;
  customerConfiguration: EquifaxCustomerConfiguration;
};

type EquifaxCustomerConfiguration = {
  equifaxUSConsumerCreditReport?: EquifaxUSConsumerCreditReportConfiguration;
  equifaxUSConsumerTwnRequest?: EquifaxUSConsumerTwnRequest;
  equifaxUSConsumerDataxInquiryRequest?: EquifaxUSConsumerDataxInquiryRequest;
};

type EquifaxUSConsumerCreditReportConfiguration = {
  codeDescriptionRequired: boolean;
  customerCode: string;
  ECOAInquiryType: EquifaxECOAInquiryType;
  fileSelectionLevel: EquifaxFileSelectionLevel;
  fixedInquiryFormat: EquifaxPermissiblePurposeCode;
  memberNumber: string;
  models: EquifaxModel[];
  monthsForInquiry: EquifaxMonthsForInquiry;
  multipleReportIndicator: EquifaxMultipleReportIndicator;
  optionalFeatureCode: EquifaxOptionalFeatureCode[];
  outputFormat: EquifaxOutputFormat;
  pdfComboIndicator: EquifaxPDFComboIndicator;
  productCodes: EquifaxProductCode[];
  protocolIndicator: EquifaxProtocolIndicator;
  plainLanguage: EquifaxPlainLanguage;
  rawReportRequired: boolean;
  riskModelCodeOnly: EquifaxRiskModelCodeOnly;
  securityCode: string;
};

type EquifaxUSConsumerTwnRequest = {
  userId: string;
  userPassword: string;
  permissiblePurposeCode: string;
  templateName: string;
};

type EquifaxUSConsumerDataxInquiryRequest = {
  authentication: EquifaxUSConsumerDataxInquiryRequestAuth;
};

type EquifaxUSConsumerDataxInquiryRequestAuth = {
  licensekey: string;
  password: string;
};

export type EquifaxCreditReportParent = {
  status: EquifaxCreditReportStatus;
  consumers: EquifaxCreditReportParentConsumers;
  links: EquifaxCreditLink[];
};

type EquifaxCreditReportParentConsumers = {
  equifaxUSConsumerCreditReport: EquifaxCreditReport[];
};

enum EquifaxCreditReportStatus {
  COMPLETED = "completed",
}

type EquifaxCreditLink = {
  identifier: string;
  type: string;
  href: string;
};

type EquifaxCreditReport = {
  addresses: EquifaxCreditReportAddress[];
  addressDiscrepancyIndicator: EquifaxFlagIndicator;
  age: number;
  bankruptcies: EquifaxCreditReportBankruptcy[];
  birthDate: number;
  collections: EquifaxCreditReportCollection[];
  customerReferenceNumber: string;
  customerNumber: string;
  consumerReferralCode: number;
  consumerStatements: EquifaxCreditReportConsumerStatement;
  deathDate: number;
  ECOAInquiryType: EquifaxECOAInquiryType;
  employments: EquifaxCreditReportEmployment[];
  fileSinceDate: number;
  formerNames: EquifaxConsumerName[];
  fraudSocialNumAlertCode: EquifaxCodeDescription[];
  fraudIDScanAlertCodes: EquifaxCodeDescription[];
  fraudVictimIndicator: EquifaxCodeDescription;
  hitCode: EquifaxCodeDescription;
  identifier: string;
  inquiries: EquifaxCreditReportInquiry[];
  lastActivityDate: number;
  linkIndicator: string;
  models: EquifaxModelScore[];
  multipleReportIndicator: EquifaxMultipleReportIndicator;
  nameMatchFlags: EquifaxNameMatchFlags;
  reportDate: number;
  subjectName: EquifaxConsumerIdentityName;
  subjectSocialNum: string;
  trades: EquifaxCreditReportTrade[];
};

type EquifaxCreditReportAddress = {
  addressLine1: string;
  addressType: EquifaxIdentifier;
  cityName: string;
  code?: string;
  dateFirstReported: number;
  dateLastReported: number;
  description?: string;
  houseNumber: number;
  rentOwnBuy?: EquifaxRentBuyOwn;
  sourceOfAddress?: EquifaxCodeDescription;
  stateAbbreviation: string;
  streetName: string;
  streetType: string;
  telephoneNumber: string;
  zipCode: number;
};

type EquifaxCreditReportBankruptcy = {
  currentDispositionDate: number;
  currentIntentOrDispositionCode: EquifaxCodeDescription;
  customerNumber: string;
  dateFiled: number;
  dateReported: number;
  filer: string;
  industryCode: string;
  priorIntentOrDispositionCode: EquifaxCodeDescription;
  type: string;
};

type EquifaxCreditReportCollection = {
  accountDesignatorCode: EquifaxCodeDescription;
  accountNumber: number | string;
  balance: number;
  dateAssigned: number;
  dateReported: number;
  indicator: string;
  industryCode: EquifaxCreditReportIndustry;
  customerNumber: string;
  clientNameOrNumber: string;
  creditClassificationCode: EquifaxCodeDescription;
  dateOfFirstDelinquency: number;
  narrativeCodes: EquifaxCodeDescription;
  lastPaymentDate: number;
  originalAmount: number;
  rawNarrativeCodes: string[];
  statusCode: EquifaxCodeDescription[];
  statusDate: number;
};

type EquifaxCreditReportConsumerStatement = {
  dateReported: number;
  datePurged: number;
  statement: string;
};

type EquifaxCreditReportEmployment = {
  identifier: EquifaxIdentifier;
  occupation: string;
  employer: string;
  dateLastReported: number;
  dateFirstReported: number;
};

type EquifaxCreditReportInquiry = {
  type: string;
  industryCode: EquifaxCreditReportIndustry;
  inquiryDate: number;
  customerNumber: string;
  customerName: string;
};

type EquifaxCreditReportTrade = {
  accountDesignator: EquifaxCodeDescription;
  accountNumber: number;
  accountTypeCode: EquifaxCodeDescription;
  actualPaymentAmount: number;
  automatedUpdateIndicator: string;
  balance: number;
  customerName: string;
  customerNumber: string;
  dateMajorDelinquencyFirstReported: number;
  dateOpened: number;
  dateReported: number;
  lastActivityDate: number;
  lastPaymentDate: number;
  monthsReviewed: number;
  narrativeCodes: EquifaxCodeDescription[];
  ninetyDayCounter: number;
  pastDueAmount: number;
  paymentHistory1to24: EquifaxCodeDescription[];
  previousHighRate;
  rate: EquifaxCodeDescription;
  rawNarrativeCode: string[];
  scheduledPaymentAmount: number;
  sixtyDayCounter: number;
  thirtyDayCounter: number;
  termsDurationCode: EquifaxCodeDescription;
  termsFrequencyCode: EquifaxCodeDescription;
};

type EquifaxModelScore = {
  type: EquifaxModelType;
  modelNumber: number;
  score: number;
  reasons: EquifaxCodeDescription[];
};

enum EquifaxModelType {
  MODEL = "MODEL",
  RISK_BASED_PRICING = "RBP",
}

type EquifaxNameMatchFlags = {
  firstNameMatchFlag: EquifaxFlagIndicator;
  lastNameMatchFlag: EquifaxFlagIndicator;
  middleNameMatchFlag: EquifaxFlagIndicator;
};

enum EquifaxMonthsForInquiry {
  MONTHS_3 = "3",
  MONTHS_6 = "6",
  MONTHS_12 = "12",
  MONTHS_24 = "24",
  MONTHS_36 = "36",
  MONTHS_48 = "48",
  MONTHS_60 = "60",
  MONTHS_72 = "72",
  MONTHS_84 = "84",
  MONTHS_96 = "96",
  MONTHS_108 = "108",
  MONTHS_120 = "120",
  NONE_SPECIFIED = "",
}

// Todo: Find documentation
enum EquifaxFileSelectionLevel {
  BASE = "B",
}

enum EquifaxMultipleReportIndicator {
  ONE_REPORT = "1",
  MULTIPLE_REPORTS_PUERTO_RICO_ONLY = "F",
}

// Todo: Find documentation
enum EquifaxPlainLanguage {
  PLAIN = "P",
}

// TODO: Find documentation
enum EquifaxECOAInquiryType {
  AUTHORIZED = "A",
  DECEASED = "D",
  INDIVIDUAL = "I",
  JOINT = "J",
  MAKER = "M",
  PARTICIPATING = "P",
  SIGNER = "S",
  TERMINATED = "T",
  UNDESIGNATED = "U",
}

// TODO: Find documentation
enum EquifaxProtocolIndicator {
  PROTOCOL_2 = "2",
}

// TODO: Find documentation
enum EquifaxOutputFormat {
  JSON = "T2",
}

enum EquifaxPermissiblePurposeCode {
  AGENCY_ADMINISTERING_A_STATE_PLAN_454 = "05",
  AUTOMOBILE_OR_TRUCK = "52",
  AUTOMOTIVE_REPAIR = "53",
  AUTOMOTIVE_PARTS = "54",
  BANKRUPTCY_FILING = "51",
  BOAT_OR_RECREATIONAL_VEHICLE = "55",
  CHILD_SUPPORT_AGENCY = "07",
  CONSUMER_CONTINUES_TO_MEET_TERMS = "13",
  CONSUMER_CREDIT_MONITORING = "72",
  CONSUMER_CREDIT_REPORT_COPY = "71",
  CONSUMER_FIDUCIARY = "22",
  CONSUMER_LEGAL_OR_BENEFICIAL_INTEREST = "19",
  CONSUMER_LOCATE_DELINQUENT_ACCOUNT = "23",
  CONSUMER_MEDICAL_INFORMATION = "29",
  CONSUMER_MEDICAL_INFORMATION_CREDIT_TRANSACTION = "26",
  CONSUMER_WRITTEN_INSTRUCTIONS = "03",
  CONSUMER_WRITTEN_INSTRUCTIONS_RESELLER = "06",
  COLLECTION_ACCOUNT = "04",
  COURT_OR_SUBPOENA = "14",
  CREDIT_CARD = "61",
  EMPLOYMENT = "09",
  EMPLOYMENT_MEDICAL_INFORMATION = "27",
  FARM_EQUIPMENT = "56",
  FRAUD_PROTECTION_OR_PREVENTION = "17",
  GOVERNMENT_AGENCY_FCRA_SECTION_608 = "16",
  HOME_BUILDING_MATERIALS_HARDWARE = "65",
  HOME_FURNISHINGS = "62",
  HOME_HEATING_OIL_FUEL = "68",
  HOME_HVAC_PLUMBING_ELECTRICAL = "64",
  HOME_IMPROVEMENT = "63",
  HOME_UTILITIES = "69",
  HOUSING_COUNSELING_AGENCY = "73",
  INSTITUTIONAL_RISK_CONTROL = "18",
  IN_CONJUCTION_WITH_SOLE_PROPRIETORSHIP = "24",
  IN_CONJUCTION_WITH_CORPORATION = "25",
  INSURANCE_UNDERWRITING = "11",
  INSURANCE_UNDERWRITING_EXISTING_POLICYHOLDERS = "12",
  INSURANCE_UNDERWRITING_FOR_REINSURANCE_OR_ACCOUNT_ADMINISTRATION = "21",
  INSURANCE_UNDERWRITING_MEDICAL_INFORMATION = "28",
  LAW_ENFORCEMENT_AGENCY_INVESTIGATION = "20",
  LICENSE_ELIGIBILITY = "10",
  MEDICAL_CARE_DENTAL_CARE_HOSPITALIZATION = "66",
  MORTGAGE_LOAN = "57",
  MORTGAGE_LOAN_REFINANCE = "58",
  MORTAGE_HELOC = "59",
  PERSONAL_LOAN = "60",
  PERSONAL_SERVICES = "67",
  POTENTIAL_INVESTOR_SERVICER_OR_INSURER_WITH_VALUATION = "01",
  RESOLVE_CONSUMER_DISPUTES_OR_INQUIRIES = "18",
  TENANT_SCREEN_APPLICATION = "15",
  WHOLESALE_GOODS = "70",
}

enum EquifaxProductCode {
  MARKETMAX_WITH_CONSUMER_REPORT = "MM",
  MARKETMAX_WITHOUT_CONSUMER_REPORT = "NZ",
}

enum EquifaxPDFComboIndicator {
  NO_PDF_LINK = "N",
  PDF_INCLUDED = "Y",
  ONLY_PDF = "S",
}

enum EquifaxRiskModelCodeOnly {
  SINGLE_PRESCREEN = "^",
  IN_PERSON_STATE_CODE = "P",
  IN_PERSON_CURRENT_ADDRESS = "Q",
  MORTGAGE_REISSUE = "M",
  MULTIPLE_PRESCREEN = "%",
  NONE_SPECIFIED = "",
}

enum EquifaxOptionalFeatureCode {
  DIMENSIONS_DATA = "G",
  ENHANCED_DELINQUENCY_ALERT_SYSTEM = "Z",
  ENHANCED_DELINQUENCY_ALERT_SYSTEM_AND_FICO_SCORE_BASED_ON_EQUIFAX_DATA = "V",
  EQUIFAX_MODELS_THAT_ARE_SETUP_AS_DEFAULT_OR_MULTIPLE_ARE_RETURNED = "O",
  FICO_SCORE_BASED_ON_EQUIFAX_DATA = "X",
  FRAUDIQ_SYNTHETIC_ID_ALERTS = "&",
  MILITARY_LENDING_ACT_WITH_CREDIT_DATA = "B",
  ONLINE_DIRECTORY_WITH_ADDRESS = "D",
  RETURN_RISK_BASED_PRICING_SCORE_INFORMATION_IN_FICO_AND_MODEL_SEGMENTS = "M",
  RETURN_RISK_BASED_PRICING_SCORE_INFORMATION_IN_FICO_ONLY = "Q",
}

type EquifaxModel = {
  identifier: EquifaxModelIdentifer;
};

export enum EquifaxModelIdentifer {
  ADVANCED_COMMUNICATIONS = "05721",
  ADVANCED_COMMUNICATIONS_PLUS = "05724",
  ADVANCED_ENERGY_PLUS = "05236",
  ADVANCED_ENERGY_RISK_SCORE = "05285",
  AUTO_FUSION_SCORE = "05249",
  AUTO_FUSION_SCORE_AND_REPORT = "5169",
  BANKRUPTCY_NAVIGATOR_INDEX_50_ALPHANUMERIC_CODES = "05478",
  BANKRUPTCY_NAVIGATOR_INDEX_50_NUMERIC_CODES = "05477",
  CONSUMER_INCOMEVIEW_MODEL = "05453",
  DDA_RISK_SCORE_MODEL = "05174",
  ENHANCED_DTI_MODELS_BANKCARD = "05014",
  ENHANCED_DTI_MODELS_INSTALLMENT = "05015",
  ENHANCED_DTI_MODELS_REAL_ESTATE = "05016",
  ENHANCED_DTI_MODELS_OTHER_REVOLVING = "05017",
  ENHANCED_DTI_MODELS_BANKCARD_CUSTOM = "05001",
  ENHANCED_DTI_MODELS_INSTALLMENT_CUSTOM = "05010",
  ENHANCED_DTI_MODELS_REAL_ESTATE_CUSTOM = "05011",
  ENHANCED_DTI_MODELS_OTHER_REVOLVING_CUSTOM = "05012",
  FICO_CAPACITY_INDEX = "02373",
  FICO_INSURANCE_AUTO = "02778",
  FICO_INSURANCE_HOME = "02779",
  FICO_10 = "05557",
  FICO_10_T = "05558",
  FICO_10_AUTO = "05632",
  FICO_10_BANKCARD = "05631",
  FICO_9_FACTA = "05206",
  FICO_9_NONFACTA = "05200",
  FICO_9_AUTO_FACTA = "05207",
  FICO_9_AUTO_NONFACTA = "05201",
  FICO_9_BANKCARD_FACTA = "05208",
  FICO_9_BANKCARD_NONFACTA = "05202",
  FICO_8_FACTA = "02369",
  FICO_8_NONFACTA = "02352",
  FICO_8_AUTO_FACTA = "02367",
  FICO_8_AUTO_NONFACTA = "02354",
  FICO_8_BANKCARD_FACTA = "02368",
  FICO_8_BANKCARD_NONFACTA = "02356",
  FICO_8_MORTGAGE_FACTA = "02392",
  FICO_8_MORTGAGE_NONFACTA = "02391",
  FICO_5_FACTA = "02958",
  FICO_5_NONFACTA = "02801",
  FICO_5_AUTO_FACTA = "02964",
  FICO_5_AUTO_NONFACTA = "02803",
  FICO_5_BANKCARD_FACTA = "02965",
  FICO_5_BANKCARD_NONFACTA = "02805",
  FICO_5_PERSONAL_FINANCE_FACTA = "02967",
  FICO_5_PERSONAL_FINANCE_NONFACTA = "02802",
  FICO_5_INSTALLMENT_FACTA = "02966",
  FICO_5_INSTALLMENT_NONFACTA = "02804",
  FICO_NETXGEN_2_FACTA = "02906",
  FICO_NETXGEN_2_NONFACTA = "02825",
  FICO_NETXGEN_1_FACTA = "02905",
  FICO_NETXGEN_1_NONFACTA = "02531",
  FICO_RESILIENCE_INDEX_2 = "05633",
  FICO_RESILIENCE_INDEX_1 = "05542",
  FICO_XD_2 = "05438",
  HEALTHCARE_PREDICTOR_MODEL = "04016",
  INFLECTION_INSURANCE_SCORE = "05533",
  INITIAL_QUOTE_SCORE_INFLECTION_SCORE = "05552",
  INSIGHT_SCORE_CREDIT_CARDS = "05610",
  INSIGHT_SCORE_INSURANCE_CREDIT_AND_SCORE = "05503",
  INSIGHT_SCORE_INSURANCE_SCORE_ONLY = "05510",
  INSIGHT_SCORE_INSURANCE_CREDIT_AND_SCORE_NEVADA = "05693",
  INSIGHT_SCORE_INSURANCE_SCORE_ONLY_NEVADA = "05694",
  INSIGHT_SCORE_PERSONAL_LOANS = "05509",
  INSIGHT_SCORE_RENTAL_MODELS = "10002",
  INSIGHT_SCORE_RETAIL_BANKING_V2 = "05184",
  POWERVIEW_SCORE_EQUIFAX = "05264",
  POWERVIEW_SCORE_LEXISNEXIS = "05318",
  VANTAGE_SCORE_4_ENGLISH = "05402",
  VANTAGE_SCORE_4_SPANISH = "05403",
  VANTAGE_SCORE_3_ENGLISH = "05143",
  VANTAGE_SCORE_3_SPANISH = "05151",
  VANTAGE_SCORE_2_ENGLISH = "05008",
  VANTAGE_SCORE_2_SPANISH = "05028",
  VANTAGE_SCORE_1_ENGLISH = "02978",
  VANTAGE_SCORE_1_SPANISH = "02991",
}

type EquifaxRequestConsumers = {
  addresses?: EquifaxRequestConsumerAddress[];
  age?: string[];
  dateOfBirth?: string[];
  name: EquifaxConsumerName[];
  phoneNumbers?: EquifaxRequestConsumerPhone[];
  socialNum?: EquifaxRequestConsumerSocialNumber[];
};

type EquifaxConsumerName = {
  identifier?: EquifaxIdentifier;
  firstName: string;
  lastName: string;
  middleName?: string;
  suffix?: string;
};

type EquifaxRequestConsumerSocialNumber = {
  identifier: EquifaxIdentifier;
  number: string;
};

type EquifaxRequestConsumerPhone = {
  identifier: EquifaxIdentifier;
  number: string;
};

type EquifaxRequestConsumerAddress = {
  identifier: EquifaxIdentifier;
  houseNumber: string;
  streetName: string;
  streetType: string;
  apartmentNumber?: string;
  city: string;
  state: string;
  zip: string;
};

type EquifaxConsumerIdentityName = {
  firstName: string;
  lastName: string;
};

export type EquifaxConsumerIdentityAddress = {
  type: EquifaxCurrentDesignator;
  streetAddress: string;
  city: string;
  state: string;
  zipcode: string;
};

type EquifaxIdentityIdentification = {
  ssn?: string;
  dob?: string;
};

type EquifaxIdentityContact = {
  emailAddress?: string;
  homePhone?: string;
  mobile?: string;
};

export type EquifaxConsumerIdentity = {
  id: string;
  name: EquifaxConsumerIdentityName;
  addresses: EquifaxConsumerIdentityAddress[];
  identification: EquifaxIdentityIdentification;
  contact: EquifaxIdentityContact;
};

export class EquifaxClient {
  private b2b2cUrlBase: string;
  private b2b2cStage: EquifaxStage;
  private b2b2cAccessToken: string;
  private standardStsUrlBase: string;
  private standardStsAccount: string;
  private standardStsId: string;
  private standardStsSecret: string;
  private standardStsSecurity: string;
  private standardStsStage: string;

  constructor() {
    this.b2b2cAccessToken = env.EQUIFAX_B2B2C_ACCESS_TOKEN;
    this.b2b2cStage = env.EQUIFAX_B2B2C_STAGE as EquifaxStage;
    this.standardStsAccount = env.EQUIFAX_STANDARD_STS_ACCOUNT;
    this.standardStsId = env.EQUIFAX_STANDARD_STS_ACCESS_ID;
    this.standardStsSecret = env.EQUIFAX_STANDARD_STS_ACCESS_SECRET;
    this.standardStsSecurity = env.EQUIFAX_STANDARD_STS_SECURITY;
    this.standardStsStage = env.EQUIFAX_STANDARD_STS_STAGE;

    if (this.standardStsStage === EquifaxStage.LIVE) {
      this.standardStsUrlBase = `https://api.equifax.com`;
    } else if (this.standardStsStage === EquifaxStage.TEST) {
      this.standardStsUrlBase = `https://api.test.equifax.com`;
    } else {
      this.standardStsUrlBase = `https://api.sandbox.equifax.com`;
    }
  }

  private handleEquifaxRequestError() {}

  private getStsAccessToken = async function (
    scope: EquifaxScope
  ): Promise<string> {
    const requestPath = `/v2/oauth/token`;
    const requestUrl = `${this.standardStsUrlBase}${requestPath}`;

    const requestData = {
      grant_type: "client_credentials",
      scope,
    };

    const requestHeaders = {
      "content-type": "application/x-www-form-urlencoded",
    };

    const options = {
      auth: {
        username: this.standardStsId,
        password: this.standardStsSecret,
      },
      headers: requestHeaders,
    };

    try {
      const result = await axios.post(
        requestUrl,
        qs.stringify(requestData),
        options
      );
      if (result.data && result.data.access_token) {
        return result.data.access_token;
      } else {
        console.log("Could not obtain access token!");
        console.log(result);
      }
    } catch (error) {
      console.log("Error in making Sts Access token request");
      // console.log(error);
    }
  };

  //https://developer.equifax.com/products/apiproducts/instatouchr-id
  public getInstaTouchID = async function (
    deviceIp: string
  ): Promise<EquifaxInstaTouchIdHandshake> {
    // Subscribe to get API credentials.
    // Use API credentials to generate an access token.
    const accessToken = await this.getStsAccessToken(
      EquifaxScope.INSTATOUCH_ID
    );

    // Make the Handshake call to start a new API session including the "deviceIP" (‘deviceIP’ determines if the mobile is on the mobile network or WiFi).
    const instaTouchIdHandshakeSession: EquifaxInstaTouchIdHandshake =
      this.startInstatouchIdHandshake(accessToken, deviceIp);

    return instaTouchIdHandshakeSession;
  };

  public getOneView = async function (
    consumer: Consumer
  ): Promise<EquifaxCreditReportParent | null> {
    let returnResult: EquifaxCreditReportParent | null = null;

    const customerConfiguration: EquifaxCustomerConfiguration = {
      equifaxUSConsumerCreditReport: {
        codeDescriptionRequired: true,
        customerCode: env.EQUIFAX_CUSTOMER_CODE,
        ECOAInquiryType: EquifaxECOAInquiryType.INDIVIDUAL,
        fileSelectionLevel: EquifaxFileSelectionLevel.BASE,
        fixedInquiryFormat: EquifaxPermissiblePurposeCode.MORTGAGE_LOAN,
        pdfComboIndicator: EquifaxPDFComboIndicator.NO_PDF_LINK,
        memberNumber: env.EQUIFAX_MERCHANT_ID,
        models: [
          {
            identifier: EquifaxModelIdentifer.FICO_8_NONFACTA,
          },
          {
            identifier: EquifaxModelIdentifer.FICO_8_AUTO_NONFACTA,
          },
          {
            identifier: EquifaxModelIdentifer.FICO_8_BANKCARD_NONFACTA,
          },
          {
            identifier: EquifaxModelIdentifer.VANTAGE_SCORE_1_ENGLISH,
          },
          {
            identifier: EquifaxModelIdentifer.VANTAGE_SCORE_3_ENGLISH,
          },
        ],
        monthsForInquiry: EquifaxMonthsForInquiry.NONE_SPECIFIED,
        multipleReportIndicator: EquifaxMultipleReportIndicator.ONE_REPORT,
        optionalFeatureCode: [],
        outputFormat: EquifaxOutputFormat.JSON,
        plainLanguage: EquifaxPlainLanguage.PLAIN,
        productCodes: [],
        protocolIndicator: EquifaxProtocolIndicator.PROTOCOL_2,
        rawReportRequired: false,
        riskModelCodeOnly: EquifaxRiskModelCodeOnly.NONE_SPECIFIED,
        securityCode: env.EQUIFAX_SECURITY_CODE_3DIG,
      },
    };

    const equifaxConsumers: EquifaxRequestConsumers =
      this.convertConsumerToEquifaxConsumerRequestFormat(consumer);

    const referenceNumber: string = uuidv4();

    // Request setup
    const requestPath = `/business/oneview/consumer-credit/v1/reports/credit-report`;
    const requestUrl = `${this.standardStsUrlBase}${requestPath}`;

    const requestData: EquifaxConsumerCreditRequest = {
      consumers: equifaxConsumers,
      customerConfiguration: customerConfiguration,
      customerReferenceIdentifier: referenceNumber,
    };

    const accessToken = await this.getStsAccessToken(EquifaxScope.ONEVIEW);

    const requestHeaders = {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    };

    const options = {
      headers: requestHeaders,
    };

    try {
      const result = await axios.post(
        requestUrl,
        JSON.stringify(requestData),
        options
      );

      if (result.data) {
        const response: EquifaxCreditReportParent =
          result.data as EquifaxCreditReportParent;

        if (response.status === EquifaxCreditReportStatus.COMPLETED) {
          returnResult = response;
        }
      } else {
        throw new Error("Unable to retrieve credit report");
      }
    } catch (error) {
      console.log("Error in making request to retrieve credit report");
      console.log(error);
    }

    return returnResult;
  };

  public getOtpPasscode = async (
    sessionId: string,
    mobileNumber: string
  ): Promise<{ sessionId: string; transactionKey: string }> => {
    const accessToken = await this.getStsAccessToken(
      EquifaxScope.INSTATOUCH_ID
    );

    const returnObj = {
      sessionId,
      transactionKey: null,
    };

    const requestPath = `/business/instatouch-identity/v2/wifi-sessions/identity-verifications/one-time-passcodes/send`;
    const requestUrl = `${this.standardStsUrlBase}${requestPath}`;

    const requestData = {
      merchantId: env.EQUIFAX_MERCHANT_ID,
      consumerIdentifier: {
        subjectIdentifier: mobileNumber,
        subjectType: "MDN",
      },
    };

    const requestHeaders = {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
      "efx-sessionId": sessionId,
    };

    const options = {
      headers: requestHeaders,
    };

    try {
      const result = await axios.post(
        requestUrl,
        JSON.stringify(requestData),
        options
      );

      if (result.data) {
        if (result?.data?.otpLifecycle?.transactionKey) {
          returnObj.transactionKey = result.data.otpLifecycle.transactionKey;
        } else {
          throw new Error(
            "Don't have required transaction key for OTP passcode"
          );
        }
      }
    } catch (error) {
      console.log("Error in making request");
      console.log(error);
    }

    return returnObj;
  };

  public getPreapprovalOfOne = async function (
    parcelClient,
    userId: string
  ): Promise<string> {
    const accessToken = await this.getStsAccessToken(
      EquifaxScope.PREAPPROVAL_OF_ONE
    );

    const consumer = await parcelClient.getEquifaxConsumer(userId);

    return accessToken;
  };

  private startInstatouchIdHandshake = async function (
    accessToken: string,
    deviceIp: string
  ): Promise<EquifaxInstaTouchIdHandshake> {
    const returnObj = {
      sessionId: null,
      instaTouch: null,
      carrier: null,
    };

    const requestPath = `/business/instatouch-identity/v2/user-sessions`;
    const requestUrl = `${this.standardStsUrlBase}${requestPath}`;

    const requestData = {
      merchantId: env.EQUIFAX_MERCHANT_ID,
      deviceIp,
    };

    const requestHeaders = {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    };

    const options = {
      headers: requestHeaders,
    };

    try {
      const result = await axios.post(
        requestUrl,
        JSON.stringify(requestData),
        options
      );

      if (result.data) {
        const resultData = result.data;
        if (!resultData.sessionID || !resultData.instaTouch) {
          throw new Error("Don't have required data for Instatouch handshake");
        }

        returnObj.sessionId = resultData.sessionID;
        returnObj.instaTouch = resultData.instaTouch;
        if (resultData.carrier) {
          returnObj.carrier = resultData.carrier;
        }
      }
    } catch (error) {
      console.log("Error in making request");
      console.log(error);
    }

    return returnObj;
  };

  public completeInstaTouchOtp = async (
    mobileNumber: string,
    passcode: string,
    sessionId: string,
    transactionKey: string,
    SSN: string,
    zipCode: string
  ) => {
    const accessToken = await this.getStsAccessToken(
      EquifaxScope.INSTATOUCH_ID
    );
    const isValid = await this.validateOtpSession(
      mobileNumber,
      passcode,
      sessionId,
      transactionKey,
      accessToken
    );

    if (isValid === false) {
      throw new Error("Unable to validate OTP!");
    }

    const isConsentRecorded = await this.recordConsent(
      accessToken,
      sessionId,
      EquifaxConsentEventType.OPT_IN,
      EquifaxConsentType.WHITELIST,
      EquifaxConsentMethod.TCO,
      [EquifaxConsentServices.IDENTITY]
    );

    if (isConsentRecorded === false) {
      throw new Error("Unable to record user consent!");
    }

    const consumerIdentity: EquifaxConsumerIdentity | null =
      await this.getConsumerIdentity(
        accessToken,
        sessionId,
        SSN,
        zipCode,
        EquifaxIdentityOutputCode.EN
      );

    return consumerIdentity;
  };

  private convertConsumerToEquifaxConsumerRequestFormat = (
    consumer: Consumer
  ): EquifaxRequestConsumers => {
    const requestConsumer: EquifaxRequestConsumers = {
      dateOfBirth: [consumer.identification.dob],
      name: [
        {
          identifier: EquifaxIdentifier.CURRENT,
          firstName: consumer.name.firstName,
          lastName: consumer.name.lastName,
        },
      ],
      phoneNumbers: [
        {
          identifier: EquifaxIdentifier.CURRENT,
          number: consumer.contact.homePhone,
        },
      ],
      socialNum: [
        {
          identifier: EquifaxIdentifier.CURRENT,
          number: consumer.identification.ssn,
        },
      ],
    };

    return requestConsumer;
  };

  private getConsumerIdentity = async (
    accessToken: string,
    sessionId: string,
    SSN: string,
    zipCode: string,
    outputCode: EquifaxIdentityOutputCode
  ): Promise<EquifaxConsumerIdentity | null> => {
    const requestPath = `/business/instatouch-identity/v2/user-sessions/user-attributes`;
    const requestUrl = `${this.standardStsUrlBase}${requestPath}`;

    let returnObj: EquifaxConsumerIdentity | null = null;

    const requestData = {
      merchantId: env.EQUIFAX_MERCHANT_ID,
      outputCode,
      authentication: {
        zipCode,
        SSN,
      },
    };

    const requestHeaders = {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
      "efx-sessionId": sessionId,
    };

    const options = {
      headers: requestHeaders,
    };

    try {
      const result = await axios.post(
        requestUrl,
        JSON.stringify(requestData),
        options
      );

      if (result.data) {
        const resultData = result.data;
        // console.log(JSON.stringify(resultData, null, 4));
        if (resultData.identity) {
          returnObj = resultData.identity;
        } else {
          throw new Error("Unable to obtain consumer identity data");
        }
      }
    } catch (error) {
      console.log("Error in making request");
      console.log(error);
    }

    return returnObj;
  };

  private recordConsent = async (
    accessToken: string,
    sessionId: string,
    consentEvent: EquifaxConsentEventType,
    consentType: EquifaxConsentType,
    consentMethod: EquifaxConsentMethod,
    consentForServices: EquifaxConsentServices[]
  ) => {
    const requestPath = `/business/instatouch-identity/v2/user-sessions/user-consents`;
    const requestUrl = `${this.standardStsUrlBase}${requestPath}`;

    const requestData = {
      merchantId: env.EQUIFAX_MERCHANT_ID,
      consumerConsent: {
        consentEventDate: new Date().toISOString(),
        consentEvent,
        consentType,
        consentMethod,
        consentForServices,
      },
      consumerIdentifier: {
        subjectIdentifier: sessionId,
        subjectType: "sessionId",
      },
    };

    const requestHeaders = {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
      "efx-sessionId": sessionId,
    };

    const options = {
      headers: requestHeaders,
    };

    try {
      const result = await axios.post(
        requestUrl,
        JSON.stringify(requestData),
        options
      );

      // console.log("a");
      // console.log(result);

      if (result.data) {
        // console.log("b");
        // console.log(result.data);

        const resultData = result.data;
        if (
          resultData.consumerIdentifier &&
          resultData.consumerIdentifier.subjectIdentifier
        ) {
          return true;
        } else {
          return false;
        }
      }
    } catch (error) {
      console.log("Error in making request");
      console.log(error);
    }

    return false;
  };

  private validateOtpSession = async (
    mobileNumber: string,
    passcode: string,
    sessionId: string,
    transactionKey: string,
    accessToken: string
  ) => {
    const requestPath = `/business/instatouch-identity/v2/wifi-sessions/identity-verifications/one-time-passcodes/validate`;
    const requestUrl = `${this.standardStsUrlBase}${requestPath}`;

    const requestData = {
      merchantId: env.EQUIFAX_MERCHANT_ID,
      consumerIdentifier: {
        subjectIdentifier: mobileNumber,
        subjectType: "MDN",
      },
      consumerAuthentication: {
        passcode,
      },
      otpLifecycle: {
        transactionKey,
      },
    };

    const requestHeaders = {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
      "efx-sessionId": sessionId,
    };

    const options = {
      headers: requestHeaders,
    };

    try {
      const result = await axios.post(
        requestUrl,
        JSON.stringify(requestData),
        options
      );

      if (result.data) {
        const resultData = result.data;
        if (resultData.instaTouch) {
          return true;
        } else {
          return false;
        }
      }
    } catch (error) {
      console.log("Error in making request");
      console.log(error);
    }

    return false;
  };
}

export const equifaxClient = new EquifaxClient();
