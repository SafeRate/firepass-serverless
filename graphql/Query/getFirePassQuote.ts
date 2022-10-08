import { QueryResolvers } from "../../types/resolverTypes";
import { CreditReport } from "../../utils/creditReport";
import { EquifaxCreditReportParent } from "../../utils/equifax";
import { EstatedProperty } from "../../utils/estated";
import { Property } from "../../utils/property";

export const getFirePassQuote: QueryResolvers["getFirePassQuote"] = async (
  _parent,
  args,
  context
): Promise<string> => {
  const userId = context.user.id;
  let returnResult: string = "";

  const { auto, flood, homeowners, mortgage, propertyId, creditId } =
    args.quoteRequest;

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

    console.log(
      `Credit Report\nHas bankruptices:${creditReport.hasBankruptices}\nVantage Score:${creditReport.vantage3}\nFICO 8:${creditReport.fico8}`
    );

    console.log(
      `Property\nUnits:${property.units}\nCondo:${property.condo}\nCoop:${property.coop}\nManufactured:${property.manufactured}\nMobile:${property.mobileHome}\nSingle Family:${property.singleFamily}\nTownhome:${property.townhome}\nEstimated Value:${property.estimatedValue}`
    );
  } catch (error) {}

  // get a mortgage quote from safe rate

  // get a flood quote from cartofront

  // get a homeowners quote from nationwide (and weinsure eventually)

  return returnResult;
};
