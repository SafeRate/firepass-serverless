import {
  Parcel,
  AppId,
  DatabaseId,
  DocumentId,
  Database,
} from "@oasislabs/parcel";
import { env } from "./env";
import { v4 as uuidv4 } from "uuid";
import * as fs from "fs";
import {
  EquifaxConsumerIdentity,
  EquifaxConsumerIdentityAddress,
  EquifaxCreditReportParent,
  EquifaxCurrentDesignator,
} from "./equifax";
import { Consumer } from "../types/resolverTypes";
import { BankAccountFull } from "../types/bankAccountFull";
import { EstatedProperty } from "./estated";

export type ParcelBankAccount = {
  account_access_token?: string;
  account_access_customer_id?: string;
  balance?: number;
  created?: string;
  id?: string;
  institution?: string;
  institution_id?: string;
  mask?: string;
  name?: string;
  payment_access_token?: string;
  payment_customer_id?: string;
  subtype?: string;
  type?: string;
  updated?: string;
  user_id?: string;
};

type ParcelEquifaxConsumer = {
  addresses_current: EquifaxConsumerIdentityAddress[];
  addresses_previous: EquifaxConsumerIdentityAddress[];
  created: string;
  dob: string;
  email: string;
  first_name: string;
  home_phone: string;
  id: string;
  last_name: string;
  mobile: string;
  revoked: boolean;
  ssn: string;
  updated: string;
  user_id: string;
};

export class ParcelClient {
  parcel: Parcel;
  constructor() {
    this.parcel = new Parcel({
      clientId: env.PARCEL_CLIENT_ID,
      privateKey: JSON.parse(env.PARCEL_PRIVATE_KEY),
    });
  }

  private listDatabases = async (): Promise<any> => {
    return await this.parcel.listDatabases({});
  };

  private deleteAllDatabases = async () => {
    console.log("Attempting to delete all databases...");
    const result: any = await this.listDatabases();
    const databases: Database[] = result.results;
    for (let d = 0; d < databases.length; d++) {
      const deleteResult = await this.deleteDatabase(databases[d].id);
      console.log(deleteResult);
    }
  };

  private deleteDatabase = async (databaseId: DatabaseId) => {
    try {
      await this.parcel.deleteDatabase(databaseId);
      console.log(`Successfully deleted database ${databaseId}`);
    } catch (error) {
      console.log(`Failed to delete database ${databaseId}`);
      console.log(error);
    }
  };

