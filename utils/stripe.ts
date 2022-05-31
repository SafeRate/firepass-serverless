// const stripe = require("stripe")(process.env.STRIPE_PRIVATE);
// import { isProduction } from "../providers/stage";
// import {
//   precisionMultiply,
//   precisionPower,
// } from "../helpers/math/precisionMath";

// export async function createCustomer({ permissions, provider, stripeToken }) {
//   const _FUNCTION_NAME = "createCustomer";

//   let customer = null;

//   if (permissions.borrowerId) {
//     try {
//       customer = await stripe.customers.create({
//         source: stripeToken,
//         description: permissions.borrowerId,
//       });
//     } catch (error) {
//       throw new SafeRateError(
//         "Unable to obtain create Stripe customer: " + error.message,
//         {
//           efn: _FUNCTION_NAME,
//         }
//       );
//     }
//   }

//   return customer;
// }

// export async function chargeCustomer({
//   customer,
//   amount,
//   currency,
//   precisionCurrency,
// }) {
//   if (isProduction() === false) {
//     return { id: "mock", success: true };
//   }

//   if (customer && amount && currency) {
//     if (precisionCurrency > 0) {
//       const cents = precisionPower({
//         base: 10,
//         power: precisionCurrency,
//         precision: 0,
//       });

//       amount = precisionMultiply({
//         values: [amount, cents],
//         precision: 0,
//       });
//     }

//     const charge = await stripe.charges.create({
//       amount: amount,
//       currency: currency,
//       customer: customer,
//     });

//     // console.log(charge);
//     return charge;
//   }
// }

// /*export async function processPayment(account_id, amount) {
//   const _FUNCTION_NAME = "processPayment";
//   return new Promise((resolve, reject) => {
//     plaidClient.createStripeToken(access_token, account_id, (error, result) => {
//       if (error) {
//         reject(new SafeRateError(error.message));
//       } else {
//         if (result) {
//           if (result.stripe_bank_account_token) {
//             resolve(result.stripe_bank_account_token);
//           } else {
//             reject(
//               new SafeRateError("Invalid value for access_token", {
//                 access_token: result.access_token,
//                 efn: _FUNCTION_NAME,
//               })
//             );
//           }
//         } else {
//           new SafeRateError("No return value", { efn: _FUNCTION_NAME });
//         }
//       }
//     });
//   });
// }*/
