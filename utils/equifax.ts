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

enum ConsentEventType {
  OPT_IN = "opt-in",
  OPT_OUT = "opt-out",
}

enum ConsentType {
  SMS = "SMS",
  WHITELIST = "whitelist",
}

enum ConsentMethod {
  TCO = "TCO",
  TCP = "TCP",
  MA = "MA",
  OTHER = "Other",
}

enum ConsentServices {
  IDENTITY = "identity",
}

enum IdentityOutputCode {
  EN = "EN",
  "EN-PF" = "EN-PF",
}

export enum EquifaxDesignator {
  CURRENT = "CURRENT",
  PREVIOUS = "PREVIOUS",
}

type instaTouchIdHandshake = {
  sessionId: string;
  instaTouch: string;
  carrier: string | null;
};

export type EquifaxAddress = {
  type: EquifaxDesignator;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
};

export class EquifaxClient {
  private b2b2cUrlBase: string;
  private b2b2cStage: EquifaxStage;
  private b2b2cAccessToken: string;
  private standardStsUrlBase: string;
  private standardStsAccount: string;
  private standardStsId: string;
  private standardStsSecret: string;
  private standardStsSecurity: string;
  private standardStsStage: string;

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

  private handleEquifaxRequestError() {}

  private getStsAccessToken = async function (
    scope: EquifaxScope
  ): Promise<string> {
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
      console.log("Error in making Sts Access token request");
      // console.log(error);
    }
  };

  //https://developer.equifax.com/products/apiproducts/instatouchr-id
  public getInstaTouchID = async function (
    deviceIp: string
  ): Promise<instaTouchIdHandshake> {
    // Subscribe to get API credentials.
    // Use API credentials to generate an access token.
    const accessToken = await this.getStsAccessToken(
      EquifaxScope.INSTATOUCH_ID
    );
    console.log("accessToken", accessToken);

    // Make the Handshake call to start a new API session including the "deviceIP" (‘deviceIP’ determines if the mobile is on the mobile network or WiFi).
    const instaTouchIdHandshakeSession: instaTouchIdHandshake =
      this.startInstatouchIdHandshake(accessToken, deviceIp);

    return instaTouchIdHandshakeSession;
  };

  public getOneView = async function (): Promise<string> {
    const accessToken = await this.getStsAccessToken(EquifaxScope.ONEVIEW);
    return accessToken;
  };

  public getOtpPasscode = async (
    sessionId: string,
    mobileNumber: string
  ): Promise<{ sessionId: string; transactionKey: string }> => {
    console.log("Hello world");
    const accessToken = await this.getStsAccessToken(
      EquifaxScope.INSTATOUCH_ID
    );

    const returnObj = {
      sessionId,
      transactionKey: null,
    };

    const requestPath = `/business/instatouch-identity/v2/wifi-sessions/identity-verifications/one-time-passcodes/send`;
    const requestUrl = `${this.standardStsUrlBase}${requestPath}`;

    const requestData = {
      merchantId: env.EQUIFAX_MERCHANT_ID,
      consumerIdentifier: {
        subjectIdentifier: mobileNumber,
        subjectType: "MDN",
      },
    };

    const requestHeaders = {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
      "efx-sessionId": sessionId,
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

      if (result.data) {
        if (result?.data?.otpLifecycle?.transactionKey) {
          returnObj.transactionKey = result.data.otpLifecycle.transactionKey;
        } else {
          throw new Error(
            "Don't have required transaction key for OTP passcode"
          );
        }
      }
    } catch (error) {
      console.log("Error in making request");
      console.log(error);
    }

    return returnObj;
  };

  public getPreapprovalOfOne = async function (): Promise<string> {
    const accessToken = await this.getStsAccessToken(
      EquifaxScope.INSTATOUCH_ID
    );
    return accessToken;
  };

  private startInstatouchIdHandshake = async function (
    accessToken: string,
    deviceIp: string
  ): Promise<instaTouchIdHandshake> {
    const returnObj = {
      sessionId: null,
      instaTouch: null,
      carrier: null,
    };

    const requestPath = `/business/instatouch-identity/v2/user-sessions`;
    const requestUrl = `${this.standardStsUrlBase}${requestPath}`;

    const requestData = {
      merchantId: env.EQUIFAX_MERCHANT_ID,
      deviceIp,
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

      if (result.data) {
        const resultData = result.data;
        if (!resultData.sessionID || !resultData.instaTouch) {
          throw new Error("Don't have required data for Instatouch handshake");
        }

        returnObj.sessionId = resultData.sessionID;
        returnObj.instaTouch = resultData.instaTouch;
        if (resultData.carrier) {
          returnObj.carrier = resultData.carrier;
        }
      }
    } catch (error) {
      console.log("Error in making request");
      console.log(error);
    }

    return returnObj;
  };

  public completeInstaTouchOtp = async (
    mobileNumber: string,
    passcode: string,
    sessionId: string,
    transactionKey: string,
    SSN: string,
    zipCode: string
  ) => {
    const accessToken = await this.getStsAccessToken(
      EquifaxScope.INSTATOUCH_ID
    );
    const isValid = await this.validateOtpSession(
      mobileNumber,
      passcode,
      sessionId,
      transactionKey,
      accessToken
    );

    if (isValid) {
      const isConsentRecorded = await this.recordConsent(
        accessToken,
        sessionId,
        ConsentEventType.OPT_IN,
        ConsentType.WHITELIST,
        ConsentMethod.TCO,
        [ConsentServices.IDENTITY]
      );

      if (isConsentRecorded) {
        await this.getConsumerIdentity(
          accessToken,
          sessionId,
          SSN,
          zipCode,
          IdentityOutputCode.EN
        );
      }
    }
  };

  private getConsumerIdentity = async (
    accessToken: string,
    sessionId: string,
    SSN: string,
    zipCode: string,
    outputCode: IdentityOutputCode
  ) => {
    const requestPath = `/business/instatouch-identity/v2/user-sessions/user-attributes`;
    const requestUrl = `${this.standardStsUrlBase}${requestPath}`;

    const requestData = {
      merchantId: env.EQUIFAX_MERCHANT_ID,
      outputCode,
      authentication: {
        zipCode,
        SSN,
      },
    };

    const requestHeaders = {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
      "efx-sessionId": sessionId,
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

      if (result.data) {
        const resultData = result.data;
        console.log(JSON.stringify(resultData, null, 4));
        if (resultData.instaTouch) {
          return true;
        } else {
          return false;
        }
      }
    } catch (error) {
      console.log("Error in making request");
      console.log(error);
    }
  };

  private recordConsent = async (
    accessToken: string,
    sessionId: string,
    consentEvent: ConsentEventType,
    consentType: ConsentType,
    consentMethod: ConsentMethod,
    consentForServices: ConsentServices[]
  ) => {
    const requestPath = `/business/instatouch-identity/v2/user-sessions/user-consents`;
    const requestUrl = `${this.standardStsUrlBase}${requestPath}`;

    const requestData = {
      merchantId: env.EQUIFAX_MERCHANT_ID,
      consumerConsent: {
        consentEventDate: new Date().toISOString(),
        consentEvent,
        consentType,
        consentMethod,
        consentForServices,
      },
      consumerIdentifier: {
        subjectIdentifier: sessionId,
        subjectType: "sessionId",
      },
    };

    const requestHeaders = {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
      "efx-sessionId": sessionId,
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

      if (result.data) {
        const resultData = result.data;
        console.log("resultData", resultData);
        if (
          resultData.consumerIdentifier &&
          resultData.consumerIdentifier.subjectIdentifier
        ) {
          return true;
        } else {
          return false;
        }
      }
    } catch (error) {
      console.log("Error in making request");
      console.log(error);
    }

    return false;
  };

  private validateOtpSession = async (
    mobileNumber: string,
    passcode: string,
    sessionId: string,
    transactionKey: string,
    accessToken: string
  ) => {
    const requestPath = `/business/instatouch-identity/v2/wifi-sessions/identity-verifications/one-time-passcodes/validate`;
    const requestUrl = `${this.standardStsUrlBase}${requestPath}`;

    const requestData = {
      merchantId: env.EQUIFAX_MERCHANT_ID,
      consumerIdentifier: {
        subjectIdentifier: mobileNumber,
        subjectType: "MDN",
      },
      consumerAuthentication: {
        passcode,
      },
      otpLifecycle: {
        transactionKey,
      },
    };

    const requestHeaders = {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
      "efx-sessionId": sessionId,
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

      if (result.data) {
        const resultData = result.data;
        console.log("resultData", resultData);
        if (resultData.instaTouch) {
          return true;
        } else {
          return false;
        }
      }
    } catch (error) {
      console.log("Error in making request");
      console.log(error);
    }

    return false;
  };
}

export const equifaxClient = new EquifaxClient();
