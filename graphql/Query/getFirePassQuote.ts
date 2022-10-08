import { QueryResolvers } from "../../types/resolverTypes";
import { CreditReport } from "../../utils/creditReport";
import { EquifaxCreditReportParent } from "../../utils/equifax";
import { EstatedProperty } from "../../utils/estated";
import {
  precisionDivide,
  precisionMultiply,
} from "../../utils/math/precisionMath";
import { Property } from "../../utils/property";
import { getMortgageQuote } from "../../utils/safeRate";

export const getFirePassQuote: QueryResolvers["getFirePassQuote"] = async (
  _parent,
  args,
  context
): Promise<string> => {
  const userId = context.user.id;
  let returnResult: string = "";

  const {
    auto,
    autoIds,
    creditId,
    flood,
    homeowners,
    mortgage,
    mortgageOptions,
    propertyId,
  } = args.quoteRequest;

  try {
    const results = await Promise.all([
      context.parcelClient.getUserCreditReport(creditId, userId),
      context.parcelClient.getUserProperty(propertyId, userId),
    ]);

    if (!Array.isArray(results) || results.length !== 2) {
      throw new Error("Could not retrieve necessary information");
    }

    if (!results[0] || !results[1]) {
      throw new Error("Could not retrieve necessary information");
    }

    const equifaxCreditReport: EquifaxCreditReportParent = results[0];
    const estatedProperty: EstatedProperty = results[1];

    const creditReport = new CreditReport(equifaxCreditReport);
    const property: Property = new Property(estatedProperty);

    // console.log(
    //   `Credit Report\nHas bankruptices:${creditReport.hasBankruptices}\nVantage Score:${creditReport.vantage3}\nFICO 8:${creditReport.fico8}`
    // );

    // console.log(
    //   `Property\nUnits:${property.units}\nCondo:${property.condo}\nCoop:${property.coop}\nManufactured:${property.manufactured}\nMobile:${property.mobileHome}\nSingle Family:${property.singleFamily}\nTownhome:${property.townhome}\nEstimated Value:${property.estimatedValue}`
    // );

    const quotePromises: Promise<any>[] = [
      Promise.resolve(false),
      Promise.resolve(false),
      Promise.resolve(false),
      Promise.resolve(false),
    ];

    if (auto) {
      quotePromises[0] = Promise.resolve(true);
    }

    if (flood) {
      quotePromises[1] = Promise.resolve(true);
    }

    if (homeowners) {
      quotePromises[2] = Promise.resolve(true);
    }

    if (mortgage) {
      mortgageOptions.creditScore = creditReport.fico8;
      mortgageOptions.condo = property.condo;
      mortgageOptions.manufacturedHome = property.manufactured;
      mortgageOptions.singleFamilyHome = property.singleFamily;
      mortgageOptions.townhome = property.townhome;
      mortgageOptions.units = property.units;

      if (!mortgageOptions.propertyValue) {
        if (mortgageOptions.loanAmount) {
          mortgageOptions.propertyValue = precisionDivide(
            [mortgageOptions.loanAmount, 0.8],
            2
          );

          mortgageOptions.combinedLoanToValue = 80;
          mortgageOptions.loanToValue = 80;
        } else {
          mortgageOptions.propertyValue = property.estimatedValue;
        }
      }

      if (!mortgageOptions.loanAmount) {
        mortgageOptions.loanAmount = precisionMultiply(
          [mortgageOptions.propertyValue, 0.8],
          2
        );
        mortgageOptions.combinedLoanToValue = 80;
        mortgageOptions.loanToValue = 80;
      }

      if (!mortgageOptions.loanToValue) {
        mortgageOptions.loanToValue = precisionMultiply(
          [
            precisionDivide(
              [mortgageOptions.loanAmount, mortgageOptions.propertyValue],
              3
            ),
            100,
          ],
          1
        );
      }

      if (
        !mortgageOptions.combinedLoanToValue ||
        !mortgageOptions.subordinatedFinancing
      ) {
        mortgageOptions.combinedLoanToValue = mortgageOptions.loanToValue;
        mortgageOptions.subordinateAmount = 0;
        mortgageOptions.subordinatedFinancing = false;
      }

      quotePromises[3] = getMortgageQuote(mortgageOptions);
    }

    const quoteResults = await Promise.all(quotePromises);
  } catch (error) {}

  return returnResult;
};
