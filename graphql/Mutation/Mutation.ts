import { addBankAccountsViaPlaid } from "./addBankAccountsViaPlaid";
import { completeInstaTouchIdMobile } from "./completeInstaTouchIdMobile";
import { completeInstaTouchIdOtp } from "./completeInstaTouchIdOtp";
import { createDatabase } from "./createDatabase";
import { createParcelUser } from "./createParcelUser";
import { deleteParcelUser } from "./deleteParcelUser";
import { helloWorldMutate } from "./helloWorldMutate";

export const Mutation = {
  addBankAccountsViaPlaid,
  completeInstaTouchIdMobile,
  completeInstaTouchIdOtp,
  createDatabase,
  createParcelUser,
  deleteParcelUser,
  helloWorldMutate,
};
