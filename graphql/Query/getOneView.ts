import { Context } from "../createContext";

export const getOneView = async (
  parent: undefined,
  args: undefined,
  context: Context
) => {
  return await context.equifaxClient.getOneView();
};
