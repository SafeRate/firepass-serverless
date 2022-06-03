import {
  Client as HederaClient,
  AccountId,
  PrivateKey,
  TokenCreateTransaction,
  TokenAssociateTransaction,
  TransferTransaction,
  AccountBalanceQuery,
  CustomRoyaltyFee,
  CustomFixedFee,
  Hbar,
  TokenSupplyType,
} from "@hashgraph/sdk";
import Decimal from "decimal.js";

let client = null;
let operatorId = null;
let operatorKey = null;

if (process.env.STAGE === "dev") {
  client = HederaClient.forTestnet();
}

if (client) {
  operatorKey = PrivateKey.fromString(process.env.HEDERA_PRIVATE_KEY);
  operatorId = AccountId.fromString(process.env.HEDERA_ACCOUNT_ID);
  client.setOperator(operatorId, operatorKey);
}

export const createToken = async function ({
  name,
  symbol,
  decimalPlaces,
  initialSupply,
}) {
  //     const createTokenTx = await new TokenCreateTransaction()
  //       .setTokenName(name)
  //       .setTokenSymbol(symbol)
  //       .setDecimals(decimalPlaces)
  //       .setInitialSupply(initialSupply)
  //       .setTreasuryAccountId(operatorId)
  //       .execute();
  //   const createReceipt = await createTokenTx.getReceipt(client);
  //   console.log(createReceipt);
  //   const newTokenId = createReceipt.tokenId;
  //   console.log(`new token id: ${newTokenId.toString()}`);
  //   return newTokenId.toString();
};

export const createNFT = async function ({
  name,
  symbol,
  decimalPlaces,
  initialSupply,
  maxSupply,
  treasuryAccountId,
  finite = false,
  royaltyNumerator,
  royaltyDenominator,
  royaltyAccountId,
  fallbackFeeHBAR = 200,
}) {
  let nftCustomFee = null;

  if (royaltyDenominator && royaltyNumerator && fallbackFeeHBAR) {
    nftCustomFee = await new CustomRoyaltyFee()
      .setNumerator(royaltyNumerator)
      .setDenominator(royaltyDenominator)
      .setFeeCollectorAccountId(royaltyAccountId)
      .setFallbackFee(
        new CustomFixedFee().setHbarAmount(new Hbar(fallbackFeeHBAR))
      );
  }

  // let nftCreate = await new TokenCreateTransaction()
  //   .setTokenName(name)
  //   .setTokenSymbol(symbol)
  //   .setDecimals(decimalPlaces)
  //   .setInitialSupply(initialSupply)
  //   .setMaxSupply(maxSupply)
  //   .setTreasuryAccountId(treasuryAccountId)
  //   .setSupplyType(finite ? TokenSupplyType.Finite : TokenSupplyType.Infinite);
  //   .setMaxSupply()
};

export const associateAccountWithToken = async function ({
  accountId,
  accountKey,
  tokenId,
}) {
  const associateTx = await new TokenAssociateTransaction()
    .setAccountId(accountId)
    .setTokenIds([tokenId])
    .freezeWith(client)
    .sign(accountKey);

  const submitAssociateTx = await associateTx.execute(client);
  const associateReceipt = await submitAssociateTx.getReceipt(client);

  console.log("associate tx receipt", associateReceipt);
};

export const transferToken = async function ({
  tokenId,
  fromId,
  toId,
  amount,
}) {
  const transferTx = await new TransferTransaction()
    .addTokenTransfer(tokenId, fromId, new Decimal(amount).times(-1).toNumber())
    .addTokenTransfer(tokenId, toId, amount);

  //   const transferReceipt = await transferTx.getReceipt(client);
  //   console.log("transfer tx receipt: ", transferReceipt);
};

export const getAccountBalance = async function ({ accountId }) {
  const accountBalance = await new AccountBalanceQuery()
    .setAccountId(accountId)
    .execute(client);

  console.log("account balance: ", accountBalance.tokens.toString());

  return accountBalance.tokens;
};
