import { MortgageQuoteRequest } from "../types/resolverTypes";
import axios from "axios";
import { env } from "./env";
import { precisionDivide, precisionSubtract } from "./math/precisionMath";

export const getMortgageQuote = async (
  mortgageOptions: MortgageQuoteRequest
) => {
  const query = `
    query getMortgageQuoteResult ($quote: QuoteInput) {
        getMortgageQuoteResult (quote: $quote)
    }
  `;

  const body: any = {
    query,
    variables: {
      quote: mortgageOptions,
    },
  };

  try {
    const result: any = await axios.post(env.SAFE_RATE_QUOTE_API, body, {
      headers: {
        "Content-type": "application/json",
      },
    });

    if (result?.data?.data?.getMortgageQuoteResult) {
      const data = result.data.data.getMortgageQuoteResult;
      const quoteResult = {
        asOf: data.asOf,
        id: data.id,
        lowestRate: {
          monthlySavings: precisionSubtract(
            [
              data.best.offerPaymentPeriodic,
              data.best.safeRateSavingsPaymentPeriodic,
            ],
            2
          ),
          lifetimeSavings: data.best.safeRateSavingsLifetime,
          monthlyPayment: data.best.safeRateSavingsPaymentPeriodic,
          upfrontPayment: data.best.safeRateSavingsPaymentUpfront,
          interestRate: precisionDivide(
            [data.best.safeRateSavingsRate, 100],
            5
          ),
          apr: precisionDivide(
            [data.best.safeRateSavingsCashflow.aprFirst, 100],
            5
          ),
          estimatedClosingCosts: data.best.closingCosts,
        },
        lowestOutOfPocket: {
          monthlyPayment: data.best.offerPaymentPeriodic,
          upfrontPayment: data.best.offerPaymentUpfront,
          interestRate: precisionDivide([data.best.offerRate, 100], 5),
          apr: precisionDivide([data.best.cashflow.aprFirst, 100], 5),
          estimatedClosingCosts: precisionSubtract(
            [data.best.closingCosts, data.best.safeRateSavings],
            0
          ),
        },
        giftCard: {
          monthlyPayment: data.best.offerPaymentPeriodic,
          upfrontPayment: data.best.offerPaymentUpfront,
          interestRate: precisionDivide([data.best.offerRate, 100], 5),
          apr: precisionDivide([data.best.cashflow.aprFirst, 100], 5),
          estimatedClosingCosts: data.best.closingCosts,
        },
      };

      return quoteResult;
    }

    return null;
  } catch (error: any) {
    console.log("error", error);
    throw new Error(error);
  }
};