  public createDatabase = async (
    automobiles: boolean,
    companies: boolean,
    equifax: boolean,
    permissions: boolean,
    plaid: boolean,
    properties: boolean,
    stripe: boolean,
    users: boolean
  ): Promise<boolean> => {
    let noError = true;
    let databaseId = env.PARCEL_DATABASE_ID;

    if (!databaseId) {
      console.log("Attempting to create database...");

      try {
        // https://docs.oasislabs.com/parcel/latest/quickstart/database-query.html#creating-a-database
        const database = await this.parcel.createDatabase({
          name: `FirePass DB - ${env.PARCEL_APP_ID}`,
        });

        databaseId = database.id;

        console.log(
          `Successfully created database ${database.id} with name: ${database.name}`
        );
      } catch (error) {
        console.log("Failed to create database!");
        console.log(error);
        noError = false;
      }
    } else {
      console.log(`Updating database ${databaseId}`);
    }

    if (databaseId) {
      if (users) {
        console.log("Attempting to create users table...");
        const createUsersTable = {
          sql: `CREATE TABLE users(id TEXT, auth TEXT, created DATETIME, updated DATETIME, email TEXT, mobile TEXT);`,
          params: {},
        };

        try {
          const usersCreateResult = await this.parcel.queryDatabase(
            databaseId as DatabaseId,
            createUsersTable
          );

          console.log("Sucessfully created users table!");
          console.log(usersCreateResult);
        } catch (error) {
          console.log("Failed to create users table!");
          console.log(error);
          noError = false;
        }

        try {
          console.log("Attempting to add an index for users.id");
          await this.parcel.queryDatabase(databaseId as DatabaseId, {
            sql: `CREATE UNIQUE INDEX index_users_id ON users(id);`,
            params: {},
          });

          console.log("Successfully added index on users(id)");
        } catch (error) {
          console.log("Failed to add index on users(id);");
          console.log(error);
        }
        try {
          console.log("Attempting to add an index for users.email");
          await this.parcel.queryDatabase(databaseId as DatabaseId, {
            sql: `CREATE UNIQUE INDEX index_users_email ON users(email);`,
            params: {},
          });
          console.log("Successfully added index on users(email)");
        } catch (error) {
          console.log("Failed to add index on users(email);");
          console.log(error);
        }
        try {
          console.log("Attempting to add an index for users.auth");
          await this.parcel.queryDatabase(databaseId as DatabaseId, {
            sql: `CREATE UNIQUE INDEX index_users_auth ON users(auth);`,
            params: {},
          });
          console.log("Successfully added index on users(auth)");
        } catch (error) {
          console.log("Failed to add index on users(auth);");
          console.log(error);
        }
      }

      if (companies) {
        const createCompaniesTable = {
          sql: `CREATE TABLE companies(id TEXT, created DATETIME, updated DATETIME, name TEXT, website TEXT, privacy_policy TEXT);`,
          params: {},
        };

        try {
          await this.parcel.queryDatabase(
            databaseId as DatabaseId,
            createCompaniesTable
          );

          console.log("Sucessfully created companies table");
        } catch (error) {
          console.log("Unable to create companies table");
          console.log(error);
        }

        try {
          await this.parcel.queryDatabase(databaseId as DatabaseId, {
            sql: `CREATE UNIQUE INDEX index_companies_website ON companies(website);`,
            params: {},
          });
          console.log("Successfully added index on companies(website)");
        } catch (error) {}
      }

      if (permissions) {
        const createUserPermissionsTable = {
          sql: `CREATE TABLE users_permissions(user_id TEXT, id TEXT, company_id TEXT, granted DATETIME, rejected DATETIME, item_type TEXT, item_id);`,
          params: {},
        };
      }

      if (properties) {
        console.log("Attempting to create user's properties table...");

        const createPropertiesTable = {
          sql: `CREATE TABLE properties(user_id TEXT, id TEXT, created DATETIME, updated DATETIME, is_primary INTEGER, display TEXT);`,
          params: {},
        };

        try {
          const propertiesCreateResult = await this.parcel.queryDatabase(
            databaseId as DatabaseId,
            createPropertiesTable
          );

          console.log("Sucessfully created properties table!");
          console.log(propertiesCreateResult);
        } catch (error) {
          console.log("Failed to create properties table!");
          console.log(error);
          noError = false;
        }

        try {
          console.log(
            "Attempting to add unique constraint for property.user_id, property.id"
          );
          await this.parcel.queryDatabase(databaseId as DatabaseId, {
            sql: `CREATE UNIQUE INDEX index_properties_id_user_id ON properties(user_id, id);`,
            params: {},
          });
          console.log("Successfully added index on properties(id)");
        } catch (error) {
          console.log("Failed to add index on properties(id);");
          console.log(error);
        }

        try {
          console.log(
            "Attempting to add unique constraint for property.user_id, property.id"
          );
          await this.parcel.queryDatabase(databaseId as DatabaseId, {
            sql: `CREATE UNIQUE INDEX index_properties_user_id_display ON properties(user_id, display);`,
            params: {},
          });
          console.log(
            "Successfully added index on properties(user_id, display)"
          );
        } catch (error) {
          console.log("Failed to add index on properties(user_id, display);");
          console.log(error);
        }

        try {
          console.log("Attempting to add index for property.user_id");
          await this.parcel.queryDatabase(databaseId as DatabaseId, {
            sql: `CREATE INDEX index_properties_user_id ON properties(user_id);`,
            params: {},
          });
          console.log("Successfully added index on properties(user_id)");
        } catch (error) {
          console.log("Failed to add index on properties(user_id);");
          console.log(error);
        }

        try {
          console.log("Attempting to add index for property.id");
          await this.parcel.queryDatabase(databaseId as DatabaseId, {
            sql: `CREATE INDEX index_properties_id ON properties(id);`,
            params: {},
          });
          console.log("Successfully added index on properties(id)");
        } catch (error) {
          console.log("Failed to add index on properties(id);");
          console.log(error);
        }
      }

      if (equifax) {
        console.log("Attempting to create Equifax tables...");

        // https://docs.oasislabs.com/parcel/latest/quickstart/database-query.html#creating-a-table
        const createEquifaxConsumersTable = {
          sql: `CREATE TABLE equifax_consumers(user_id TEXT, id TEXT, created DATETIME, updated DATETIME, revoked DATETIME, ssn TEXT, dob TEXT, first_name TEXT, last_name TEXT, addresses_current JSON, addresses_previous JSON, email TEXT, mobile TEXT, home_phone TEXT);`,
          params: {},
        };

        try {
          const equifaxConsumersResult = await this.parcel.queryDatabase(
            databaseId as DatabaseId,
            createEquifaxConsumersTable
          );
          console.log("Sucessfully created equifax consumers table!");
          console.log(equifaxConsumersResult);
        } catch (error) {
          console.log("Failed to create equifax consumers table!");
          console.log(error);
          noError = false;
        }

        try {
          console.log(
            "Attempting to add an index for equifax_consumers.user_id"
          );
          await this.parcel.queryDatabase(databaseId as DatabaseId, {
            sql: `CREATE UNIQUE INDEX index_equifax_consumers_user_id ON equifax_consumers(user_id);`,
            params: {},
          });
          console.log("Successfully added index on equifax_consumers(user_id)");
        } catch (error) {
          console.log("Failed to add index on equifax_consumers(user_id)");
          console.log(error);
        }

        const createEquifaxCreditReportsTable = {
          sql: `CREATE TABLE equifax_credit_reports(user_id TEXT, id TEXT, timestamp DATETIME);`,
          params: {},
        };

        try {
          const equifaxCreditReportsResult = await this.parcel.queryDatabase(
            databaseId as DatabaseId,
            createEquifaxCreditReportsTable
          );
          console.log("Successfully created equifax credit reports table!");
          console.log(equifaxCreditReportsResult);
        } catch (error) {
          console.log("Failed to create equifax credit reports table!");
          console.log(error);
          noError = false;
        }

        try {
          console.log(
            "Attempting to add an index for equifax_credit_reports.id"
          );
          await this.parcel.queryDatabase(databaseId as DatabaseId, {
            sql: `CREATE UNIQUE INDEX index_equifax_credit_reports_id ON equifax_credit_reports(id);`,
            params: {},
          });
          console.log("Successfully added index on equifax_credit_reports(id)");
        } catch (error) {
          console.log("Failed to add index on equifax_credit_reports(id)");
          console.log(error);
        }
      }
    }

    if (plaid) {
      const createBankAccountsTable = {
        sql: `CREATE TABLE bank_accounts(id TEXT, user_id TEXT, created DATETIME, updated DATETIME, institution TEXT, institution_id TEXT, name TEXT, mask TEXT, type TEXT, subtype TEXT, account_access_token TEXT, account_access_customer_id TEXT, payment_access_token TEXT, payment_customer_id TEXT, balance REAL);`,
        params: {},
      };

      try {
        const createBankAccountsResult = await this.parcel.queryDatabase(
          databaseId as DatabaseId,
          createBankAccountsTable
        );

        console.log("Sucessfully created bank accounts table!");
        console.log(createBankAccountsResult);
      } catch (error) {
        console.log("Failed to create bank accounts table!");
        console.log(error);
        noError = false;
      }
    }

    if (stripe) {
    }

    return noError;
  };

