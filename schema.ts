import { makeSchema } from "nexus";
import * as allTypes from "./resolvers";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const schema = makeSchema({
  types: [allTypes],
  outputs: {
    schema: __dirname + "/graphql/schema.graphql",
    typegen: __dirname + "/generated/nexus.ts",
  },
  contextType: {
    module: require.resolve("./types"),
    export: "Context",
  },
});
