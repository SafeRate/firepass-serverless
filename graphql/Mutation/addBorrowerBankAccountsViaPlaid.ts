// import { BankAccount, MutationResolvers } from "../../types/resolverTypes";
// import { ParcelBankAccount } from "../../utils/parcel";

// export const addBorrowerBankAccountsViaPlaid: MutationResolvers["addBorrowerBankAccountsViaPlaid"] =
//   async (_parent, { plaidId, plaidObj }, { parcelClient, plaidClient }):Promise<BankAccount[]> => {

//     let result:BankAccount[] = [];
//       if (plaidId && plaidObj) {
//         const { accounts, institution } = plaidObj;
//         if (Array.isArray(accounts) && accounts.length > 0 && institution) {
//           const plaidInstitution = institution.name;
//           const plaidInstitutionId = institution.institution_id;

//           const tokenExchangeResult = await plaidClient.exchangePublicTokenForAccessToken({
//             publicToken: plaidId,
//           });

//           if (
//             tokenExchangeResult.success &&
//             tokenExchangeResult.accessToken &&
//             tokenExchangeResult.accountId
//           ) {

//             const accessToken = tokenExchangeResult.accessToken;
//             // const accountId = tokenExchangeResult.accountId;

//             let values = [];

//             for (let a = 0; a < accounts.length; a++) {
//               const account = accounts[a];

//               const plaidId = account.id;
//               const mask = account.mask;
//               const name = account.name;
//               const subtype = account.subtype;
//               const type = account.type;

//               let value:ParcelBankAccount = {
//                 account_access_token: accessToken,
//                 account_access_customer_id:plaidId,
//                 institution:plaidInstitution,
//                 institution_id:plaidInstitutionId,
//                 name,
//                 mask,
//                 type,
//                 subtype,
//                 balance:
//               };

//               if (stripe) {
//                 const stripeToken = await createStripeTokenFromAccessToken({
//                   provider,
//                   permissions,
//                   accessToken,
//                   plaidId,
//                 });

//                 if (stripeToken) {
//                   const stripeCustomer = await createCustomer({
//                     provider,
//                     permissions,
//                     stripeToken,
//                   });

//                   if (stripeCustomer) {
//                     value.stripeToken = stripeToken;
//                     value.stripeCustomerId = stripeCustomer.id;
//                   }
//                 }
//               }

//               if (achq) {
//                 const achqToken = await createProcessorTokenFromAccessToken({
//                   provider,
//                   permissions,
//                   accessToken,
//                   plaidId,
//                   processor: PLAID_PROCESSOR.ACHQ,
//                 });

//                 if (achqToken) {
//                   // Do something
//                   value.achqToken = achqToken;
//                 }
//               }

//               values.push(value);
//             }

//             console.log("VALUES");
//             console.log(values);

//             result = await addBankAccounts({
//               provider,
//               permissions,
//               values,
//             });
//           }
//         }
//       }
//     }

//     return result;
//   };

//   };
