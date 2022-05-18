import { Context } from "../createContext";

type GetDocumentByIdArgs = {
  id: string;
};

export const getDocumentById = async (
  parent: undefined,
  args: GetDocumentByIdArgs,
  context: Context
) => {
  return await context.parcelClient.getDocumentById(args.id);
};
