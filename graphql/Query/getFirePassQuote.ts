import { QueryResolvers } from "../../types/resolverTypes";
import { getFloodQuote } from "../../utils/cartoFront";
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

  let {
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
      quotePromises[1] = getFloodQuote(property.addressFull);
    }

    if (homeowners) {
      quotePromises[2] = Promise.resolve(true);
    }

    if (mortgage) {
      mortgageOptions = {
        annualIncome: 100000,
        cashout: false,
        condo: false,
        combinedLoanToValue: 80,
        creditScore: 800,
        debtToIncome: 20,
        firstTimeHomebuyer: false,
        investmentProperty: false,
        loanToValue: 80,
        loanAmount: 320000,
        loanTerm: 30,
        lock: 30,
        manufacturedHome: false,
        monthlyDebt: 0,
        points: 0,
        propertyValue: 400000,
        purchase: true,
        primaryResidence: true,
        rateTermOnly: false,
        refinance: false,
        safeRateSavings: 2000,
        secondaryResidence: false,
        selfEmployed: false,
        singleFamilyHome: true,
        subordinatedFinancing: false,
        subordinateAmount: 0,
        subordinateLoanTerm: 0,
        state: "IL",
        townhome: false,
        units: 1,
        vaFirst: false,
        veteran: false,
        ...mortgageOptions,
      };

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
