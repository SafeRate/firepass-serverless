import { mutationField } from "nexus";

export const createOneHelloWorld = mutationField("createOneHelloWorld", {
  type: "HelloWorld",
  async resolve(_parent, _args) {
    return { helloWorld: "Hello world!!! - Mutation" };
  },
});
