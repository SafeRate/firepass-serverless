import { precisionDivide, precisionMultiply } from "../precisionMath";
import { Adjustment, Quote } from "./quote";

export enum MortgageInsuranceProvider {
  private = "private",
  fha = "fha",
  va = "va",
}

export enum MortgageInsuranceDurationType {
  loanToValue = "loanToValue",
  upfrontOnly = "upfrontOnly",
  years = "years",
}

export type MortgageInsuranceQuoteResult = {
  coverage: string;
  creditScoreBucket: string;
  duration: number;
  durationType: MortgageInsuranceDurationType;
  ltvBucket: string;
  periodicAmount: number;
  periodicRate: number;
  provider: MortgageInsuranceProvider;
  termBucket: string;
  upfrontAmount: number;
  upfrontRate: number;
};

type LookupKey = {
  max: number;
  min: number;
  value: number;
};

const termTableLookup: LookupKey[] = [
  { min: 21, max: Infinity, value: 0 },
  { min: 1, max: 20, value: 1 },
];

const ltvRowLookup: LookupKey[] = [
  { min: 95.01, max: 97, value: 0 },
  { min: 90.01, max: 95, value: 1 },
  { min: 85.01, max: 90, value: 2 },
  { min: 80.01, max: 85, value: 3 },
];

const creditScoreColumnLookup: LookupKey[] = [
  { min: 800, max: Infinity, value: 0 },
  { min: 780, max: 799, value: 1 },
  { min: 760, max: 779, value: 2 },
  { min: 740, max: 759, value: 3 },
  { min: 720, max: 739, value: 4 },
  { min: 700, max: 719, value: 5 },
  { min: 680, max: 699, value: 6 },
  { min: 660, max: 679, value: 7 },
  { min: 640, max: 659, value: 8 },
];

const rates: number[][][] = [
  [
    [0.33, 0.33, 0.34, 0.5, 0.63, 0.74, 0.95, 1.49, 1.61],
    [0.2, 0.2, 0.2, 0.3, 0.39, 0.48, 0.64, 0.95, 1.0],
    [0.16, 0.16, 0.17, 0.22, 0.29, 0.36, 0.49, 0.72, 0.8],
    [0.1, 0.1, 0.1, 0.11, 0.13, 0.15, 0.21, 0.33, 0.35],
  ],
  [
    [0.26, 0.27, 0.28, 0.41, 0.51, 0.52, 0.74, 1.21, 1.36],
    [0.16, 0.17, 0.18, 0.21, 0.3, 0.33, 0.4, 0.6, 0.71],
    [0.11, 0.12, 0.13, 0.14, 0.18, 0.19, 0.25, 0.33, 0.39],
    [0.09, 0.1, 0.1, 0.11, 0.13, 0.16, 0.18, 0.19, 0.23],
  ],
];

const coverages: number[][] = [
  [35, 30, 25, 12],
  [35, 25, 12, 6],
];

function lookup(value: number, lookupValues: LookupKey[]): number {
  let foundValue: number = -1;

  for (let lv = 0; lv < lookupValues.length; lv++) {
    const lookupValue = lookupValues[lv];
    if (value >= lookupValue.min && value <= lookupValue.max) {
      foundValue = lookupValue.value;
      break;
    }
  }

  return foundValue;
}

function getLookupBucket(value: LookupKey): string {
  let bucket: string = ``;
  const min = value.min;
  const max = value.max;

  if (max === Infinity) {
    bucket = `${min}+`;
  } else {
    bucket = `${min} - ${max}`;
  }

  return bucket;
}

