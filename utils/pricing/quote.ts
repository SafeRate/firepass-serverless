import {
  precisionAdd,
  precisionAmoritize,
  precisionDivide,
  precisionMultiply,
  precisionNegate,
  precisionRound,
  precisionRoundUp,
  precisionSubtract,
} from "../math/precisionMath";

import { CashflowResult, precisionCashflow } from "./precisionMathPricing";

import {
  getFHAMortgageInsuranceQuote,
  getPrivateMortgageInsuranceQuote,
  getVAMortgageInsuranceQuote,
  MortgageInsuranceQuoteResult,
} from "./mortgageInsurance";
import {
  getSubordinateSafeRateQuote,
  SubordinateQuoteResult,
} from "./safeRate";

export type Quote = {
  annualIncome: number;
  cashout: boolean;
  condo: boolean;
  combinedLoanToValue: number;
  creditScore: number;
  debtToIncome: number;
  firstTimeHomebuyer: boolean;
  investmentProperty: boolean;
  loanToValue: number;
  loanAmount: number;
  loanTerm: number;
  lock: number;
  manufacturedHome: boolean;
  monthlyDebt: number;
  propertyValue: number;
  purchase: boolean;
  primaryResidence: boolean;
  rateTermOnly: boolean;
  refinance: boolean;
  secondaryResidence: boolean;
  selfEmployed: boolean;
  singleFamilyHome: boolean;
  subordinatedFinancing: boolean;
  subordinateAmount: number;
  subordinateLoanTerm: number;
  state: string;
  townhome: boolean;
  units: number;
  vaFirst: boolean;
  veteran: boolean;
};

export type QuoteResult = {
  adjustments: Adjustment[];
  adjustmentAmount: number;
  adjustmentPayment: number;
  buyAmount: number;
  buyPaymentUpfront: number;
  buyPaymentPeriodic: number;
  buyRate: number;
  cashflow: CashflowResult | null;
  closingCosts: number;
  condoFees: number;
  homeownersInsurance: number;
  loanAmount: number;
  loanTerm: number;
  mortgageInsurance: MortgageInsuranceQuoteResult | null;
  offerRate: number;
  offerPaymentPeriodic: number;
  offerPaymentUpfront: number;
  periodsPerYear: number;
  productType: string;
  productName: string;
  propertyTaxes: number;
  propertyValue: number;
  returnAmount: number;
  returnPaymentUpfront: number;
  returnPaymentPeriodic: number;
  returnRate: number;
  subordinate: SubordinateQuoteResult | null;
  valid: boolean;
};

export enum ProductType {
  jumbo = "Jumbo",
  conventional = "Conventional",
  fha = "FHA",
  va = "VA",
}

export type StateTaxesAndFees = {
  propertyTaxRate: number;
  ho3Rates: number[];
  ho6Multiplier: number;
  condo: number;
};

export type StateTaxesAndFeesDictionary = {
  AL?: StateTaxesAndFees;
  AK?: StateTaxesAndFees;
  AS?: StateTaxesAndFees;
  AZ?: StateTaxesAndFees;
  AR?: StateTaxesAndFees;
  CA?: StateTaxesAndFees;
  CO?: StateTaxesAndFees;
  CT?: StateTaxesAndFees;
  DE?: StateTaxesAndFees;
  DC?: StateTaxesAndFees;
  FM?: StateTaxesAndFees;
  FL?: StateTaxesAndFees;
  GA?: StateTaxesAndFees;
  GU?: StateTaxesAndFees;
  HI?: StateTaxesAndFees;
  ID?: StateTaxesAndFees;
  IL?: StateTaxesAndFees;
  IN?: StateTaxesAndFees;
  IA?: StateTaxesAndFees;
  KS?: StateTaxesAndFees;
  KY?: StateTaxesAndFees;
  LA?: StateTaxesAndFees;
  ME?: StateTaxesAndFees;
  MH?: StateTaxesAndFees;
  MD?: StateTaxesAndFees;
  MA?: StateTaxesAndFees;
  MI?: StateTaxesAndFees;
  MN?: StateTaxesAndFees;
  MS?: StateTaxesAndFees;
  MO?: StateTaxesAndFees;
  MT?: StateTaxesAndFees;
  NE?: StateTaxesAndFees;
  NV?: StateTaxesAndFees;
  NH?: StateTaxesAndFees;
  NJ?: StateTaxesAndFees;
  NM?: StateTaxesAndFees;
  NY?: StateTaxesAndFees;
  NC?: StateTaxesAndFees;
  ND?: StateTaxesAndFees;
  MP?: StateTaxesAndFees;
  OH?: StateTaxesAndFees;
  OK?: StateTaxesAndFees;
  OR?: StateTaxesAndFees;
  PW?: StateTaxesAndFees;
  PA?: StateTaxesAndFees;
  PR?: StateTaxesAndFees;
  RI?: StateTaxesAndFees;
  SC?: StateTaxesAndFees;
  SD?: StateTaxesAndFees;
  TN?: StateTaxesAndFees;
  TX?: StateTaxesAndFees;
  UT?: StateTaxesAndFees;
  VT?: StateTaxesAndFees;
  VI?: StateTaxesAndFees;
  VA?: StateTaxesAndFees;
  WA?: StateTaxesAndFees;
  WV?: StateTaxesAndFees;
  WI?: StateTaxesAndFees;
  WY?: StateTaxesAndFees;
};

