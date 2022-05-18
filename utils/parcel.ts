import { Parcel, AppId, DatabaseId, DocumentId } from "@oasislabs/parcel";
import { env } from "./env";
import { v4 as uuidv4 } from "uuid";
import * as fs from "fs";

class ParcelClient {
  parcel: Parcel;
  constructor() {
    this.parcel = new Parcel({
      clientId: env.PARCEL_CLIENT_ID,
      privateKey: JSON.parse(env.PARCEL_PRIVATE_KEY),
    });
  }

  getParcelId = async function () {
    const myIdentity = await this.parcel.getCurrentIdentity();
    return myIdentity.id;
  };

  createDatabase = async function () {
    const database = await this.parcel.createDatabase({
      name: "Safe Rate Permissions",
    });

    console.log(`Created database ${database.id} with name: ${database.name}`);

    const createEntityTable = {
      sql: "CREATE TABLE entity (entityId TEXT, entityToken TEXT, name TEXT, created DATETIME, tin TEXT, description TEXT)",
      params: {},
    };

    await this.parcel.queryDatabase(database.id, createEntityTable);
    console.log(`Created *entity* table`);

    const createPersonTable = {
      sql: "CREATE TABLE person (personId TEXT, personToken TEXT, name TEXT, created DATETIME, tin TEXT)",
      params: {},
    };

    await this.parcel.queryDatabase(database.id, createPersonTable);
    console.log(`Created *person* table`);

    const createPermissionTable = {
      sql: "CREATE TABLE permission (permissionId TEXT, permission TEXT, name TEXT, created DATETIME)",
      params: {},
    };

    await this.parcel.queryDatabase(database.id, createPermissionTable);
    console.log(`Created *permission* table`);

    const createEntityPersonLookupTable = {
      sql: "CREATE TABLE entity_person_lookup (entityPersonToken TEXT, personId TEXT, entityId TEXT, created DATETIME, expires DATETIME)",
      params: {},
    };

    await this.parcel.queryDatabase(database.id, createEntityPersonLookupTable);
    console.log(`Created *entity person lookup* table`);

    const createPersonPermissionLookupTable = {
      sql: "CREATE TABLE person_permission_lookup (personPermissionToken TEXT, entityId TEXT, personId TEXT, permissionId TEXT, created DATETIME, expires DATETIME, metadata JSON)",
      params: {},
    };

    await this.parcel.queryDatabase(
      database.id,
      createPersonPermissionLookupTable
    );
    console.log(`Created *person permission lookup* table`);
  };

  // createSeedData = async function () {
  //   console.log("CREATING SEED DATA");

  //   const result = await entityInsert({
  //     $name: "Safe Rate Lending",
  //     $tin: "",
  //     $description: "",
  //   });
  // };

  entityInsert = async function ({ $name, $tin, $description }) {
    const $entityId = uuidv4();
    const $entityToken = uuidv4();
    const $created = new Date();

    let insertStatement = {
      sql: "INSERT INTO entity VALUES ($entityId, $entityToken, $name, $created, $tin, $description)",
      params: {
        $entityId,
        $entityToken,
        $name,
        $created,
        $tin,
        $description,
      },
    };

    const result = await this.parcel.queryDatabase(
      env.PARCEL_DATABASE_ID as DatabaseId,
      insertStatement
    );

    console.log("RESULT");
    console.log(result);
    console.log(`${$name}: id (${$entityId}) token (${$entityToken})`);

    return result;
  };

  addPersonPermissionsToEntity = async function ({
    entityToken,
    personId,
    permissions,
  }) {};

  addFieldPermissionsToEntityPerson = async function ({
    entityToken,
    personToken,
    permissions,
  }) {};

  getPersonById = async function ({ personId }) {};

  getEntityById = async function ({ entityId }) {};

  getEntity = async function ({ entityToken }) {};

  getPersonForEntity = async function ({ entityToken, personToken }) {};

  getFieldForEntityPerson = async function ({
    entityToken,
    personToken,
    fieldToken,
  }) {};

  uploadDocument = async function () {
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

  getDocumentById = async function (id: string) {
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
}

export const parcelClient = new ParcelClient();
