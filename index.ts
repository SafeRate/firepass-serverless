import { api } from "@serverless/cloud";
import { ApolloServer } from "apollo-server-express";
import { myTypeDefs } from "./typeDefs";
import { resolvers } from "./resolvers/resolvers";

class ServerlessCloudApollo extends ApolloServer {
  serverlessFramework() {
    return true;
  }

  async ensureStarted() {
    await super.ensureStarted();
  }
}

(async () => {
  console.log("Hello test2!");

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