export type Product = {
  adjustments: Adjustment[];
  cashout: Boolean;
  condo: Boolean;
  investmentProperty: boolean;
  lenderName: string;
  manufacturedHome: boolean;
  maxAmount: number;
  maxCltv: number;
  maxCreditScore: number;
  maxDti: number;
  maxLock: number;
  maxLtv: number;
  maxTerm: number;
  maxUnits: number;
  minAmount: number;
  minCltv: number;
  minCreditScore: number;
  minDti: number;
  minLock: number;
  minLtv: number;
  minTerm: number;
  minUnits: number;
  prices: Prices[];
  primaryResidence: boolean;
  productType: ProductType | string;
  purchase: boolean;
  rateTermOnly: boolean;
  refinance: boolean;
  secondaryResidence: boolean;
  singleFamilyHome: boolean;
  subordinatedFinancing: boolean;
  townhome: boolean;
};

export type Adjustment = {
  condition: Condition | ConditionGroup;
  value: number | null;
};

export type Prices = {
  maxTerm: number;
  minTerm: number;
  locks: Lock[];
};

export type Lock = {
  lock: number;
  prices: RatePrice[];
};

export type RatePrice = {
  rate: number;
  price: number;
};

export enum Join {
  and = "and",
  or = "or",
}

export type ConditionGroup = {
  join: Join | string;
  conditions: Condition[] | ConditionGroup[];
};

export enum QuoteField {
  annualIncome = "annualIncome",
  cashout = "cashout",
  condo = "condo",
  combinedLoanToValue = "combinedLoanToValue",
  creditScore = "creditScore",
  debtToIncome = "debtToIncome",
  firstTimeHomebuyer = "firstTimeHomebuyer",
  investmentProperty = "investmentProperty",
  loanToValue = "loanToValue",
  loanAmount = "loanAmount",
  loanTerm = "loanTerm",
  lock = "lock",
  manufacturedHome = "manufacturedHome",
  monthlyDebt = "monthlyDebt",
  propertyValue = "propertyValue",
  purchase = "purchase",
  primaryResidence = "primaryResidence",
  rateTermOnly = "rateTermOnly",
  refinance = "refinance",
  secondaryResidence = "secondaryResidence",
  selfEmployed = "selfEmployed",
  singleFamilyHome = "singleFamilyHome",
  subordinatedFinancing = "subordinatedFinancing",
  state = "state",
  townhome = "townhome",
  units = "units",
}

export type Condition = {
  field: QuoteField | string;
  check: Check[];
};

export type Check = {
  value: any;
  check: CheckType | string;
};

export enum CheckType {
  eq = "eq",
  ne = "ne",
  lt = "lt",
  lte = "lte",
  gt = "gt",
  gte = "gte",
}

