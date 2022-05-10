import { api } from "@serverless/cloud";

test("should return hello world", async () => {
  const { body } = await api.get("/graphql").invoke();

  expect(body).toHaveProperty("users");
  expect(body.users.length).toBeGreaterThan(0);
});
