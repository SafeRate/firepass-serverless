import Parcel, { AppId, DatabaseId } from "@oasislabs/parcel";
import { env } from "./env";
import { v4 as uuidv4 } from "uuid";

const parcel = new Parcel({
  clientId: env.PARCEL_CLIENT_ID,
  privateKey: JSON.parse(env.PARCEL_PRIVATE_KEY),
});

export const getParcelId = async function () {
  const myIdentity = await parcel.getCurrentIdentity();
  return myIdentity.id;
};

export const createDatabase = async function () {
  const database = await parcel.createDatabase({
    name: "Safe Rate Permissions",
  });

  console.log(`Created database ${database.id} with name: ${database.name}`);

  const createEntityTable = {
    sql: "CREATE TABLE entity (entityId TEXT, entityToken TEXT, name TEXT, created DATETIME, tin TEXT, description TEXT)",
    params: {},
  };

  await parcel.queryDatabase(database.id, createEntityTable);
  console.log(`Created *entity* table`);

  const createPersonTable = {
    sql: "CREATE TABLE person (personId TEXT, personToken TEXT, name TEXT, created DATETIME, tin TEXT)",
    params: {},
  };

  await parcel.queryDatabase(database.id, createPersonTable);
  console.log(`Created *person* table`);

  const createPermissionTable = {
    sql: "CREATE TABLE permission (permissionId TEXT, permission TEXT, name TEXT, created DATETIME)",
    params: {},
  };

  await parcel.queryDatabase(database.id, createPermissionTable);
  console.log(`Created *permission* table`);

  const createEntityPersonLookupTable = {
    sql: "CREATE TABLE entity_person_lookup (entityPersonToken TEXT, personId TEXT, entityId TEXT, created DATETIME, expires DATETIME)",
    params: {},
  };

  await parcel.queryDatabase(database.id, createEntityPersonLookupTable);
  console.log(`Created *entity person lookup* table`);

  const createPersonPermissionLookupTable = {
    sql: "CREATE TABLE person_permission_lookup (personPermissionToken TEXT, entityId TEXT, personId TEXT, permissionId TEXT, created DATETIME, expires DATETIME, metadata JSON)",
    params: {},
  };

  await parcel.queryDatabase(database.id, createPersonPermissionLookupTable);
  console.log(`Created *person permission lookup* table`);
};

export const createSeedData = async function () {
  console.log("CREATING SEED DATA");

  const result = await entityInsert({
    $name: "Safe Rate Lending",
    $tin: "",
    $description: "",
  });
};

export const entityInsert = async function ({ $name, $tin, $description }) {
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

  const result = await parcel.queryDatabase(
    env.PARCEL_DATABASE_ID as DatabaseId,
    insertStatement
  );

  console.log("RESULT");
  console.log(result);
  console.log(`${$name}: id (${$entityId}) token (${$entityToken})`);

  return result;
};

export const addPersonPermissionsToEntity = async function ({
  entityToken,
  personId,
  permissions,
}) {};

export const addFieldPermissionsToEntityPerson = async function ({
  entityToken,
  personToken,
  permissions,
}) {};

export const getPersonById = async function ({ personId }) {};

export const getEntityById = async function ({ entityId }) {};

export const getEntity = async function ({ entityToken }) {};

export const getPersonForEntity = async function ({
  entityToken,
  personToken,
}) {};

export const getFieldForEntityPerson = async function ({
  entityToken,
  personToken,
  fieldToken,
}) {};

export const uploadDocument = async function () {
  const data = "Hello private world!";
  const documentDetails = {
    title: "My first document",
    tags: ["greeting", "english"],
  };

  const document = await parcel.uploadDocument(data, {
    details: documentDetails,
    toApp: process.env.PARCEL_APP_ID as AppId,
  }).finished;

  console.log(document);
  return document;
};

export const getDocumentById = async function (id) {
  const download = parcel.downloadDocument(id);
  const tempFileName = `/tmp/${uuidv4()}-${id}.json`;
  const saveLocation = fs.createWriteStream(tempFileName);

  try {
    await download.pipeTo(saveLocation);
    console.log(`Document ${id} has been downloaded to ${saveLocation}`);
  } catch (error) {
    console.error(`Failed to download document ${id}`);
    throw error;
  }

  const result = fs.readFileSync(tempFileName, "utf-8");
  console.log(result);
  return result;
};
