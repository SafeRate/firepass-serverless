import { BankAccount, MutationResolvers } from "../../types/resolverTypes";
import { ParcelBankAccount } from "../../utils/parcel";

export const addBankAccountsViaPlaid: MutationResolvers["addBankAccountsViaPlaid"] =
  async (
    _parent,
    { plaidId, plaidObj },
    { parcelClient, plaidClient }
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

        if (tokenExchangeResult) {
          const accessToken = tokenExchangeResult;
          // const accountId = tokenExchangeResult.accountId;

          let values = [];

          for (let a = 0; a < accounts.length; a++) {
            const account = accounts[a];

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

            let value: ParcelBankAccount = {
              account_access_token: accessToken,
              account_access_customer_id: plaidId,
              institution: plaidInstitution,
              institution_id: plaidInstitutionId,
              name,
              mask,
              type,
              subtype,
              balance,
            };
            values.push(value);
          }
          result = await parcelClient.insertBankAccounts(values);
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
