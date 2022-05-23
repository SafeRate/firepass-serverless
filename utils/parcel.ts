import { Parcel, AppId, DatabaseId, DocumentId } from "@oasislabs/parcel";
import { env } from "./env";
import { v4 as uuidv4 } from "uuid";
import * as fs from "fs";
import { EquifaxAddress } from "./equifax";

class ParcelClient {
  parcel: Parcel;
  constructor() {
    this.parcel = new Parcel({
      clientId: env.PARCEL_CLIENT_ID,
      privateKey: JSON.parse(env.PARCEL_PRIVATE_KEY),
    });
  }

  public createSeedData = async function () {
    // https://docs.oasislabs.com/parcel/latest/quickstart/database-query.html#creating-a-database
    const database = await this.parcel.createDatabase({
      name: "FirePass DB",
    });

    console.log(`Created database ${database.id} with name: ${database.name}`);

    // https://docs.oasislabs.com/parcel/latest/quickstart/database-query.html#creating-a-table
    const createConsumersTable = {
      sql: `CREATE TABLE consumers(id TEXT, application_id TEXT, instatouch_id TEXT, created DATETIME, updated DATETIME, revoked DATETIME, ssn TEXT, dob TEXT, first_name TEXT, last_name TEXT, addresses_current JSON, addresses_previous JSON, email TEXT, mobile TEXT, home_phone TEXT);`,
    };

    await this.parcel.queryDatabase(database.id, createConsumersTable);

    const createGrantsTable = {
      sql: `CREAT TABLE grants(id TEXT, consumers_id TEXT, timestamp DATETIME, consent TEXT, document_type TEXT, document_raw_id TEXT, document_anonymous_id TEXT);`,
    };

    await this.parcel.queryDatabase(database.id, createGrantsTable);
  };

  private getDocumentById = async function (id: string) {
    console.log(`id is ${id}`);

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

  private insertCustomer = async function (
    $address_current: [EquifaxAddress] | null,
    $address_previous: [EquifaxAddress] | null,
    $application_id: string | null,
    $dob: string,
    $email: string | null,
    $first_name: string,
    $home_phone: string | null,
    $instatouch_id: string | null,
    $last_name: string | null,
    $mobile: string | null,
    $ssn: string | null
  ) {
    const $id = uuidv4();
    const $created = new Date();
    const $updated = $created;
    const $revoked = null;

    const $addresses_current = {
      $addresses: $address_current,
    };

    const $addresses_previous = {
      $addresses: $address_previous,
    };

    let insertStatement = {
      sql: "INSERT INTO entity VALUES ($id, $application_id, $instatouch_id, $created, $updated, $revoked, $ssn, $dob, $first_name, $last_name, $address_current, $addresses_previous, $email, $mobile, $home_phone)",
      params: {
        $addresses_current,
        $addresses_previous,
        $application_id,
        $created,
        $dob,
        $email,
        $first_name,
        $home_phone,
        $id,
        $instatouch_id,
        $last_name,
        $mobile,
        $revoked,
        $ssn,
        $updated,
      },
    };

    const result = await this.parcel.queryDatabase(
      env.PARCEL_DATABASE_ID as DatabaseId,
      insertStatement
    );
  };
}

export const parcelClient = new ParcelClient();
