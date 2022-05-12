import { api } from "@serverless/cloud";

test("should return hello world", async () => {
  // const test = await api.get("/graphql").invoke();

  expect("Hello world").toBe("Hello world");
});