export const getProductQuotes = function (
  quote: Quote,
  products: Product[]
): QuoteResult[] {
  // Jumbo (use jumbo loan limit)
  // Conventional
  let quoteResults: QuoteResult[] = [];
  let jumboProducts: Product[] = [];
  let fhaProducts: Product[] = [];
  let vaProducts: Product[] = [];
  let conventionalProducts: Product[] = [];

  for (let p = 0; p < products.length; p++) {
    const product = products[p];
    if (
      product.productType.toLowerCase() ===
      ProductType.conventional.toLowerCase()
    ) {
      conventionalProducts.push(product);
    } else if (
      product.productType.toLowerCase() === ProductType.fha.toLowerCase()
    ) {
      fhaProducts.push(product);
    } else if (
      product.productType.toLowerCase() === ProductType.jumbo.toLowerCase()
    ) {
      jumboProducts.push(product);
    } else if (
      product.productType.toLowerCase() === ProductType.va.toLowerCase()
    ) {
      vaProducts.push(product);
    }
  }

  // Jumbo
  // if (quote.loanAmount >= 620500) {
  if (quote.loanAmount > 620500) {
    for (let jp = 0; jp < jumboProducts.length; jp++) {
      const product: Product = jumboProducts[jp];
      const quoteResult: QuoteResult = getQuoteForProduct(quote, product);
      if (quoteResult.offerRate > 0) {
        quoteResults.push(quoteResult);
      }
    }
  } else {
    // conventional
    for (let cp = 0; cp < conventionalProducts.length; cp++) {
      const product: Product = conventionalProducts[cp];
      const quoteResult: QuoteResult = getQuoteForProduct(quote, product);
      if (quoteResult.offerRate > 0) {
        quoteResults.push(quoteResult);
      }
    }

    // if credit score 660 - 720 and loan to value exceeds 90% and is not more than 3%
    if (
      quote.creditScore >= 660 &&
      quote.creditScore <= 720 &&
      quote.loanToValue > 90
    ) {
      let subordinateQuote: Quote = { ...quote };
      subordinateQuote.loanAmount = precisionMultiply(
        [quote.propertyValue, 0.745],
        0
      ) as number;
      subordinateQuote.subordinateAmount = precisionSubtract(
        [quote.loanAmount, subordinateQuote.loanAmount],
        0
      ) as number;
      subordinateQuote.subordinateLoanTerm = quote.loanTerm;
      subordinateQuote.combinedLoanToValue = quote.combinedLoanToValue;
      subordinateQuote.loanToValue = 75;
      subordinateQuote.subordinatedFinancing = true;

      for (let cp = 0; cp < conventionalProducts.length; cp++) {
        const product: Product = conventionalProducts[cp];

        product.lenderName = `Safe Rate Second + ${product.lenderName}`;

        const quoteResult: QuoteResult = getQuoteForProduct(
          subordinateQuote,
          product
        );

        if (quoteResult.offerRate > 0) {
          quoteResults.push(quoteResult);
        }
      }
    }

    // fha
    if (quote.loanAmount <= 420680) {
      for (let fhap = 0; fhap < fhaProducts.length; fhap++) {
        const product: Product = fhaProducts[fhap];
        const quoteResult: QuoteResult = getQuoteForProduct(quote, product);

        if (quoteResult.offerRate > 0) {
          quoteResults.push(quoteResult);
        }
      }
    }

    // veteran
    if (quote.veteran) {
      for (let vap = 0; vap < vaProducts.length; vap++) {
        const product: Product = vaProducts[vap];
        const quoteResult: QuoteResult = getQuoteForProduct(quote, product);
        quoteResults.push(quoteResult);
      }
    }
  }

  // is LTV > 80, CLTV > 80
  // -- FHA, PMI, Safe Rate

  // Calculate homeowners, condo
  const stateTaxesAndFees: StateTaxesAndFees = getStateTaxesAndFees(
    quote.state
  );

  let propertyTaxes: number = precisionMultiply(
    [
      precisionDivide([stateTaxesAndFees.propertyTaxRate, 100], 4) as number,
      quote.propertyValue,
    ],
    0
  ) as number;

  let condoFees: number = 0;
  let homeownersInsurance: number = 0;

  // homeownersInsurance =
  if (quote.propertyValue < 50000) {
    homeownersInsurance = stateTaxesAndFees.ho3Rates[0];
  } else if (quote.propertyValue < 75000) {
    homeownersInsurance = stateTaxesAndFees.ho3Rates[1];
  } else if (quote.propertyValue < 100000) {
    homeownersInsurance = stateTaxesAndFees.ho3Rates[2];
  } else if (quote.propertyValue < 125000) {
    homeownersInsurance = stateTaxesAndFees.ho3Rates[3];
  } else if (quote.propertyValue < 150000) {
    homeownersInsurance = stateTaxesAndFees.ho3Rates[4];
  } else if (quote.propertyValue < 175000) {
    homeownersInsurance = stateTaxesAndFees.ho3Rates[5];
  } else if (quote.propertyValue < 200000) {
    homeownersInsurance = stateTaxesAndFees.ho3Rates[6];
  } else if (quote.propertyValue < 300000) {
    homeownersInsurance = stateTaxesAndFees.ho3Rates[7];
  } else if (quote.propertyValue < 400000) {
    homeownersInsurance = stateTaxesAndFees.ho3Rates[8];
  } else if (quote.propertyValue < 500000) {
    homeownersInsurance = stateTaxesAndFees.ho3Rates[9];
  } else {
    homeownersInsurance = stateTaxesAndFees.ho3Rates[10];
  }

  // condo fees & homeowners adjustment
  if (quote.condo) {
    condoFees = precisionMultiply(
      [
        precisionDivide([stateTaxesAndFees.condo, 100], 5) as number,
        quote.propertyValue,
      ],
      0
    ) as number;

    homeownersInsurance = precisionMultiply(
      [homeownersInsurance, stateTaxesAndFees.ho6Multiplier],
      0
    ) as number;
  }

  // Adjust for 4 years of inflation since most recent numbers are from 2018
  homeownersInsurance = precisionMultiply(
    [homeownersInsurance, 1.1],
    0
  ) as number;

  for (let qr = 0; qr < quoteResults.length; qr++) {
    quoteResults[qr].condoFees = condoFees;
    quoteResults[qr].homeownersInsurance = homeownersInsurance;
    quoteResults[qr].propertyTaxes = propertyTaxes;
  }

  return quoteResults;
};

