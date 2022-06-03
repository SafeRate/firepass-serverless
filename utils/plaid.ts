import { Configuration, CountryCode, DepositoryAccountSubtype, PlaidApi, PlaidEnvironments, Products } from "plaid";

export enum PLAID_ACCOUNT_SUBTYPES {
  CHECKING = "checking",
  SAVINGS = "savings"
};

export enum PLAID_ACCOUNT_TYPE {
  DEPOSITORY = "depository",
  INVESTMENT = "investment"
};

export enum PLAID_API_VERSION {
  V2020_09_14 = "2020-09-14",
};

export enum PLAID_CLIENT_NAME {
  SAFE_RATE = "Safe Rate"
};

export enum PLAID_ENVIRONMENT {
  DEVELOPMENT = "development",
  PRODUCTION = "production",
  SANDBOX = "sandbox"
};

export enum PLAID_LANGUAGE {
  EN = "en"
};

export enum PLAID_PROCESSOR {
  ACHQ = "achq",
  CHECK = "check",
  CHECKBOOK = "checkbook",
  CIRCLE = "circle",
  DRIVEWEALTH = "drivewealth",
  DWOLLA = "dwolla",
  GALILEO = "galileo",
  INTERACTIVE_BROKERS = "interactive_brokers",
  LITHIC = "lithic",
  MODERN_TREASURY = "modern_treasury",
  OCROLUS = "ocrulus",
  PRIME_TRUST = "prime_trust",
  RIZE = "rize",
  SILA_MONEY = "sila_money",
  SVB = "svb_api",
  UNIT = "unit",
  VESTA = "vesta",
  VOPAY = "vopay",
  WYRE = "wyre",
};

export enum PLAID_PRODUCTS {
  AUTH = "auth"
};

export class PlaidClient {

  private plaidApi:PlaidApi;
  private plaidEnv:string;

  constructor() {
    this.plaidEnv = null;

    if (process.env.PLAID_ENVIRONMENT === PLAID_ENVIRONMENT.DEVELOPMENT) {
      this.plaidEnv = PlaidEnvironments.development;
    } else if (process.env.PLAID_ENVIRONMENT === PLAID_ENVIRONMENT.PRODUCTION) {
      this.plaidEnv = PlaidEnvironments.production;
    } else if (process.env.PLAID_ENVIRONMENT === PLAID_ENVIRONMENT.SANDBOX) {
      this.plaidEnv = PlaidEnvironments.sandbox;
    }
    
    const configuration = new Configuration({
      basePath: this.plaidEnv,
      baseOptions: {
        headers: {
          "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
          "PLAID-SECRET": process.env.PLAID_SECRET,
          "Plaid-Version": PLAID_API_VERSION.V2020_09_14,
        },
      },
    });
    
    this.plaidApi = new PlaidApi(configuration);
  }

  public createStripeTokenFromAccessToken = async(
    accessToken:string,
    plaidId: string
  ) => {
  
    try {
      const request = {
        access_token: accessToken,
        account_id: plaidId,
      };

      const stripeTokenResponse = this.processPlaidResponse(
        await this.plaidApi.processorStripeBankAccountTokenCreate(request)
      );

      if (stripeTokenResponse && stripeTokenResponse.stripe_bank_account_token) {
        return stripeTokenResponse.stripe_bank_account_token;
      }
    } catch (error) {
      console.log("Error!");
      console.log(error);
    }

    return null;
}

public getLinkToken = async(bankAccountId?:string, userId:string, parcelClient:ParcelClient) => {
  
  let isUpdate = false;
  let accessToken = null;

    if (id) {
      isUpdate = true;

      const bankAccount = await getBankAccountForPayment({ id })
      );

      if (bankAccount) {
        if (bankAccount.plaidAccessToken) {
          accessToken = bankAccount.plaidAccessToken;
        }
      }
    }