  public getBankAccountById = async (
    bankAccountId: string
  ): Promise<BankAccountFull> => {
    let result: BankAccountFull = null;

    const query = {
      sql: `SELECT id, user_id, created, updated, institution, institution_id, name, mask, type, subtype, account_access_token, account_access_customer_id, payment_access_token, payment_customer_id, balance FROM bank_accounts WHERE id = $id;`,
      params: { $id: bankAccountId },
    };

    try {
      let parcelResult = await this.parcel.queryDatabase(
        env.PARCEL_DATABASE_ID as DatabaseId,
        query
      );

      result = this.parseBankAccount(parcelResult as ParcelBankAccount[]);
    } catch (error) {
      console.log(error);
      throw error;
    }

    return result;
  };

  public getBankAccountsForUser = async (
    userId: string
  ): Promise<BankAccountFull[]> => {
    let result: BankAccountFull[] = [];

    const query = {
      sql: `SELECT id, user_id, created, updated, institution, institution_id, name, mask, type, subtype, account_access_token, account_access_customer_id, payment_access_token, payment_customer_id, balance FROM bank_accounts WHERE user_id = $userId;`,
      params: { $userId: userId },
    };

    try {
      let parcelResult = await this.parcel.queryDatabase(
        env.PARCEL_DATABASE_ID as DatabaseId,
        query
      );

      result = this.parseBankAccounts(parcelResult as ParcelBankAccount[]);
    } catch (error) {
      console.log(error);
      throw error;
    }

    return result;
  };