export const getStateTaxesAndFees = function (
  state: string
): StateTaxesAndFees {
  // Property taxes
  // https://www.usatoday.com/story/money/2020/03/03/states-with-the-highest-and-lowest-property-taxes/111375916/

  // Condo fees
  // https://www.condocontrolcentral.com/condo-association-guide/average-cost-of-condo-fees/

  // Homeowners insurance
  // https://www.businessinsider.com/personal-finance/average-homeowners-insurance-cost
  // https://naic.soutronglobal.net/Portal/Public/en-GB/RecordView/Index/2006
  // https://naic.soutronglobal.net/Portal/DownloadImageFile.ashx?fieldValueId=6950
  const defaultTaxesAndFees: StateTaxesAndFees = {
    propertyTaxRate: 1.75,
    ho3Rates: [461, 672, 676, 698, 748, 798, 851, 957, 1110, 1310, 1884],
    ho6Multiplier: 0.8,
    condo: 1.5,
  };

  const stateTaxesAndFeesLookup: StateTaxesAndFeesDictionary = {
    IL: defaultTaxesAndFees,
  };

  let taxesAndFees: StateTaxesAndFees = defaultTaxesAndFees;

  if (state) {
    if (stateTaxesAndFeesLookup[state]) {
      taxesAndFees = stateTaxesAndFeesLookup[state];
    }
  }

  return taxesAndFees;
};

const isProductEligible = function (quote: Quote, product: Product): boolean {
  let isEligible = true;

  // Term
  if (quote.loanTerm) {
    if (quote.loanTerm < product.minTerm || quote.loanTerm > product.maxTerm) {
      isEligible = false;
    }
  } else {
    isEligible = false;
    console.log(`Quote did not have a valid loan term`);
  }

  // console.log(`term: ${isEligible}`);

  // Amount
  if (quote.loanAmount) {
    if (
      quote.loanAmount < product.minAmount ||
      quote.loanAmount > product.maxAmount
    ) {
      isEligible = false;
    }
  } else {
    isEligible = false;
    console.log(`Quote did not have a valid loan amount`);
  }

  // console.log(`amount: ${isEligible}`);

  if (quote.lock) {
    if (quote.lock < product.minLock || quote.lock > product.maxLock) {
      isEligible = false;
    }
  } else {
    isEligible = false;
    console.log(`Quote did not have a valid lock time`);
  }

  // console.log(`lock: ${isEligible}`);

  // LTV
  if (quote.loanToValue) {
    if (
      quote.loanToValue < product.minLtv ||
      quote.loanToValue > product.maxLtv
    ) {
      isEligible = false;
    }
  } else {
    isEligible = false;
    console.log(`Quote did not have a valid LTV amount`);
  }

  // console.log(`ltv: ${isEligible}`);

  // CLTV
  if (quote.combinedLoanToValue) {
    if (
      quote.combinedLoanToValue < product.minCltv ||
      quote.combinedLoanToValue > product.maxCltv
    ) {
      isEligible = false;
    }
  } else {
    isEligible = false;
    console.log(`Quote did not have a valid CLTV amount`);
  }

  // console.log(`cltv: ${isEligible}`);

  // Purchase or Refinance
  if (quote.purchase) {
    if (product.purchase === false) {
      isEligible = false;
    }
  } else if (quote.refinance) {
    if (product.refinance === false) {
      isEligible = false;
    } else {
      if (quote.cashout) {
        if (product.cashout === false) {
          isEligible = false;
        }
      } else if (quote.rateTermOnly) {
        if (product.rateTermOnly === false) {
          isEligible = false;
        }
      } else {
        isEligible = false;
        console.log(
          `Quote did not have refinance type designated (e.g. rate term, cashout)`
        );
      }
    }
  } else {
    isEligible = false;
    console.log(
      `Quote did not have purchase or refinance indicator designated`
    );
  }

  // console.log(`purchase/refi: ${isEligible}`);

  // Primary, Secondary or Investment
  if (quote.primaryResidence) {
    if (product.primaryResidence === false) {
      isEligible = false;
    }
  } else if (quote.secondaryResidence) {
    if (product.secondaryResidence === false) {
      isEligible = false;
    }
  } else if (quote.investmentProperty) {
    if (product.investmentProperty === false) {
      isEligible = false;
    }
  } else {
    isEligible = false;
    console.log(`Quote did not have occupation type indicated`);
  }

  // console.log(`occupation type: ${isEligible}`);

  // Condo, Single family home,
  if (quote.singleFamilyHome) {
    if (product.singleFamilyHome === false) {
      isEligible = false;
    }
  } else if (quote.condo) {
    if (product.condo === false) {
      isEligible = false;
    }
  } else if (quote.townhome) {
    if (product.townhome === false) {
      isEligible = false;
    }
  } else {
    console.log(
      `Quote did not have property type (single family home, condo, townhome designated)`
    );
  }

  // console.log(`structure: ${isEligible}`);

  // Manufactured housing
  if (quote.manufacturedHome) {
    if (product.manufacturedHome === false) {
      isEligible = false;
    }
  }

  // console.log(`manufactured housing: ${isEligible}`);

  // Credit Score
  if (quote.creditScore) {
    if (quote.creditScore < product.minCreditScore) {
      isEligible = false;
    } else if (quote.creditScore > product.maxCreditScore) {
      isEligible = false;
    }
  } else {
    isEligible = false;
    console.log(`Quote does not have an associated credit score`);
  }

  if (quote.subordinatedFinancing) {
    if (product.subordinatedFinancing === false) {
      isEligible = false;
    }
  }

  if (quote.units) {
    if (quote.units > product.maxUnits) {
      isEligible = false;
    } else if (quote.units < product.minUnits) {
      isEligible = false;
    }
  } else {
    isEligible = false;
    console.log(
      "Quote does not have an associated number of units to be financed"
    );
  }

  return isEligible;
};

