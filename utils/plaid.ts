// import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";

// export enum PLAID_PROCESSOR {
//   ACHQ = "achq",
//   CHECK = "check",
//   CHECKBOOK = "checkbook",
//   CIRCLE = "circle",
//   DRIVEWEALTH = "drivewealth",
//   DWOLLA = "dwolla",
//   GALILEO = "galileo",
//   INTERACTIVE_BROKERS = "interactive_brokers",
//   LITHIC = "lithic",
//   MODERN_TREASURY = "modern_treasury",
//   OCROLUS = "ocrulus",
//   PRIME_TRUST = "prime_trust",
//   RIZE = "rize",
//   SILA_MONEY = "sila_money",
//   SVB = "svb_api",
//   UNIT = "unit",
//   VESTA = "vesta",
//   VOPAY = "vopay",
//   WYRE = "wyre",
// }

// let plaid_env = null;

// if (process.env.PLAID_ENVIRONMENT === "development") {
//   plaid_env = PlaidEnvironments.development;
// } else if (process.env.PLAID_ENVIRONMENT === "production") {
//   plaid_env = PlaidEnvironments.production;
// } else if (process.env.PLAID_ENVIRONMENT === "sandbox") {
//   plaid_env = PlaidEnvironments.sandbox;
// }

// const configuration = new Configuration({
//   basePath: plaid_env,
//   baseOptions: {
//     headers: {
//       "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
//       "PLAID-SECRET": process.env.PLAID_SECRET,
//       "Plaid-Version": "2020-09-14",
//     },
//   },
// });

// const plaidClient = new PlaidApi(configuration);

// export async function getLinkToken({ provider, permissions, id }) {
//   let result = null;
//   let isUpdate = false;
//   let accessToken = null;

//   if (permissions.borrowerId) {
//     const borrower = permissions.borrowerId;

//     if (id) {
//       isUpdate = true;

//       const bankAccount = expectSingleListItem(
//         await getBankAccountForPayment({ provider, permissions, id })
//       );

//       if (bankAccount) {
//         if (bankAccount.plaidAccessToken) {
//           accessToken = bankAccount.plaidAccessToken;
//         }
//       }
//     }

//     try {
//       let response = null;

//       if (isUpdate && accessToken) {
//         console.log("Update");

//         response = await plaidClient.linkTokenCreate({
//           user: {
//             client_user_id: borrower,
//           },
//           client_name: "Safe Rate",
//           country_codes: ["US"],
//           language: "en",
//           redirect_uri: process.env.PLAID_REDIRECT_URI,
//           access_token: accessToken,
//         });
//       } else {
//         console.log("New");
//         response = await plaidClient.linkTokenCreate({
//           user: {
//             client_user_id: borrower,
//           },
//           client_name: "Safe Rate",
//           products: ["auth"],
//           country_codes: ["US"],
//           language: "en",
//           redirect_uri: process.env.PLAID_REDIRECT_URI,
//           account_filters: {
//             depository: {
//               account_subtypes: ["checking", "savings"],
//             },
//           },
//         });
//       }
//       result = response.data.link_token;
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   console.log("RESULT");
//   console.log(result);
//   return result;
// }

// export async function exchangePublicTokenForAccessToken({
//   provider,
//   permissions,
//   publicToken,
// }) {
//   const _FUNCTION_NAME = "exchangePublicTokenForAccessToken";
//   const result = {
//     success: false,
//     accessToken: null,
//     itemId: null,
//     message: null,
//   };

//   if (permissions.borrowerId) {
//     try {
//       const response = await plaidClient.itemPublicTokenExchange({
//         public_token: publicToken,
//       });

//       console.log("token exchange!");
//       console.log(response.data);

//       const accessToken = response.data.access_token;
//       const itemId = response.data.item_id;

//       if (accessToken && itemId) {
//         result.success = true;
//         result.accessToken = accessToken;
//         result.accountId = itemId;
//       }
//     } catch (error) {
//       throw new SafeRateError(
//         "Unable to obtain Plaid access token: " + error.message,
//         {
//           efn: _FUNCTION_NAME,
//         }
//       );
//     }
//   }

//   return result;
// }

// function processPlaidResponse(response) {
//   let result = response;

//   if (typeof response === "object" && response !== null) {
//     if (response.data) {
//       const data = response.data;

//       if (data.error_code) {
//         console.log("Plaid Error");
//         console.log(data.error_code);
//         console.log(data.error_message);

//         throw new SafeRateError(
//           `Plaid error: ${data.error_code} - ${data.error_message}`
//         );
//       } else {
//         result = data;
//       }
//     }
//   }
//   return result;
// }

// export async function createProcessorTokenFromAccessToken({
//   provider,
//   permissions,
//   accessToken,
//   plaidId,
//   processor,
// }) {
//   const _FUNCTION_NAME = "createStripeToken";
//   let processorToken = null;

//   if (isProduction() === false) {
//     return "mock";
//   }

//   if (permissions.borrowerId) {
//     try {
//       const request = {
//         access_token: accessToken,
//         account_id: plaidId,
//         processor,
//       };

//       const processorTokenResponse = processPlaidResponse(
//         await plaidClient.processorTokenCreate(request)
//       );

//       if (processorTokenResponse) {
//         processorToken = processorTokenResponse.processor_token;
//       }
//     } catch (error) {
//       console.log("Error!");
//       console.log(error);

//       throw new SafeRateError(
//         `Unable to create Plaid processor token for ${processor}: ${error.message}`,
//         {
//           efn: _FUNCTION_NAME,
//         }
//       );
//     }
//   }

//   return processorToken;
// }

// export async function createStripeTokenFromAccessToken({
//   provider,
//   permissions,
//   accessToken,
//   plaidId,
// }) {
//   const _FUNCTION_NAME = "createStripeToken";
//   let bankAccountToken = null;

//   if (isProduction() === false) {
//     return "mock";
//   }

//   if (permissions.borrowerId) {
//     try {
//       const request = {
//         access_token: accessToken,
//         account_id: plaidId,
//       };

//       const stripeTokenResponse = processPlaidResponse(
//         await plaidClient.processorStripeBankAccountTokenCreate(request)
//       );

//       if (stripeTokenResponse) {
//         bankAccountToken = stripeTokenResponse.stripe_bank_account_token;
//       }
//     } catch (error) {
//       console.log("Error!");
//       console.log(error);

//       throw new SafeRateError(
//         "Unable to create Stripe token: " + error.message,
//         {
//           efn: _FUNCTION_NAME,
//         }
//       );
//     }
//   }

//   return bankAccountToken;
// }

// export async function getAggregateBalances({
//   permissions,
//   provider,
//   accessTokens,
// }) {
//   let aggregateBalance = 0;

//   try {
//     for (let at = 0; at < accessTokens.length; at++) {
//       const accessToken = accessTokens[at];

//       const request = {
//         access_token: accessToken,
//       };

//       const response = await plaidClient.accountsBalanceGet(request);
//       const accounts = response.data.accounts;
//       for (let a = 0; a < accounts.length; a++) {
//         const account = accounts[a];
//         const { balances, type } = account;

//         if (balances && type) {
//           if (type === "depository" || type === "investment") {
//             if (balances.current) {
//               if (balances.current > 0) {
//                 aggregateBalance = precisionAdd({
//                   values: [aggregateBalance, balances.current],
//                   precision: 2,
//                   stepPrecision: 2,
//                 });
//               }
//             }
//           }
//         }
//       }
//     }
//   } catch (error) {
//     console.log(error);
//     aggregateBalance = null;
//   }

//   return aggregateBalance;
// }
