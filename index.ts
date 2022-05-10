import { api } from "@serverless/cloud";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./typeDefs";
import { resolvers } from "./resolvers";

class ServerlessCloudApollo extends ApolloServer {
  serverlessFramework() {
    return true;
  }

  async ensureStarted() {
    await super.ensureStarted();
  }
}

(async () => {
  try {
    const server = new ServerlessCloudApollo({
      typeDefs,
      resolvers,
      csrfPrevention: true,
    });
    await server.ensureStarted();

    api.use(server.getMiddleware({ path: "/graphql" }));
  } catch (error) {
    throw new Error(error);
  }
})();
