import { api } from "@serverless/cloud";
import { ApolloServer } from "apollo-server-express";
import { myTypeDefs } from "./typeDefs";
import { resolvers } from "./resolvers/resolvers";
import { env } from "./utils/env";
import { createContext } from "./resolvers/createContext";

class ServerlessCloudApollo extends ApolloServer {
  serverlessFramework() {
    return true;
  }

  async ensureStarted() {
    await super.ensureStarted();
  }
}

(async () => {
  // dif
  // console.log("Apollo running!");
  // console.log("Connected to Parcel?");
  // console.log(`Parcel Id ${await getParcelId()}`);
  // // Upload and retrieve a document from parcel
  // // console.log("Uploading a document to parcel");
  // // const document = await uploadDocument();
  // // console.log(document);
  // console.log("reading a document from parcel");
  // const readDocument = await getDocumentById("DDkkv55byaCaDZu5yr7aWaU");
  // console.log(readDocument);
  try {
    const server = new ServerlessCloudApollo({
      typeDefs: myTypeDefs,
      resolvers,
      csrfPrevention: true,
      context: createContext(),
    });
    await server.ensureStarted();
    api.use(server.getMiddleware({ path: "/graphql" }));
  } catch (error) {
    throw new Error(error);
  }
})();
