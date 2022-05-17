import { api } from "@serverless/cloud";
import { ApolloServer } from "apollo-server-express";
import { myTypeDefs } from "./typeDefs";
import { resolvers } from "./resolvers/resolvers";
import { env } from "./utils/env";
import { getParcelId } from "./utils/parcel";

class ServerlessCloudApollo extends ApolloServer {
  serverlessFramework() {
    return true;
  }

  async ensureStarted() {
    await super.ensureStarted();
  }
}

(async () => {
  console.log("Apollo running!");

  // Connect to Parcel
  console.log("Getting Parcel ID");
  console.log(await getParcelId());

  //

  try {
    const server = new ServerlessCloudApollo({
      typeDefs: myTypeDefs,
      resolvers,
      csrfPrevention: true,
    });
    await server.ensureStarted();

    api.use(server.getMiddleware({ path: "/graphql" }));
  } catch (error) {
    throw new Error(error);
  }
})();