const getQuoteForProduct = function (
  quote: Quote,
  product: Product
): QuoteResult {
  let qr: QuoteResult = {
    adjustments: [],
    adjustmentAmount: 0,
    adjustmentPayment: 0,
    buyAmount: 0,
    buyPaymentPeriodic: 0,
    buyPaymentUpfront: 0,
    buyRate: 0,
    cashflow: null,
    closingCosts: 0,
    condoFees: 0,
    homeownersInsurance: 0,
    loanAmount: quote.loanAmount,
    loanTerm: quote.loanTerm,
    mortgageInsurance: null,
    offerRate: 0,
    offerPaymentPeriodic: 0,
    offerPaymentUpfront: 0,
    periodsPerYear: 12,
    productType: product.productType,
    productName: product.lenderName,
    propertyTaxes: 0,
    propertyValue: quote.propertyValue,
    returnAmount: 0,
    returnPaymentPeriodic: 0,
    returnPaymentUpfront: 0,
    returnRate: 0,
    subordinate: null,
    valid: false,
  };

  const isEligible: boolean = isProductEligible(quote, product);

  // console.log(isEligible);

  if (isEligible) {
    qr.valid = true;
    const relevantAdjustments = getRelevantAdjustments(quote, product);
    for (let ra = 0; ra < relevantAdjustments.length; ra++) {
      const relevantAdjustment = relevantAdjustments[ra];
      qr.adjustments.push(relevantAdjustment);
    }

    // Calculate prices
    let ratePrices: RatePrice[] = [];
    let currentLock: number = Infinity;

    for (let p = 0; p < product.prices.length; p++) {
      const prices: Prices = product.prices[p];
      if (
        quote.loanTerm >= prices.minTerm &&
        quote.loanTerm <= prices.maxTerm
      ) {
        const locks: Lock[] = prices.locks;
        for (let l = 0; l < locks.length; l++) {
          const lock: Lock = locks[l];
          if (lock.lock >= quote.lock && currentLock > lock.lock) {
            ratePrices = lock.prices;
            currentLock = lock.lock;
          }
        }
        break;
      }
    }

    if (currentLock < Infinity) {
      // calculate total adjustments
      let totalAdjustment: number = 0;

      for (let a = 0; a < qr.adjustments.length; a++) {
        const adjustment: Adjustment = qr.adjustments[a];
        if (adjustment.value !== null) {
          totalAdjustment = precisionAdd(
            [totalAdjustment, precisionRound(adjustment.value, 6) as number],
            6
          ) as number;
        }
      }

      // find where you fall on price scale
      let minBuy: number = -Infinity;
      let minBuyRate: number = -Infinity;
      let minReturn: number = Infinity;
      let minReturnRate: number = Infinity;

      for (let rp = 0; rp < ratePrices.length; rp++) {
        const ratePrice: RatePrice = ratePrices[rp];

        // To align with adjustments where a cost is + and rebate is -
        const price: number = precisionNegate(ratePrice.price, 6) as any;
        const rate: number = ratePrice.rate;
        const spread: number = precisionSubtract(
          [price, totalAdjustment],
          6
        ) as number;

        // Return
        if (spread > 0) {
          if (rate < minReturnRate) {
            minReturnRate = rate;
            minReturn = spread;
          }

          // Buy
        } else if (spread < 0) {
          if (rate > minBuyRate) {
            minBuyRate = rate;
            minBuy = spread;
          }
        } else if (spread === 0) {
          minBuy = 0;
          minReturn = 0;
          minBuyRate = rate;
          minReturnRate = rate;
        }
      }

      qr.adjustmentAmount = totalAdjustment;
      qr.adjustmentPayment = precisionMultiply(
        [
          precisionDivide([totalAdjustment, 100], 10) as number,
          quote.loanAmount,
        ],
        2
      ) as number;

      if (minBuyRate === -Infinity) {
        qr.buyAmount = 0;
        qr.buyPaymentPeriodic = 0;
        qr.buyPaymentUpfront = 0;
        qr.buyRate = 0;
      } else {
        qr.buyAmount = minBuy;
        qr.buyPaymentPeriodic = precisionAmoritize(
          quote.loanAmount,
          12,
          minBuyRate,
          quote.loanTerm * 12
        );
        qr.buyPaymentUpfront = precisionMultiply(
          [
            quote.loanAmount,
            precisionDivide([qr.buyAmount, 100], 10) as number,
          ],
          2
        ) as number;
        qr.buyRate = minBuyRate;
      }

      if (minReturnRate === Infinity) {
        qr.returnAmount = 0;
        qr.returnPaymentPeriodic = 0;
        qr.returnPaymentUpfront = 0;
        qr.returnRate = 0;
      } else {
        qr.returnAmount = minReturn;
        qr.returnPaymentPeriodic = precisionAmoritize(
          quote.loanAmount,
          12,
          minReturnRate,
          quote.loanTerm * 12
        );
        qr.returnPaymentUpfront = precisionMultiply(
          [
            quote.loanAmount,
            precisionDivide([qr.returnAmount, 100], 10) as number,
          ],
          2
        ) as number;
        qr.returnRate = minReturnRate;
      }

      if (qr.buyRate > 0 && qr.returnRate > 0) {
        if (qr.buyAmount === 0) {
          qr.offerRate = qr.buyRate;
          qr.offerPaymentPeriodic = qr.buyPaymentPeriodic;
        } else if (qr.returnAmount === 0) {
          qr.offerRate = qr.returnRate;
          qr.offerPaymentPeriodic = qr.returnPaymentPeriodic;
        } else {
          // calculate the distance
          const amountDistance = precisionSubtract(
            [qr.returnAmount, qr.buyAmount],
            2
          ) as number;

          const rateDistance = precisionSubtract(
            [qr.returnRate, qr.buyRate],
            2
          ) as number;

          const returProportionOfAmountDistance = precisionDivide(
            [qr.returnAmount, amountDistance],
            5
          ) as number;

          let returnRateDistance = precisionMultiply(
            [rateDistance, returProportionOfAmountDistance],
            5
          ) as number;

          qr.offerRate = precisionSubtract(
            [qr.returnRate, returnRateDistance],
            5
          ) as number;

          qr.offerRate = precisionRoundUp(qr.offerRate, 2) as number;
          qr.offerPaymentPeriodic = precisionAmoritize(
            quote.loanAmount,
            12,
            qr.offerRate,
            quote.loanTerm * 12
          );
          qr.offerPaymentUpfront = 0;
        }
      } else if (qr.returnRate > 0) {
        qr.offerRate = qr.returnRate;
        qr.offerPaymentPeriodic = qr.returnPaymentPeriodic;
        qr.offerPaymentUpfront = qr.returnPaymentUpfront;
      } else if (qr.buyRate > 0) {
        qr.offerRate = qr.buyRate;
        qr.offerPaymentPeriodic = qr.buyPaymentPeriodic;
        qr.offerPaymentUpfront = qr.buyPaymentUpfront;
      }

      const isConventional =
        product.productType.toLowerCase() ===
        ProductType.conventional.toLowerCase();
      const isFha =
        product.productType.toLowerCase() === ProductType.fha.toLowerCase();
      const isVa =
        product.productType.toLowerCase() === ProductType.va.toLowerCase();
      const ltvExceeds80 = quote.loanToValue > 80;
      const isMiBuster = product.lenderName.toLowerCase() === "mi buster";
      const hasSubordinateFinancing = quote.subordinateAmount > 0;

      const isSafeRateTarget =
        isConventional &&
        quote.combinedLoanToValue > 90 &&
        quote.combinedLoanToValue <= 97 &&
        quote.creditScore > 660 &&
        quote.creditScore <= 740 &&
        quote.subordinateAmount > 0;

      // TODO: Conventional PMI check (isConventional, not MI buster, LTV > 80, )
      if (
        isConventional &&
        ltvExceeds80 &&
        !isMiBuster &&
        !hasSubordinateFinancing
      ) {
        // TODO: Conventional Safe Rate check
        const mortgageInsuranceQuoteResult: MortgageInsuranceQuoteResult =
          getPrivateMortgageInsuranceQuote(quote);

        qr.mortgageInsurance = mortgageInsuranceQuoteResult;
      } else if (isSafeRateTarget) {
        const safeRateQuote = getSubordinateSafeRateQuote(quote);
        qr.subordinate = safeRateQuote;
      }

      if (isFha) {
        const fhaInsurance: MortgageInsuranceQuoteResult =
          getFHAMortgageInsuranceQuote(quote);
        qr.mortgageInsurance = fhaInsurance;

        if (qr.mortgageInsurance?.upfrontAmount) {
          qr.loanAmount = precisionAdd(
            [qr.loanAmount, qr.mortgageInsurance?.upfrontAmount],
            2
          ) as number;
        }

        if (qr.offerPaymentPeriodic > 0) {
          qr.offerPaymentPeriodic = precisionAmoritize(
            qr.loanAmount,
            12,
            qr.offerRate,
            precisionMultiply([quote.loanTerm, 12], 0) as number
          );
        }

        if (qr.returnPaymentPeriodic > 0) {
          qr.returnPaymentPeriodic = precisionAmoritize(
            qr.loanAmount,
            12,
            qr.returnRate,
            precisionMultiply([quote.loanTerm, 12], 0) as number
          );
        }

        if (qr.offerPaymentPeriodic > 0) {
          qr.offerPaymentPeriodic = precisionAmoritize(
            qr.loanAmount,
            12,
            qr.offerRate,
            precisionMultiply([quote.loanTerm, 12], 0) as number
          );
        }
      }

      if (isVa) {
        const vaInsurance: MortgageInsuranceQuoteResult =
          getVAMortgageInsuranceQuote(quote);
        qr.mortgageInsurance = vaInsurance;

        if (qr.mortgageInsurance?.upfrontAmount) {
          qr.loanAmount = precisionAdd(
            [qr.loanAmount, qr.mortgageInsurance?.upfrontAmount],
            2
          ) as number;
        }

        if (qr.offerRate > 0) {
          if (qr.offerPaymentPeriodic > 0) {
            qr.offerPaymentPeriodic = precisionAmoritize(
              qr.loanAmount,
              12,
              qr.offerRate,
              precisionMultiply([quote.loanTerm, 12], 0) as number
            );
          }

          if (qr.returnPaymentPeriodic > 0) {
            qr.returnPaymentPeriodic = precisionAmoritize(
              qr.loanAmount,
              12,
              qr.returnRate,
              precisionMultiply([quote.loanTerm, 12], 0) as number
            );
          }

          if (qr.offerPaymentPeriodic > 0) {
            qr.offerPaymentPeriodic = precisionAmoritize(
              qr.loanAmount,
              12,
              qr.offerRate,
              precisionMultiply([quote.loanTerm, 12], 0) as number
            );
          }
        }
      }

      // TODO: payment/DTI check and down-payment check
    } else {
      qr.valid = false;
      console.log("Was not able to identify a suitable lock period");
    }
  }

  if (qr.offerRate > 0) {
    qr.cashflow = precisionCashflow(qr);
  }

  return qr;
};

