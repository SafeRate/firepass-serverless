import { queryField } from "nexus";

export const getHelloWorld = queryField("getHelloWorld", {
  type: "HelloWorld",
  async resolve(_parent, _args) {
    return { helloWorld: "Hello world!" };
  },
});
