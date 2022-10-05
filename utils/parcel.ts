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
  EquifaxCurrentDesignator,
} from "./equifax";
import { Consumer } from "../types/resolverTypes";
import { BankAccountFull } from "../types/bankAccountFull";

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
    equifax: boolean,
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
          sql: `CREATE TABLE users(id TEXT, company_id TEXT, created DATETIME, updated DATETIME, email TEXT, mobile TEXT);`,
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
          console.log("Attempting to add an index for users.company_id");
          await this.parcel.queryDatabase(databaseId as DatabaseId, {
            sql: `CREATE UNIQUE INDEX index_users_company_id ON users(company_id);`,
            params: {},
          });
          console.log("Successfully added index on users(company_id)");
        } catch (error) {
          console.log("Failed to add index on users(company_id);");
          console.log(error);
        }
      }

      if (properties) {
        console.log("Attempting to create user's properties table...");

        const createPropertiesTable = {
          sql: `CREATE TABLE properties(user_id TEXT, id TEXT, created DATETIME, updated DATETIME, primary INTEGER, address TEXT, address_2 TEXT, city TEXT, state TEXT, zipcode TEXT, display TEXT);`,
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
          console.log("Attempting to add index for property.user_id");
          await this.parcel.queryDatabase(databaseId as DatabaseId, {
            sql: `CREATE UNIQUE INDEX index_properties_user_id ON properties(user_id);`,
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
            sql: `CREATE UNIQUE INDEX index_properties_id ON properties(id);`,
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

        const createEquifaxGrantsTable = {
          sql: `CREATE TABLE equifax_consents(id TEXT, consumers_id TEXT, ip TEXT, user_agent TEXT, inquiry_type TEXT, timestamp DATETIME, consent_text TEXT, document_type TEXT, document_raw_id TEXT, document_anonymous_id TEXT);`,
          params: {},
        };

        try {
          const equifaxGrantResult = await this.parcel.queryDatabase(
            databaseId as DatabaseId,
            createEquifaxGrantsTable
          );
          console.log("Successfully created equifax consents table!");
          console.log(equifaxGrantResult);
        } catch (error) {
          console.log("Failed to create equifax consents table!");
          console.log(error);
          noError = false;
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
      console.log(`Document ${id} has been downloaded`);
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
        console.log("file deleted");
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

  public insertUser = async (id: string, email: string) => {
    const $created = new Date();
    const $updated = $created;
    const params = {
      $id: id,
      $email: email,
      $created,
      $updated,
    };

    let insertStatement = {
      sql: "INSERT INTO users VALUES ($id, $created, $updated, $email)",
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