const getRelevantAdjustments = function (
  quote: Quote,
  product: Product
): Adjustment[] {
  let relevantAdjustments: Adjustment[] = [];

  const adjustments = product.adjustments;
  for (let a = 0; a < adjustments.length; a++) {
    const adjustment = adjustments[a];
    if (isAdjustmentRelevant(adjustment, quote)) {
      relevantAdjustments.push(adjustment);
    }
  }

  if (quote.loanAmount > 0) {
    // Global adjustment
    const correspondentCost: number = 1055;
    const overheadCost: number = 5000;
    const globalCosts = precisionAdd(
      [correspondentCost, overheadCost],
      2
    ) as number;

    let globalAdjustment = precisionMultiply(
      [100, precisionDivide([globalCosts, quote.loanAmount], 6) as number],
      3
    );

    relevantAdjustments.push({
      condition: {
        field: QuoteField.loanAmount,
        check: [
          {
            value: 0,
            check: CheckType.gt,
          },
        ],
      },
      value: globalAdjustment,
    });
  }

  return relevantAdjustments;
};

export const isAdjustmentRelevant = function (
  adjustment: Adjustment,
  quote: Quote
): boolean {
  let isRelevant: boolean = false;

  const condition: Condition | ConditionGroup = adjustment.condition;
  if (doesMeetConditionOrConditionGroup(condition, quote)) {
    isRelevant = true;
  }

  return isRelevant;
};