  public getDocumentById = async (id: string) => {
    const download = this.parcel.downloadDocument(id as DocumentId);
    const tempFileName = `${env.STORAGE_TEMP_ROOT}/${uuidv4()}-${id}.json`;
    const saveLocation = fs.createWriteStream(tempFileName);

    try {
      await download.pipeTo(saveLocation);
      // console.log(`Document ${id} has been downloaded`);
    } catch (error) {
      console.error(`Failed to download document ${id}`);
      throw new Error(error);
    }

    const result = fs.readFileSync(tempFileName, "utf-8");
    fs.unlink(tempFileName, (err) => {
      if (err) {
        console.log("file not Deleted");
        console.log(err);
      } else {
        // console.log("file deleted");
      }
    });

    return result;
  };

  public getParcelId = async function () {
    const myIdentity = await this.parcel.getCurrentIdentity();
    return myIdentity.id;
  };

  public getUserData = async function () {
    const userData = await this.parcel.queryDatabase(env.PARCEL_DATABASE_ID, {
      sql: "SELECT * FROM equifax_consumers;",
      params: {},
    });

    return userData;
  };

  public getUserCreditReport = async function (
    timestamp: string,
    userId: string
  ): Promise<EquifaxCreditReportParent | null> {
    let result: EquifaxCreditReportParent | null = null;

    const reports = await this.parcel.queryDatabase(env.PARCEL_DATABASE_ID, {
      sql: "SELECT * FROM equifax_credit_reports WHERE user_id = $user_id AND timestamp = $timestamp;",
      params: {
        $timestamp: timestamp,
        $user_id: userId,
      },
    });

    if (reports && Array.isArray(reports) && reports.length > 0) {
      const document: EquifaxCreditReportParent | null =
        (await this.getJSONDocumentById(
          reports[0].id
        )) as EquifaxCreditReportParent | null;
      if (document) {
        result = document;
      } else {
        throw new Error(`Could not find identified credit report`);
      }
    } else {
      throw new Error(`Could not find credit report associated with user`);
    }

    return result;
  };

  public getUserCreditReports = async function (
    userId: string
  ): Promise<[any]> {
    const results = await this.parcel.queryDatabase(env.PARCEL_DATABASE_ID, {
      sql: "SELECT user_id, timestamp FROM equifax_credit_reports WHERE user_id = $user_id ORDER BY timestamp DESC;",
      params: {
        $user_id: userId,
      },
    });

    return results;
  };

  public getUserProperty = async function (
    display: string,
    userId: string
  ): Promise<EstatedProperty | null> {
    let result: EstatedProperty | null = null;

    const reports = await this.parcel.queryDatabase(env.PARCEL_DATABASE_ID, {
      sql: "SELECT * FROM properties WHERE user_id = $user_id AND display = $display;",
      params: {
        $display: display,
        $user_id: userId,
      },
    });

    if (reports && Array.isArray(reports) && reports.length > 0) {
      const document: EstatedProperty | null = (await this.getJSONDocumentById(
        reports[0].id
      )) as EstatedProperty | null;
      if (document) {
        result = document;
      } else {
        throw new Error(`Could not find identified property`);
      }
    } else {
      throw new Error(`Could not find property associated with user`);
    }

    return result;
  };

