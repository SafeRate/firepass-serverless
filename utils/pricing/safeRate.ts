import { precisionAmoritize } from "../math/precisionMath";

export type SubordinateQuoteResult = {
  loanAmount: number;
  loanTerm: number;
  periodicPayment: number;
  rate: number;
};

export const getSubordinateSafeRateQuote = function (
  quote
): SubordinateQuoteResult {
  let safeRateQuote: SubordinateQuoteResult = {
    loanAmount: quote.subordinateAmount,
    loanTerm: quote.subordinateLoanTerm,
    periodicPayment: 0,
    rate: 0,
  };

  let lookupValues: number[] = [];

  if (quote.creditScore >= 660 && quote.creditScore < 680) {
    if (quote.combinedLoanToValue >= 90 && quote.combinedLoanToValue <= 95) {
      safeRateQuote.rate = 7.5;
    }
  } else if (quote.creditScore >= 680 && quote.creditScore < 700) {
    if (quote.combinedLoanToValue >= 90 && quote.combinedLoanToValue <= 95) {
      safeRateQuote.rate = 7.25;
    }
  } else if (quote.creditScore >= 700 && quote.creditScore < 720) {
    if (quote.combinedLoanToValue >= 90 && quote.combinedLoanToValue <= 95) {
      safeRateQuote.rate = 7.0;
    }
  } else if (quote.creditScore >= 720 && quote.creditScore < 740) {
    if (quote.combinedLoanToValue >= 90 && quote.combinedLoanToValue <= 95) {
      safeRateQuote.rate = 6.75;
    }
  } else if (quote.creditScore >= 740 && quote.creditScore < 760) {
    safeRateQuote.rate = 6.625;
  } else if (quote.creditScore >= 760) {
    safeRateQuote.rate = 6.5;
  }

  if (safeRateQuote.rate > 0) {
    safeRateQuote.periodicPayment = precisionAmoritize(
      quote.subordinateAmount,
      12,
      safeRateQuote.rate,
      12 * quote.subordinateLoanTerm
    );
  }

  return safeRateQuote;
};
