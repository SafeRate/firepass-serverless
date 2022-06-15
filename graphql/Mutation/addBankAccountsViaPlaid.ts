import { BankAccountFull } from "../../types/bankAccountFull";
import { BankAccount, MutationResolvers } from "../../types/resolverTypes";
import { ParcelBankAccount } from "../../utils/parcel";

import { v4 as uuidv4 } from "uuid";

export const addBankAccountsViaPlaid: MutationResolvers["addBankAccountsViaPlaid"] =
  async (
    _parent,
    { plaidId, plaidObj },
    { parcelClient, plaidClient, user }
  ): Promise<BankAccount[]> => {
    let result: BankAccount[] = [];
    if (plaidId && plaidObj) {
      const { accounts, institution } = plaidObj;
      if (Array.isArray(accounts) && accounts.length > 0 && institution) {
        const plaidInstitution = institution.name;
        const plaidInstitutionId = institution.institution_id;

        const tokenExchangeResult =
          await plaidClient.exchangePublicTokenForAccessToken({
            publicToken: plaidId,
          });

        const userId = user && user.id ? user.id : uuidv4();
        if (tokenExchangeResult) {
          const accessToken = tokenExchangeResult;
          // const accountId = tokenExchangeResult.accountId;

          for await (const account of accounts) {
            console.log("account", account);
            const plaidId = account.id;
            const mask = account.mask;
            const name = account.name;
            const subtype = account.subtype;
            const type = account.type;
            let balance = null;
            const balances = account.balances;

            if (balances) {
              if (balances.current || balances.current === 0) {
                balance = balances.current;
              }
            }

            const valueBrief: BankAccount = {
              id: plaidId,
              mask,
              name,
              subtype,
              type,
              balance,
            };

            const value: BankAccountFull = {
              accountAccessToken: accessToken,
              bankAccount: valueBrief,
              institution: plaidInstitution,
              institutionId: plaidInstitutionId,
            };

            await parcelClient.insertBankAccount(value, userId);
          }
        }
      }
    }
    return result;
  };

// const stripeToken = await createStripeTokenFromAccessToken({
//     provider,
//     permissions,
//     accessToken,
//     plaidId,
// });

// if (stripeToken) {
//     const stripeCustomer = await createCustomer({
//     provider,
//     permissions,
//     stripeToken,
//     });

//     if (stripeCustomer) {
//     value.stripeToken = stripeToken;
//     value.stripeCustomerId = stripeCustomer.id;
//     }
// }