  public getUserProperties = async function (userId): Promise<any[] | null> {
    let result: any[] | null = null;

    const properties = await this.parcel.queryDatabase(env.PARCEL_DATABASE_ID, {
      sql: "SELECT user_id, display FROM properties WHERE user_id = $user_id;",
      params: {
        $user_id: userId,
      },
    });

    return properties;
  };

  public getJSONDocumentById = async (id: string) => {
    const document = await this.getDocumentById(id);
    if (document) {
      return JSON.parse(document);
    } else {
      return null;
    }
  };

  public uploadJSONDocument = async function (
    title: string,
    json: any,
    tags: string[]
  ): Promise<string> {
    let result: string = "";

    if (title && json) {
      const data = json;
      const documentDetails = {
        title,
        tags,
      };

      try {
        const localFileName = `${
          env.STORAGE_TEMP_ROOT
        }/${uuidv4()}-${title}.json`;
        await fs.promises.writeFile(localFileName, JSON.stringify(json));
        const readStream = fs.createReadStream(localFileName);

        const document = await this.parcel.uploadDocument(readStream, {
          details: documentDetails,
          toApp: env.PARCEL_APP_ID as AppId,
        }).finished;

        if (document) {
          result = document.id;
        }
      } catch (error: any) {
        console.error("Failed to upload document");
        console.error(error);
      }
    } else {
      throw new Error(
        "Be sure to pass filename and json to uploadJSONDocument!"
      );
    }

    return result;
  };

  private uploadSampleDocument = async function () {
    const data = "Hello private world again again again!";
    const documentDetails = {
      title: "My fourth document",
      tags: ["greeting", "english"],
    };

    console.log("uploading document");

    try {
      const document = await this.parcel.uploadDocument(data, {
        details: documentDetails,
        toApp: env.PARCEL_APP_ID as AppId,
      }).finished;
    } catch (error: any) {
      console.error("Failed to upload document");
      console.error(error);
    }
    console.log("document uploaded");

    return document;
  };

  public insertBankAccount = async (
    bankAccount: BankAccountFull,
    userId: string
  ) => {
    const $created = new Date();
    const $updated = $created;

    const $id = uuidv4();

    const $account_access_token = bankAccount.accountAccessToken;
    const $account_access_customer_id = bankAccount.accountAccessCustomerId;
    const $balance = bankAccount.bankAccount.balance;
    const $institution = bankAccount.institution;
    const $institution_id = bankAccount.institutionId;
    const $name = bankAccount.bankAccount.name;
    const $mask = bankAccount.bankAccount.mask;
    const $payment_access_token = bankAccount.paymentAccessToken;
    const $payment_customer_id = bankAccount.paymentCustomerId;
    const $subtype = bankAccount.bankAccount.subtype;
    const $type = bankAccount.bankAccount.type;
    const $user_id = userId;

    let insertStatement = {
      sql: "INSERT INTO bank_accounts VALUES ($id, $user_id, $created, $updated, $institution, $institution_id, $name, $mask, $type, $subtype, $account_access_token, $account_access_customer_id, $payment_access_token, $payment_customer_id, $balance)",
      params: {
        $account_access_token,
        $account_access_customer_id,
        $balance,
        $created,
        $id,
        $institution,
        $institution_id,
        $mask,
        $name,
        $payment_access_token,
        $payment_customer_id,
        $subtype,
        $type,
        $updated,
        $user_id,
      },
    };

    try {
      const result = await this.parcel.queryDatabase(
        env.PARCEL_DATABASE_ID as DatabaseId,
        insertStatement
      );

      console.log("result", result);

      return result;
    } catch (error) {
      console.log(
        "Unable to insert bank account.  See following error message for more guidance."
      );
      console.log(error);
    }
  };

