import { BankAccount } from "./resolverTypes";

export type BankAccountFull = {
  accountAccessToken?: string;
  accountAccessCustomerId?: string;
  bankAccount?: BankAccount;
  created?: string;
  institution?: string;
  institutionId?: string;
  paymentAccessToken?: string;
  paymentCustomerId?: string;
  updated?: string;
};