export const doesMeetConditionOrConditionGroup = function (
  condition: Condition | ConditionGroup,
  quote: Quote
): boolean {
  let doesMeet: boolean = false;

  if (condition.hasOwnProperty("join")) {
    doesMeet = doesMeetConditionGroup(condition as ConditionGroup, quote);
  } else {
    doesMeet = doesMeetCondition(condition as Condition, quote);
  }

  return doesMeet;
};

export const doesMeetConditionGroup = function (
  conditionGroup: ConditionGroup,
  quote: Quote
) {
  const isAnd: boolean = conditionGroup.join === Join.and;

  let doesMeet: boolean = isAnd ? true : false;
  const conditions: Condition[] | ConditionGroup[] = conditionGroup.conditions;

  for (let c = 0; c < conditions.length; c++) {
    const condition: Condition | ConditionGroup = conditions[c];
    const didMeet: boolean = doesMeetConditionOrConditionGroup(
      condition,
      quote
    );

    if (isAnd) {
      doesMeet = doesMeet && didMeet;
    } else {
      doesMeet = doesMeet || didMeet;
    }

    if (isAnd && doesMeet === false) {
      break;
    }
  }

  return doesMeet;
};

const doesMeetCondition = function (
  condition: Condition,
  quote: Quote
): boolean {
  let doesMeet: boolean = false;

  const quoteValue: any = getQuoteFieldValue(condition.field, quote);
  doesMeet = doesMeetChecks(condition.check, quoteValue);
  return doesMeet;
};