  public insertEquifaxConsumer = async (
    consumerIdentity: EquifaxConsumerIdentity,
    userId: string
  ) => {
    const $created = new Date();
    const $updated = $created;
    const $revoked = null;

    let $addresses_current: EquifaxConsumerIdentityAddress[] = [];
    let $addresses_previous: EquifaxConsumerIdentityAddress[] = [];

    if (Array.isArray(consumerIdentity.addresses)) {
      for (let a = 0; a < consumerIdentity.addresses.length; a++) {
        const address = consumerIdentity.addresses[a];
        if (address.type === EquifaxCurrentDesignator.CURRENT) {
          $addresses_current.push(address);
        } else {
          $addresses_previous.push(address);
        }
      }
    }

    const $id = consumerIdentity.id;
    const $dob = consumerIdentity.identification.dob;
    const $first_name = consumerIdentity.name.firstName;
    const $last_name = consumerIdentity.name.lastName;
    const $ssn = consumerIdentity.identification.ssn;
    const $email = consumerIdentity.contact.emailAddress;
    const $mobile = consumerIdentity.contact.mobile;
    const $home_phone = consumerIdentity.contact.homePhone;

    let insertStatement = {
      sql: "INSERT INTO equifax_consumers VALUES ($user_id, $id, $created, $updated, $revoked, $ssn, $dob, $first_name, $last_name, $addresses_current, $addresses_previous, $email, $mobile, $home_phone)",
      params: {
        $addresses_current,
        $addresses_previous,
        $created,
        $dob,
        $email,
        $first_name,
        $home_phone,
        $id,
        $last_name,
        $mobile,
        $revoked,
        $ssn,
        $updated,
        $user_id: userId,
      },
    };

    try {
      const result = await this.parcel.queryDatabase(
        env.PARCEL_DATABASE_ID as DatabaseId,
        insertStatement
      );

      return result;
    } catch (error) {
      console.log(
        "Unable to insert equifax consumer.  See following error message for more guidance."
      );
      console.log(error);
    }
  };

  public insertUserProperty = async (
    display: string,
    id: string,
    isPrimary: boolean,
    userId: string
  ) => {
    const $created = new Date();
    const $updated = $created;
    const $id = id;
    const $user_id = userId;
    const $is_primary = isPrimary ? 1 : 0;
    const $display = display;

    let insertStatement = {
      sql: "INSERT INTO properties VALUES ($user_id, $id, $created, $updated, $is_primary, $display)",
      params: {
        $id,
        $user_id,
        $created,
        $updated,
        $is_primary,
        $display,
      },
    };

    try {
      const result = await this.parcel.queryDatabase(
        env.PARCEL_DATABASE_ID as DatabaseId,
        insertStatement
      );

      return result;
    } catch (error) {
      console.log(
        "Unable to insert user property.  See following error message for more guidance."
      );
      console.log(error);
      throw new Error(error);
    }
  };

  public insertCreditReport = async (id: string, userId: string) => {
    const $timestamp = new Date();
    const $user_id = userId;
    const $id = id;

    let insertStatement = {
      sql: "INSERT INTO equifax_credit_reports VALUES ($user_id, $id, $timestamp);",
      params: {
        $user_id,
        $id,
        $timestamp,
      },
    };

    try {
      await this.parcel.queryDatabase(
        env.PARCEL_DATABASE_ID as DatabaseId,
        insertStatement
      );
    } catch (error) {
      console.log("Unable to create credit repots");
      console.log(error);
      throw error;
    }
  };

  public insertCompany = async (
    id: string,
    name: string,
    website: string,
    privacyPolicy: string
  ) => {
    const $created = new Date();
    const $updated = $created;
    const $id = id;
    const $name = name;
    const $website = website;
    const $privacy_policy = privacyPolicy;

    let insertStatement = {
      sql: "INSERT INTO companies VALUES ($id, $created, $updated, $name, $website, $privacy_policy);",
      params: {
        $created,
        $updated,
        $id,
        $name,
        $website,
        $privacy_policy,
      },
    };

    try {
      await this.parcel.queryDatabase(
        env.PARCEL_DATABASE_ID as DatabaseId,
        insertStatement
      );
    } catch (error) {
      console.log("Unable to create companies table");
      console.log(error);
    }
  };

  public insertUser = async (
    id: string,
    email: string,
    mobile: string,
    auth: string
  ) => {
    const $created = new Date();
    const $updated = $created;
    const params = {
      $id: id,
      $email: email,
      $created,
      $updated,
      $auth: auth,
      $mobile: mobile ? mobile : "",
    };

    let insertStatement = {
      sql: "INSERT INTO users VALUES ($id, $auth, $created, $updated, $email, $mobile)",
      params,
    };

    await this.parcel.queryDatabase(
      env.PARCEL_DATABASE_ID as DatabaseId,
      insertStatement
    );
  };

