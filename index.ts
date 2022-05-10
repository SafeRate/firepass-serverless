import { api } from "@serverless/cloud";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./schema";

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
    const server = new ServerlessCloudApollo({ schema });
    await server.ensureStarted();

    api.use(server.getMiddleware({ path: "/graphql" }));
  } catch (error) {
    throw new Error(error);
  }
})();