const doesMeetChecks = function (checks: Check[], value: any): boolean {
  let doesMeet: boolean = true;
  for (let c = 0; c < checks.length; c++) {
    const check: Check = checks[c];
    doesMeet = doesMeet && doesMeetCheck(check, value);
    if (doesMeet === false) {
      break;
    }
  }

  return doesMeet;
};

const doesMeetCheck = function (check: Check, value: any): boolean {
  let doesMeet: boolean = false;

  const checkType: CheckType | string = check.check;
  let checkValue: any = check.value;

  if (typeof checkValue === "string") {
    if (checkValue === "true") {
      checkValue = true;
    } else if (checkValue === "false") {
      checkValue = false;
    } else if (checkValue.includes(".")) {
      checkValue = parseFloat(checkValue);
    } else {
      checkValue = parseInt(checkValue);
    }
  }

  if (checkType === CheckType.eq) {
    doesMeet = value === checkValue;
  } else if (checkType === CheckType.ne) {
    doesMeet = value !== checkValue;
  } else if (checkType === CheckType.gt) {
    doesMeet = value > checkValue;
  } else if (checkType === CheckType.gte) {
    doesMeet = value >= checkValue;
  } else if (checkType === CheckType.lt) {
    doesMeet = value < checkValue;
  } else if (checkType === CheckType.lte) {
    doesMeet = value <= checkValue;
  }

  return doesMeet;
};

const getQuoteFieldValue = function (
  quoteField: QuoteField | string,
  quote: Quote
): any {
  let result: any = null;

  if (quoteField === QuoteField.annualIncome) {
    result = quote.annualIncome;
  } else if (quoteField === QuoteField.cashout) {
    result = quote.cashout;
  } else if (quoteField === QuoteField.condo) {
    result = quote.condo;
  } else if (quoteField === QuoteField.combinedLoanToValue) {
    result = quote.combinedLoanToValue;
  } else if (quoteField === QuoteField.creditScore) {
    result = quote.creditScore;
  } else if (quoteField === QuoteField.debtToIncome) {
    result = quote.debtToIncome;
  } else if (quoteField === QuoteField.firstTimeHomebuyer) {
    result = quote.firstTimeHomebuyer;
  } else if (quoteField === QuoteField.investmentProperty) {
    result = quote.investmentProperty;
  } else if (quoteField === QuoteField.loanAmount) {
    result = quote.loanAmount;
  } else if (quoteField === QuoteField.loanTerm) {
    result = quote.loanTerm;
  } else if (quoteField === QuoteField.loanToValue) {
    result = quote.loanToValue;
  } else if (quoteField === QuoteField.lock) {
    result = quote.lock;
  } else if (quoteField === QuoteField.manufacturedHome) {
    result = quote.manufacturedHome;
  } else if (quoteField === QuoteField.monthlyDebt) {
    result = quote.monthlyDebt;
  } else if (quoteField === QuoteField.propertyValue) {
    result = quote.propertyValue;
  } else if (quoteField === QuoteField.purchase) {
    result = quote.purchase;
  } else if (quoteField === QuoteField.primaryResidence) {
    result = quote.primaryResidence;
  } else if (quoteField === QuoteField.rateTermOnly) {
    result = quote.rateTermOnly;
  } else if (quoteField === QuoteField.refinance) {
    result = quote.refinance;
  } else if (quoteField === QuoteField.secondaryResidence) {
    result = quote.secondaryResidence;
  } else if (quoteField === QuoteField.selfEmployed) {
    result = quote.selfEmployed;
  } else if (quoteField === QuoteField.subordinatedFinancing) {
    result = quote.subordinatedFinancing;
  } else if (quoteField === QuoteField.state) {
    result = quote.state;
  } else if (quoteField === QuoteField.units) {
    result = quote.units;
  }

  return result;
};