  public getEquifaxConsumer = async (userId: string): Promise<Consumer> => {
    const selectStatement = {
      sql: `SELECT ssn, dob, first_name, last_name, addresses_current, addresses_previous, email, mobile, home_phone FROM equifax_consumers WHERE user_id = $user_id;`,
      params: { $user_id: userId },
    };

    const results = await this.parcel.queryDatabase(
      env.PARCEL_DATABASE_ID as DatabaseId,
      selectStatement
    );

    return this.parseEquifaxConsumer(results as ParcelEquifaxConsumer[]);
  };

  private parseBankAccount = (
    bankAccount: ParcelBankAccount[] | ParcelBankAccount
  ): BankAccountFull => {
    if (!bankAccount) {
      return null;
    }

    if (Array.isArray(bankAccount)) {
      if (bankAccount.length > 0) {
        bankAccount = bankAccount[0];
      } else {
        return null;
      }
    }

    let returnObj: BankAccountFull = {
      accountAccessCustomerId: bankAccount.account_access_customer_id,
      accountAccessToken: bankAccount.account_access_token,
      bankAccount: {
        balance: bankAccount.balance,
        id: bankAccount.id,
        mask: bankAccount.mask,
        name: bankAccount.name,
        subtype: bankAccount.subtype,
        type: bankAccount.type,
      },
      created: bankAccount.created,
      institution: bankAccount.institution,
      institutionId: bankAccount.institution_id,
      paymentAccessToken: bankAccount.payment_access_token,
      paymentCustomerId: bankAccount.payment_customer_id,
      updated: bankAccount.updated,
    };

    return returnObj;
  };

  private parseBankAccounts = (
    results: ParcelBankAccount[]
  ): BankAccountFull[] => {
    let returnArr: BankAccountFull[] = [];

    if (Array.isArray(results) && results.length) {
      for (let r = 0; r < results.length; r++) {
        returnArr.push(this.parseBankAccount(results[r]));
      }
    }

    return returnArr;
  };

  private parseEquifaxConsumers = (
    results: ParcelEquifaxConsumer[]
  ): Consumer[] => {
    let returnArr: Consumer[] = [];

    if (Array.isArray(results) && results.length) {
      for (let r = 0; r < results.length; r++) {
        returnArr.push(this.parseEquifaxConsumer(results[r]));
      }
    }

    return returnArr;
  };

  private parseEquifaxConsumer = (
    peConsumer: ParcelEquifaxConsumer[] | ParcelEquifaxConsumer
  ): Consumer => {
    if (!peConsumer) {
      return null;
    }

    if (Array.isArray(peConsumer)) {
      if (peConsumer.length > 0) {
        peConsumer = peConsumer[0];
      } else {
        return null;
      }
    }

    let returnObj: Consumer = {
      contact: {
        emailAddress: peConsumer.email,
        homePhone: peConsumer.home_phone,
        mobile: peConsumer.mobile,
      },
      currentAddresses:
        typeof peConsumer.addresses_current === "string"
          ? JSON.parse(peConsumer.addresses_current as any)
          : peConsumer.addresses_current,
      id: peConsumer.user_id,
      identification: {
        dob: peConsumer.dob,
        ssn: peConsumer.ssn,
      },
      name: {
        firstName: peConsumer.first_name,
        lastName: peConsumer.last_name,
      },
      previousAddresses:
        typeof peConsumer.addresses_previous === "string"
          ? JSON.parse(peConsumer.addresses_previous as any)
          : peConsumer.addresses_previous,
    };

    return returnObj;
  };

  public sandbox = async (sql: string, params: any) => {
    const sqlStatement: any = {
      sql,
    };
    if (params) {
      const paramKeys = Object.keys(params);

      paramKeys.forEach((paramKey) => {
        if (!paramKey.includes("$")) {
          throw new Error(`Param key does not include a dollar sign`);
        }
      });

      sqlStatement.params = params;
    }

    const result = await this.parcel.queryDatabase(
      env.PARCEL_DATABASE_ID as DatabaseId,
      sqlStatement
    );

    return result;
  };
}

export const parcelClient = new ParcelClient();