// https://www.hud.gov/sites/documents/15-01MLATCH.PDF
export const getFHAMortgageInsuranceQuote = function (
  quote: Quote
): MortgageInsuranceQuoteResult {
  const fhaMIQuote: MortgageInsuranceQuoteResult = {
    coverage: "100%",
    creditScoreBucket: "",
    durationType: MortgageInsuranceDurationType.years,
    duration: quote.loanTerm,
    ltvBucket: "",
    periodicAmount: 0,
    periodicRate: 0,
    provider: MortgageInsuranceProvider.fha,
    termBucket: "",
    upfrontAmount: 0,
    upfrontRate: 1.75,
  };

  if (quote.loanTerm > 15) {
    fhaMIQuote.termBucket = "16+";
    if (quote.loanAmount <= 625500) {
      if (quote.loanToValue <= 90) {
        fhaMIQuote.periodicRate = 0.8;
        fhaMIQuote.duration = 11;
        fhaMIQuote.ltvBucket = "0 - 90%";
      } else if (quote.loanToValue > 90 && quote.loanToValue <= 95) {
        fhaMIQuote.periodicRate = 0.8;
        fhaMIQuote.ltvBucket = "90.01 - 95%";
      } else {
        fhaMIQuote.periodicRate = 0.85;
        fhaMIQuote.ltvBucket = "95.01+%";
      }
    } else {
      if (quote.loanToValue <= 90) {
        fhaMIQuote.periodicRate = 1.0;
        fhaMIQuote.duration = 11;
        fhaMIQuote.ltvBucket = "0 - 90%";
      } else if (quote.loanToValue > 90 && quote.loanToValue <= 95) {
        fhaMIQuote.periodicRate = 1.0;
        fhaMIQuote.ltvBucket = "90.01 - 95%";
      } else {
        fhaMIQuote.periodicRate = 1.05;
        fhaMIQuote.ltvBucket = "95.01+%";
      }
    }
  } else {
    fhaMIQuote.termBucket = "1 - 15";
    if (quote.loanAmount <= 625500) {
      if (quote.loanToValue <= 90) {
        fhaMIQuote.periodicRate = 0.45;
        fhaMIQuote.duration = 11;
        fhaMIQuote.ltvBucket = "0 - 90%";
      } else {
        fhaMIQuote.periodicRate = 0.7;
        fhaMIQuote.ltvBucket = "90.01+%";
      }
    } else {
      if (quote.loanToValue <= 78) {
        fhaMIQuote.periodicRate = 0.45;
        fhaMIQuote.duration = 11;
        fhaMIQuote.ltvBucket = "0 - 78%";
      } else if (quote.loanToValue > 78 && quote.loanToValue <= 90) {
        fhaMIQuote.periodicRate = 0.7;
        fhaMIQuote.duration = 11;
        fhaMIQuote.ltvBucket = "78.01% - 90%";
      } else {
        fhaMIQuote.periodicRate = 0.95;
        fhaMIQuote.ltvBucket = "90.01+%";
      }
    }
  }

  if (fhaMIQuote.periodicRate > 0) {
    fhaMIQuote.periodicAmount = precisionDivide(
      [
        precisionMultiply(
          [
            precisionDivide([fhaMIQuote.periodicRate, 100], 8) as number,
            quote.loanAmount,
          ],
          8
        ) as number,
        12,
      ],
      2
    ) as number;
  }

  if (fhaMIQuote.upfrontRate > 0) {
    fhaMIQuote.upfrontAmount = precisionMultiply(
      [
        precisionDivide([fhaMIQuote.upfrontRate, 100], 8) as number,
        quote.loanAmount,
      ],
      2
    ) as number;
  }

  return fhaMIQuote;
};

// https://www.va.gov/housing-assistance/home-loans/funding-fee-and-closing-costs/
export const getVAMortgageInsuranceQuote = function (quote: Quote) {
  const vaMIQuote: MortgageInsuranceQuoteResult = {
    coverage: "100%",
    creditScoreBucket: "",
    durationType: MortgageInsuranceDurationType.upfrontOnly,
    duration: 0,
    ltvBucket: "",
    periodicAmount: 0,
    periodicRate: 0,
    provider: MortgageInsuranceProvider.va,
    termBucket: "",
    upfrontAmount: 0,
    upfrontRate: 0,
  };

  if (quote.vaFirst) {
    if (quote.loanToValue > 95) {
      vaMIQuote.upfrontRate = 2.3;
    } else if (quote.loanToValue > 90) {
      vaMIQuote.upfrontRate = 1.65;
    } else {
      vaMIQuote.upfrontRate = 1.4;
    }
  } else {
    if (quote.loanToValue > 95) {
      vaMIQuote.upfrontRate = 3.6;
    } else if (quote.loanToValue > 90) {
      vaMIQuote.upfrontRate = 1.65;
    } else {
      vaMIQuote.upfrontRate = 1.4;
    }
  }

  if (vaMIQuote.upfrontRate > 0) {
    vaMIQuote.upfrontAmount = precisionMultiply(
      [
        precisionDivide([vaMIQuote.upfrontRate, 100], 8) as number,
        quote.loanAmount,
      ],
      2
    ) as number;
  }

  return vaMIQuote;
};

export const getPrivateMortgageInsuranceQuote = function (
  quote: Quote
): MortgageInsuranceQuoteResult {
  const pmiQuote: MortgageInsuranceQuoteResult = {
    coverage: "",
    creditScoreBucket: "",
    duration: 80,
    durationType: MortgageInsuranceDurationType.loanToValue,
    ltvBucket: "",
    periodicAmount: 0,
    periodicRate: 0,
    provider: MortgageInsuranceProvider.private,
    termBucket: "",
    upfrontAmount: 0,
    upfrontRate: 0,
  };

  const termIndex = lookup(quote.loanTerm, termTableLookup);
  const ltvIndex = lookup(quote.loanToValue, ltvRowLookup);
  const creditScoreIndex = lookup(quote.creditScore, creditScoreColumnLookup);

  if (termIndex >= 0 && ltvIndex >= 0 && creditScoreIndex >= 0) {
    pmiQuote.coverage = `${coverages[termIndex][ltvIndex]}%`;
    pmiQuote.creditScoreBucket = getLookupBucket(
      creditScoreColumnLookup[creditScoreIndex]
    );
    pmiQuote.ltvBucket = getLookupBucket(ltvRowLookup[ltvIndex]);
    pmiQuote.periodicRate = rates[termIndex][ltvIndex][creditScoreIndex];
    pmiQuote.upfrontRate = 0;
    pmiQuote.termBucket = getLookupBucket(termTableLookup[termIndex]);

    if (pmiQuote.periodicRate > 0) {
      pmiQuote.periodicAmount = precisionDivide(
        [
          precisionMultiply(
            [
              precisionDivide([pmiQuote.periodicRate, 100], 8) as number,
              quote.loanAmount,
            ],
            8
          ) as number,
          12,
        ],
        2
      ) as number;
    }
  }

  return pmiQuote;
};
