import { objectType } from "nexus";

export const HelloWorldObjectType = objectType({
  name: "HelloWorld",
  description: "HelloWorld description",
  definition(t) {
    t.string("helloWorld");
  },
});
