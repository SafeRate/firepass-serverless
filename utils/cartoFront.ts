import axios from "axios";
import { env } from "./env";
import crypto from "@aws-crypto/sha256-js";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { default as fetch, Request } from "node-fetch";
import { query } from "express";
import { FloodQuote, FloodQuoteDetails } from "../types/resolverTypes";
const { Sha256 } = crypto;

type PropertyDetails = {
  address: string;
  estated: any;
  quoteId: string;
};

export const getFloodQuote = async (addressFull: string) => {
  const propertyDetails = await getPropertyDetailsByAddress(addressFull);
  let floodZone: string = "";
  const publicQuotes: FloodQuoteDetails[] = [];
  const privateQuotes: FloodQuoteDetails[] = [];

  if (
    propertyDetails.data &&
    propertyDetails.data.getPropertyDetailsByAddress
  ) {
    const dba = propertyDetails.data.getPropertyDetailsByAddress;
    if (dba.floodZone) {
      floodZone = dba.floodZone;
    }

    const result = await Promise.all([
      getNatGenResultsByAddress({
        address: addressFull,
        estated: dba.estated,
        quoteId: dba.quoteId,
      }),
      getTorrentResultsByAddress({
        address: addressFull,
        estated: dba.estated,
        quoteId: dba.quoteId,
      }),
    ]);

    if (Array.isArray(result) && result.length && result.length === 2) {
      const natGenResult = result[0];
      const torrentResult = result[1];

      if (
        torrentResult?.data?.getTorrentResultByAddress?.publicQuote
          ?.estimatedPremium
      ) {
        publicQuotes.push({
          ...torrentResult.data.getTorrentResultByAddress.publicQuote,
        });
      }

      if (natGenResult?.data?.getNatGenResultByAddress) {
        const queryResult = natGenResult.data.getNatGenResultByAddress;
        if (queryResult.essential?.estimatedPremium) {
          privateQuotes.push({ ...queryResult.essential });
        }

        if (queryResult.enhanced?.estimatedPremium) {
          privateQuotes.push({ ...queryResult.enhanced });
        }

        if (queryResult.elite?.estimatedPremium) {
          privateQuotes.push({ ...queryResult.elite });
        }
      }
    }
  }

  const quoteResult: FloodQuote = {
    floodZone,
    private: privateQuotes,
    public: publicQuotes,
  };

  return quoteResult;
};

const getNatGenResultsByAddress = async ({
  address,
  estated,
  quoteId,
}: PropertyDetails) => {
  const query = `query getNatGenResultByAddress(
    $address: String
    $estated: PropertyInput 
    $quoteId: String
  ) {
    getNatGenResultByAddress(
      address: $address
      estated: $estated
      quoteId: $quoteId
    ) {
      essential {
        qid
        provider {
          id
        }
        details 
        buildingCoverage
        contentsCoverage
        deductible
        estimatedPremium
        otherBuildingCoverage
        specialCoverage
        basementDwellingCoverage
        basementContentsCoverage
        debrisCoverage
        lossAvoidanceCoverage
        propertyRemoveCoverage
        lossAssessCoverage
        fireDeptServCoverage
        deckRampCoverage
        lawOrdCoverage
        treesCoverage
        poolCoverage
        iccCoverage
        lossOfUseCoverage
      }
      enhanced {
        qid
        provider {
          id
        }
        details
        buildingCoverage
        contentsCoverage
        deductible
        estimatedPremium
        otherBuildingCoverage
        specialCoverage
        basementDwellingCoverage
        basementContentsCoverage
        debrisCoverage
        lossAvoidanceCoverage
        propertyRemoveCoverage
        lossAssessCoverage
        fireDeptServCoverage
        deckRampCoverage
        lawOrdCoverage
        treesCoverage
        poolCoverage
        iccCoverage
        lossOfUseCoverage
      }
      elite {
        qid
        provider {
          id
        }
        details
        buildingCoverage
        contentsCoverage
        deductible
        estimatedPremium
        otherBuildingCoverage
        specialCoverage
        basementDwellingCoverage
        basementContentsCoverage
        debrisCoverage
        lossAvoidanceCoverage
        propertyRemoveCoverage
        lossAssessCoverage
        fireDeptServCoverage
        deckRampCoverage
        lawOrdCoverage
        treesCoverage
        poolCoverage
        iccCoverage
        lossOfUseCoverage
      }
      notes
    }
  }
`;
  const variables = {
    address,
    estated,
    quoteId,
  };

  return await callCartoFrontApi(query, variables);
};
const getTorrentResultsByAddress = async ({
  address,
  estated,
  quoteId,
}: PropertyDetails) => {
  const query = `
  query getTorrentResultByAddress(
    $address: String
    $estated: PropertyInput 
    $quoteId: String
  ) {
    getTorrentResultByAddress(
      address: $address
      estated: $estated
      quoteId: $quoteId
    ) {
        floodZone
        publicQuote {
            qid
            provider {
              id
            }
            details
            buildingCoverage
            contentsCoverage
            deductible
            estimatedPremium
            otherBuildingCoverage
            specialCoverage
            basementDwellingCoverage
            basementContentsCoverage
            debrisCoverage
            lossAvoidanceCoverage
            propertyRemoveCoverage
            lossAssessCoverage
            fireDeptServCoverage
            deckRampCoverage
            lawOrdCoverage
            treesCoverage
            poolCoverage
            iccCoverage
            lossOfUseCoverage
        }
        notes
    }
  }
  `;

  const variables = {
    address,
    estated,
    quoteId,
  };

  return await callCartoFrontApi(query, variables);
};

const getPropertyDetailsByAddress = async (addressFull: string) => {
  const query = `
    query getPropertyDetailsByAddress ($address: String) {
        getPropertyDetailsByAddress (address: $address) {
          estated {
            id
            source
            zipcode
            city
            state
            streetName
            streetNumber
            streetDirection
            unitNumber
            fullAddress
            constructionMaterials
            floors
            basement
            bedrooms
            bathrooms
            squareFootage
            yearBuilt
            propertyType
            pool
            value
            parcel
          }
          quoteId
          floodZone
          notes
        }
    }
  `;

  const variables = {
    address: addressFull,
  };

  return callCartoFrontApi(query, variables);
};

const callCartoFrontApi = async (query: string, variables: any) => {
  const endpoint = new URL(env.CARTOFRONT_QUOTE_API);

  const signer = new SignatureV4({
    credentials: {
      accessKeyId: env.CARTOFRONT_AWS_ACCESS_KEY_ID,
      secretAccessKey: env.CARTOFRONT_AWS_SECRET_ACCESS_KEY,
    },
    region: "us-east-1",
    service: "appsync",
    sha256: Sha256,
  });

  const requestToBeSigned = new HttpRequest({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      host: endpoint.host,
    },
    hostname: endpoint.host,
    body: JSON.stringify({
      query,
      variables,
    }),
    path: endpoint.pathname,
  });

  const signed = await signer.sign(requestToBeSigned);
  const request = new Request(endpoint as any, signed);

  let statusCode = 200;
  let responseBody;
  let response;

  try {
    response = await fetch(request);
    responseBody = await response.json();
    if (responseBody.errors) statusCode = 400;
  } catch (error) {
    console.error(error);
    throw new Error(error);
    // statusCode = 500;
    // responseBody = {
    //   errors: [
    //     {
    //       message: error.message,
    //     },
    //   ],
    // };
  }

  return responseBody;
};
