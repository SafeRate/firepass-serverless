import { env } from "./env";
import axios from "axios";
import qs from "qs";
// import FormData from "form-data";

enum EquifaxStage {
  SANDBOX = "sandbox",
  TEST = "test",
  LIVE = "live",
}

enum EquifaxScope {
  AML_CONNECT = "https://api.equifax.com/business/amlc/v1/entity-screenings",
  CONSUMER_ENROLLMENT = "https://api.equifax.com/personal/consumer-data-suite/v1/enrollment",
  CONSUMER_CREDIT_REPORT_MONITORING = "https://api.equifax.com/personal/consumer-data-suite/v1/creditMonitoring",
  CONSUMER_CREDIT_REPORTS = "https://api.equifax.com/personal/consumer-data-suite/v1/creditReport",
  CONSUMER_CREDIT_SCORES = "https://api.equifax.com/personal/consumer-data-suite/v1/creditScore",
  DIGITAL_IDENTITY_TRUST = "https://api.equifax.com/business/id-risk-assessment/v2",
  INSTATOUCH_ID = "https://api.equifax.com/business/instatouch-identity",
  ONEVIEW = "https://api.equifax.com/business/oneview/consumer-credit/v1",
  PREAPPROVAL_OF_ONE = "https://api.equifax.com/business/preapproval-of-one/v1",
  PROPERTY_VERIFICATION = "https://api.equifax.com/business/verifications/v1/property:r",
  SCORES_AND_ATTRIBUTES = "https://api.equifax.com/business/scores-and-attributes/v1",
  STATE_ISSUED_ID_TRUST = "https://api.equifax.com/business/states-id-cards-verify",
  TALENT_REPORT_EDUCATION = "https://api.equifax.com/business/talent-reports/v1",
  TALENT_REPORT_EMPLOYMENT = "https://api.equifax.com/business/staffing/v2/talent-reports/employment",
}

export class EquifaxClient {
  b2b2cUrlBase: string;
  b2b2cStage: EquifaxStage;
  b2b2cAccessToken: string;
  standardStsUrlBase: string;
  standardStsAccount: string;
  standardStsId: string;
  standardStsSecret: string;
  standardStsSecurity: string;
  standardStsStage: string;

  constructor() {
    this.b2b2cAccessToken = env.EQUIFAX_B2B2C_ACCESS_TOKEN;
    this.b2b2cStage = env.EQUIFAX_B2B2C_STAGE as EquifaxStage;
    this.standardStsAccount = env.EQUIFAX_STANDARD_STS_ACCOUNT;
    this.standardStsId = env.EQUIFAX_STANDARD_STS_ACCESS_ID;
    this.standardStsSecret = env.EQUIFAX_STANDARD_STS_ACCESS_SECRET;
    this.standardStsSecurity = env.EQUIFAX_STANDARD_STS_SECURITY;
    this.standardStsStage = env.EQUIFAX_STANDARD_STS_STAGE;

    if (this.standardStsStage === EquifaxStage.LIVE) {
      this.standardStsUrlBase = `https://api.equifax.com`;
    } else if (this.standardStsStage === EquifaxStage.TEST) {
      this.standardStsUrlBase = `https://api.test.equifax.com`;
    } else {
      this.standardStsUrlBase = `https://api.sandbox.equifax.com`;
    }
  }

  handleEquifaxRequestError() {}

  getStsAccessToken = async function (scope: EquifaxScope): Promise<string> {
    const requestPath = `/v2/oauth/token`;
    const requestUrl = `${this.standardStsUrlBase}${requestPath}`;

    const requestData = {
      grant_type: "client_credentials",
      scope,
    };

    const requestHeaders = {
      "content-type": "application/x-www-form-urlencoded",
    };

    const options = {
      auth: {
        username: this.standardStsId,
        password: this.standardStsSecret,
      },
      headers: requestHeaders,
    };

    try {
      const result = await axios.post(
        requestUrl,
        qs.stringify(requestData),
        options
      );
      if (result.data && result.data.access_token) {
        return result.data.access_token;
      } else {
        console.log("Could not obtain access token!");
        console.log(result);
      }
    } catch (error) {
      console.log("Error in making request");
      console.log(error);
    }
  };

  getInstaTouchID = async function (deviceIp: string): Promise<string> {
    const accessToken = await this.getStsAccessToken();
    const bearerToken = `Bearer ${accessToken}`;

    return deviceIp;
  };

  getOneView = async function (): Promise<string> {
    const accessToken = await this.getStsAccessToken(EquifaxScope.ONEVIEW);
    return accessToken;
  };

  getPreapprovalOfOne = async function (): Promise<string> {
    const accessToken = await this.getStsAccessToken(
      EquifaxScope.INSTATOUCH_ID
    );
    return accessToken;
  };

  startInstatouchIdHandshake = async function (
    accessToken: string,
    merchantId: string
  ): Promise<string> {
    const requestPath = `/business/instatouch-identity/v2/user-sessions`;
    const requestUrl = `${this.standardStsUrlBase}${requestPath}`;

    const requestData = {
      merchantId: env.EQUIFAX_MERCHANT_ID,
    };

    const requestHeaders = {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    };

    const options = {
      headers: requestHeaders,
    };

    try {
      const result = await axios.post(
        requestUrl,
        JSON.stringify(requestData),
        options
      );
      if (result.data && result.data.sessionID) {
        return result.data.sessionID;
      } else {
        console.log("Could not obtain access token!");
        console.log(result);
      }
    } catch (error) {
      console.log("Error in making request");
      console.log(error);
    }
  };
}

export const equifaxClient = new EquifaxClient();