    try {
      
      let response = null;

      if (isUpdate && accessToken) {
        response = await this.plaidApi.linkTokenCreate({
          user: {
            client_user_id: userId,
          },
          client_name: PLAID_CLIENT_NAME.SAFE_RATE,
          country_codes: [CountryCode.Us],
          language: PLAID_LANGUAGE.EN,
          redirect_uri: process.env.PLAID_REDIRECT_URI,
          access_token: accessToken,
        });
      } else {
        response = await this.plaidApi.linkTokenCreate({
          user: {
            client_user_id: userId,
          },
          client_name: PLAID_CLIENT_NAME.SAFE_RATE,
          products: [Products.Auth],
          country_codes: [CountryCode.Us],
          language: PLAID_LANGUAGE.EN,
          redirect_uri: process.env.PLAID_REDIRECT_URI,
          account_filters: {
            depository: {
              account_subtypes: [DepositoryAccountSubtype.Checking, DepositoryAccountSubtype.Savings],
            },
          },
        });
      }
      result = response.data.link_token;
    } catch (error) {
      console.log(error);
    }
  }
  console.log("RESULT");
  console.log(result);
  return result;
}

public exchangePublicTokenForAccessToken = async(
  publicToken:string) => {
  const _FUNCTION_NAME = "exchangePublicTokenForAccessToken";
  const result = {
    success: false,
    accessToken: null,
    itemId: null,
    message: null,
  };

    try {
      const response = await this.plaidApi.itemPublicTokenExchange({
        public_token: publicToken,
      });

      console.log("token exchange!");
      console.log(response.data);

      const accessToken = response.data.access_token;
      const itemId = response.data.item_id;

      if (accessToken && itemId) {
        result.success = true;
        result.accessToken = accessToken;
        result.accountId = itemId;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return result;
}

private processPlaidResponse = (response:any) => {
  let result = response;

  if (typeof response === "object" && response !== null) {
    if (response.data) {
      const data = response.data;

      if (data.error_code) {
        console.log("Plaid Error");
        console.log(data.error_code);
        console.log(data.error_message);

        throw new Error(
          `Plaid error: ${data.error_code} - ${data.error_message}`
        );
      } else {
        result = data;
      }
    }
  }

  return result;
}

public createProcessorTokenFromAccessToken = async (
  accessToken,
  plaidId,
  processor,
) => {

  if (permissions.borrowerId) {
    try {
      const request = {
        access_token: accessToken,
        account_id: plaidId,
        processor,
      };

      const processorTokenResponse = processPlaidResponse(
        await plaidClient.processorTokenCreate(request)
      );

      if (processorTokenResponse) {
        processorToken = processorTokenResponse.processor_token;
      }
    } catch (error) {
      console.log("Error!");
      console.log(error);

      throw new SafeRateError(
        `Unable to create Plaid processor token for ${processor}: ${error.message}`,
        {
          efn: _FUNCTION_NAME,
        }
      );
    }
  }

  return processorToken;
}

public createStripeTokenFromAccessToken = async(
  accessToken,
  plaidId,
) => {

    try {
      const request = {
        access_token: accessToken,
        account_id: plaidId,
      };

      const stripeTokenResponse = processPlaidResponse(
        await this.plaidApi.processorStripeBankAccountTokenCreate(request)
      );

      if (stripeTokenResponse) {
        bankAccountToken = stripeTokenResponse.stripe_bank_account_token;
      }
    } catch (error) {
      console.log("Error!");
      console.log(error);

      throw new Error(
        "Unable to create Stripe token: " + error.message,
        {
          efn: _FUNCTION_NAME,
        }
      );
    }
  }

  return bankAccountToken;
}

public getAggregateBalances = async(
  accessTokens,
) => {
  let aggregateBalance = 0;

  try {
    for (let at = 0; at < accessTokens.length; at++) {
      const accessToken = accessTokens[at];

      const request = {
        access_token: accessToken,
      };

      const response = await this.plaidApi.accountsBalanceGet(request);
      const accounts = response.data.accounts;
      for (let a = 0; a < accounts.length; a++) {
        const account = accounts[a];
        const { balances, type } = account;

        if (balances && type) {
          if (type === PLAID_ACCOUNT_TYPE.DEPOSITORY || type === PLAID_ACCOUNT_TYPE.INVESTMENT) {
            if (balances.current) {
              if (balances.current > 0) {
                aggregateBalance = precisionAdd({
                  values: [aggregateBalance, balances.current],
                  precision: 2,
                  stepPrecision: 2,
                });
              }
            }
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
    aggregateBalance = null;
  }

  return aggregateBalance;
}
}

export const plaidClient = new PlaidClient();