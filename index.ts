import { api } from "@serverless/cloud";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";
import { createContext } from "./graphql/createContext";

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
      context: ({ req }) => {
        console.log('req.get("Authorization")', req.get("Authorization"));
        return { ...createContext(), ip: req.ip, userId: "0000" };
      },
      formatError: (error) => {
        console.log("Error calling GraphQL query or mutation");
        console.log(JSON.stringify(error, null, 4));

        return new Error("Internal server error");
      },
    });

    await server.ensureStarted();
    api.use(
      server.getMiddleware({
        path: "/graphql",
        cors: { credentials: true, origin: "http://localhost:3000" },
      })
    );
  } catch (error) {
    throw new Error(error);
  }
})();
