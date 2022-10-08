import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from './general';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  JSON: any;
};

export type BankAccount = {
  __typename?: 'BankAccount';
  balance: Scalars['Float'];
  id?: Maybe<Scalars['ID']>;
  mask?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Consumer = {
  __typename?: 'Consumer';
  contact?: Maybe<ConsumerContact>;
  currentAddresses?: Maybe<Array<Maybe<ConsumerAddress>>>;
  id?: Maybe<Scalars['ID']>;
  identification?: Maybe<ConsumerIdentification>;
  name?: Maybe<ConsumerName>;
  previousAddresses?: Maybe<Array<Maybe<ConsumerAddress>>>;
};

export type ConsumerAddress = {
  __typename?: 'ConsumerAddress';
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type ConsumerContact = {
  __typename?: 'ConsumerContact';
  emailAddress?: Maybe<Scalars['String']>;
  homePhone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
};

export type ConsumerIdentification = {
  __typename?: 'ConsumerIdentification';
  dob?: Maybe<Scalars['String']>;
  ssn?: Maybe<Scalars['String']>;
};

export type ConsumerName = {
  __typename?: 'ConsumerName';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type CreditReportQueriesResult = {
  __typename?: 'CreditReportQueriesResult';
  id: Scalars['ID'];
  queryResults?: Maybe<Array<Maybe<CreditReportQueryResult>>>;
};

export type CreditReportQueryResult = CreditReportQueryResultBoolean | CreditReportQueryResultFloat | CreditReportQueryResultInt | CreditReportQueryResultString;

export type CreditReportQueryResultBoolean = {
  __typename?: 'CreditReportQueryResultBoolean';
  query: Scalars['String'];
  result: Scalars['String'];
};

export type CreditReportQueryResultFloat = {
  __typename?: 'CreditReportQueryResultFloat';
  query: Scalars['String'];
  result: Scalars['Float'];
};

export type CreditReportQueryResultInt = {
  __typename?: 'CreditReportQueryResultInt';
  query: Scalars['String'];
  result: Scalars['Int'];
};

export type CreditReportQueryResultString = {
  __typename?: 'CreditReportQueryResultString';
  query: Scalars['String'];
  result: Scalars['String'];
};

export type FirePassQuoteRequest = {
  auto?: InputMaybe<Scalars['Boolean']>;
  autoIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  creditId?: InputMaybe<Scalars['String']>;
  flood?: InputMaybe<Scalars['Boolean']>;
  homeowners?: InputMaybe<Scalars['Boolean']>;
  mortgage?: InputMaybe<Scalars['Boolean']>;
  mortgageOptions?: InputMaybe<MortgageQuoteRequest>;
  propertyId?: InputMaybe<Scalars['String']>;
};

export type InstaTouchIdHandshake = {
  __typename?: 'InstaTouchIdHandshake';
  carrier?: Maybe<Scalars['String']>;
  instaTouch: Scalars['String'];
  sessionId: Scalars['String'];
};

export type MortgageQuoteRequest = {
  annualIncome?: InputMaybe<Scalars['Int']>;
  cashout?: InputMaybe<Scalars['Boolean']>;
  combinedLoanToValue?: InputMaybe<Scalars['Float']>;
  condo?: InputMaybe<Scalars['Boolean']>;
  creditScore?: InputMaybe<Scalars['Int']>;
  debtToIncome?: InputMaybe<Scalars['Float']>;
  firstTimeHomebuyer?: InputMaybe<Scalars['Boolean']>;
  investmentProperty?: InputMaybe<Scalars['Boolean']>;
  loanAmount?: InputMaybe<Scalars['Float']>;
  loanTerm?: InputMaybe<Scalars['Int']>;
  loanToValue?: InputMaybe<Scalars['Float']>;
  lock?: InputMaybe<Scalars['Int']>;
  manufacturedHome?: InputMaybe<Scalars['Boolean']>;
  monthlyDebt?: InputMaybe<Scalars['Float']>;
  points?: InputMaybe<Scalars['Int']>;
  primaryResidence?: InputMaybe<Scalars['Boolean']>;
  propertyValue?: InputMaybe<Scalars['Float']>;
  purchase?: InputMaybe<Scalars['Boolean']>;
  rateTermOnly?: InputMaybe<Scalars['Boolean']>;
  refinance?: InputMaybe<Scalars['Boolean']>;
  safeRateSavings?: InputMaybe<Scalars['Float']>;
  secondaryResidence?: InputMaybe<Scalars['Boolean']>;
  selfEmployed?: InputMaybe<Scalars['Boolean']>;
  singleFamilyHome?: InputMaybe<Scalars['Boolean']>;
  state?: InputMaybe<Scalars['String']>;
  subordinateAmount?: InputMaybe<Scalars['Float']>;
  subordinateLoanTerm?: InputMaybe<Scalars['Float']>;
  subordinatedFinancing?: InputMaybe<Scalars['Boolean']>;
  townhome?: InputMaybe<Scalars['Boolean']>;
  units?: InputMaybe<Scalars['Int']>;
  vaFirst?: InputMaybe<Scalars['Boolean']>;
  veteran?: InputMaybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBankAccountsViaPlaid?: Maybe<Array<Maybe<BankAccount>>>;
  completeInstaTouchIdMobile?: Maybe<Consumer>;
  completeInstaTouchIdOtp?: Maybe<Consumer>;
  createDatabase?: Maybe<Scalars['Boolean']>;
  createParcelUser?: Maybe<Scalars['Boolean']>;
  deleteParcelUser?: Maybe<Scalars['Boolean']>;
  helloWorldMutate?: Maybe<Scalars['String']>;
};


export type MutationAddBankAccountsViaPlaidArgs = {
  plaidId?: InputMaybe<Scalars['ID']>;
  plaidObj?: InputMaybe<Scalars['JSON']>;
};


export type MutationCompleteInstaTouchIdMobileArgs = {
  SSN: Scalars['String'];
  sessionId: Scalars['String'];
  zipCode: Scalars['String'];
};


export type MutationCompleteInstaTouchIdOtpArgs = {
  SSN: Scalars['String'];
  mobileNumber: Scalars['String'];
  passcode: Scalars['String'];
  sessionId: Scalars['String'];
  transactionKey: Scalars['String'];
  zipCode: Scalars['String'];
};


export type MutationCreateDatabaseArgs = {
  equifax: Scalars['Boolean'];
  plaid: Scalars['Boolean'];
  stripe: Scalars['Boolean'];
  users: Scalars['Boolean'];
};


export type MutationCreateParcelUserArgs = {
  email: Scalars['String'];
  id: Scalars['String'];
};


export type MutationDeleteParcelUserArgs = {
  id: Scalars['String'];
};

export type OtpPasscode = {
  __typename?: 'OtpPasscode';
  sessionId: Scalars['String'];
  transactionKey: Scalars['String'];
};

export type PropertyInput = {
  address?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getCreditReport?: Maybe<Scalars['String']>;
  getDocumentById?: Maybe<Scalars['String']>;
  getFirePassQuote?: Maybe<Scalars['String']>;
  getInstaTouchIdSession?: Maybe<InstaTouchIdHandshake>;
  getOneView?: Maybe<Scalars['String']>;
  getPlaidLinkToken?: Maybe<Scalars['String']>;
  getPropertyInformation?: Maybe<Scalars['String']>;
  getTouchIdOtpPasscode?: Maybe<OtpPasscode>;
  getUserData?: Maybe<Scalars['String']>;
  helloWorld?: Maybe<Scalars['String']>;
  queryCreditReport?: Maybe<Scalars['JSON']>;
  queryEstated?: Maybe<Scalars['JSON']>;
  sandbox?: Maybe<Scalars['Boolean']>;
};


export type QueryGetDocumentByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGetFirePassQuoteArgs = {
  quoteRequest?: InputMaybe<FirePassQuoteRequest>;
};


export type QueryGetPlaidLinkTokenArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGetPropertyInformationArgs = {
  fullAddress: Scalars['String'];
};


export type QueryGetTouchIdOtpPasscodeArgs = {
  mobileNumber: Scalars['String'];
  sessionId: Scalars['String'];
};


export type QueryQueryCreditReportArgs = {
  id: Scalars['ID'];
  queries?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryQueryEstatedArgs = {
  id: Scalars['ID'];
  queries?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySandboxArgs = {
  params?: InputMaybe<Scalars['JSON']>;
  sql: Scalars['String'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BankAccount: ResolverTypeWrapper<BankAccount>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Consumer: ResolverTypeWrapper<Consumer>;
  ConsumerAddress: ResolverTypeWrapper<ConsumerAddress>;
  ConsumerContact: ResolverTypeWrapper<ConsumerContact>;
  ConsumerIdentification: ResolverTypeWrapper<ConsumerIdentification>;
  ConsumerName: ResolverTypeWrapper<ConsumerName>;
  CreditReportQueriesResult: ResolverTypeWrapper<Omit<CreditReportQueriesResult, 'queryResults'> & { queryResults?: Maybe<Array<Maybe<ResolversTypes['CreditReportQueryResult']>>> }>;
  CreditReportQueryResult: ResolversTypes['CreditReportQueryResultBoolean'] | ResolversTypes['CreditReportQueryResultFloat'] | ResolversTypes['CreditReportQueryResultInt'] | ResolversTypes['CreditReportQueryResultString'];
  CreditReportQueryResultBoolean: ResolverTypeWrapper<CreditReportQueryResultBoolean>;
  CreditReportQueryResultFloat: ResolverTypeWrapper<CreditReportQueryResultFloat>;
  CreditReportQueryResultInt: ResolverTypeWrapper<CreditReportQueryResultInt>;
  CreditReportQueryResultString: ResolverTypeWrapper<CreditReportQueryResultString>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  FirePassQuoteRequest: FirePassQuoteRequest;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  InstaTouchIdHandshake: ResolverTypeWrapper<InstaTouchIdHandshake>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  MortgageQuoteRequest: MortgageQuoteRequest;
  Mutation: ResolverTypeWrapper<{}>;
  OtpPasscode: ResolverTypeWrapper<OtpPasscode>;
  PropertyInput: PropertyInput;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BankAccount: BankAccount;
  Boolean: Scalars['Boolean'];
  Consumer: Consumer;
  ConsumerAddress: ConsumerAddress;
  ConsumerContact: ConsumerContact;
  ConsumerIdentification: ConsumerIdentification;
  ConsumerName: ConsumerName;
  CreditReportQueriesResult: Omit<CreditReportQueriesResult, 'queryResults'> & { queryResults?: Maybe<Array<Maybe<ResolversParentTypes['CreditReportQueryResult']>>> };
  CreditReportQueryResult: ResolversParentTypes['CreditReportQueryResultBoolean'] | ResolversParentTypes['CreditReportQueryResultFloat'] | ResolversParentTypes['CreditReportQueryResultInt'] | ResolversParentTypes['CreditReportQueryResultString'];
  CreditReportQueryResultBoolean: CreditReportQueryResultBoolean;
  CreditReportQueryResultFloat: CreditReportQueryResultFloat;
  CreditReportQueryResultInt: CreditReportQueryResultInt;
  CreditReportQueryResultString: CreditReportQueryResultString;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  FirePassQuoteRequest: FirePassQuoteRequest;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  InstaTouchIdHandshake: InstaTouchIdHandshake;
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  MortgageQuoteRequest: MortgageQuoteRequest;
  Mutation: {};
  OtpPasscode: OtpPasscode;
  PropertyInput: PropertyInput;
  Query: {};
  String: Scalars['String'];
}>;

export type BankAccountResolvers<ContextType = Context, ParentType extends ResolversParentTypes['BankAccount'] = ResolversParentTypes['BankAccount']> = ResolversObject<{
  balance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  mask?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConsumerResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Consumer'] = ResolversParentTypes['Consumer']> = ResolversObject<{
  contact?: Resolver<Maybe<ResolversTypes['ConsumerContact']>, ParentType, ContextType>;
  currentAddresses?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConsumerAddress']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  identification?: Resolver<Maybe<ResolversTypes['ConsumerIdentification']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['ConsumerName']>, ParentType, ContextType>;
  previousAddresses?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConsumerAddress']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConsumerAddressResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ConsumerAddress'] = ResolversParentTypes['ConsumerAddress']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streetAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConsumerContactResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ConsumerContact'] = ResolversParentTypes['ConsumerContact']> = ResolversObject<{
  emailAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  homePhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mobile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConsumerIdentificationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ConsumerIdentification'] = ResolversParentTypes['ConsumerIdentification']> = ResolversObject<{
  dob?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ssn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConsumerNameResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ConsumerName'] = ResolversParentTypes['ConsumerName']> = ResolversObject<{
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreditReportQueriesResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreditReportQueriesResult'] = ResolversParentTypes['CreditReportQueriesResult']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  queryResults?: Resolver<Maybe<Array<Maybe<ResolversTypes['CreditReportQueryResult']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreditReportQueryResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreditReportQueryResult'] = ResolversParentTypes['CreditReportQueryResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CreditReportQueryResultBoolean' | 'CreditReportQueryResultFloat' | 'CreditReportQueryResultInt' | 'CreditReportQueryResultString', ParentType, ContextType>;
}>;

export type CreditReportQueryResultBooleanResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreditReportQueryResultBoolean'] = ResolversParentTypes['CreditReportQueryResultBoolean']> = ResolversObject<{
  query?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  result?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreditReportQueryResultFloatResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreditReportQueryResultFloat'] = ResolversParentTypes['CreditReportQueryResultFloat']> = ResolversObject<{
  query?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  result?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreditReportQueryResultIntResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreditReportQueryResultInt'] = ResolversParentTypes['CreditReportQueryResultInt']> = ResolversObject<{
  query?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  result?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreditReportQueryResultStringResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreditReportQueryResultString'] = ResolversParentTypes['CreditReportQueryResultString']> = ResolversObject<{
  query?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  result?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type InstaTouchIdHandshakeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InstaTouchIdHandshake'] = ResolversParentTypes['InstaTouchIdHandshake']> = ResolversObject<{
  carrier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instaTouch?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sessionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addBankAccountsViaPlaid?: Resolver<Maybe<Array<Maybe<ResolversTypes['BankAccount']>>>, ParentType, ContextType, Partial<MutationAddBankAccountsViaPlaidArgs>>;
  completeInstaTouchIdMobile?: Resolver<Maybe<ResolversTypes['Consumer']>, ParentType, ContextType, RequireFields<MutationCompleteInstaTouchIdMobileArgs, 'SSN' | 'sessionId' | 'zipCode'>>;
  completeInstaTouchIdOtp?: Resolver<Maybe<ResolversTypes['Consumer']>, ParentType, ContextType, RequireFields<MutationCompleteInstaTouchIdOtpArgs, 'SSN' | 'mobileNumber' | 'passcode' | 'sessionId' | 'transactionKey' | 'zipCode'>>;
  createDatabase?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationCreateDatabaseArgs, 'equifax' | 'plaid' | 'stripe' | 'users'>>;
  createParcelUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationCreateParcelUserArgs, 'email' | 'id'>>;
  deleteParcelUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteParcelUserArgs, 'id'>>;
  helloWorldMutate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type OtpPasscodeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OtpPasscode'] = ResolversParentTypes['OtpPasscode']> = ResolversObject<{
  sessionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transactionKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getCreditReport?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  getDocumentById?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<QueryGetDocumentByIdArgs>>;
  getFirePassQuote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<QueryGetFirePassQuoteArgs>>;
  getInstaTouchIdSession?: Resolver<Maybe<ResolversTypes['InstaTouchIdHandshake']>, ParentType, ContextType>;
  getOneView?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  getPlaidLinkToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<QueryGetPlaidLinkTokenArgs>>;
  getPropertyInformation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryGetPropertyInformationArgs, 'fullAddress'>>;
  getTouchIdOtpPasscode?: Resolver<Maybe<ResolversTypes['OtpPasscode']>, ParentType, ContextType, RequireFields<QueryGetTouchIdOtpPasscodeArgs, 'mobileNumber' | 'sessionId'>>;
  getUserData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  helloWorld?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  queryCreditReport?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QueryQueryCreditReportArgs, 'id'>>;
  queryEstated?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QueryQueryEstatedArgs, 'id'>>;
  sandbox?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<QuerySandboxArgs, 'sql'>>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  BankAccount?: BankAccountResolvers<ContextType>;
  Consumer?: ConsumerResolvers<ContextType>;
  ConsumerAddress?: ConsumerAddressResolvers<ContextType>;
  ConsumerContact?: ConsumerContactResolvers<ContextType>;
  ConsumerIdentification?: ConsumerIdentificationResolvers<ContextType>;
  ConsumerName?: ConsumerNameResolvers<ContextType>;
  CreditReportQueriesResult?: CreditReportQueriesResultResolvers<ContextType>;
  CreditReportQueryResult?: CreditReportQueryResultResolvers<ContextType>;
  CreditReportQueryResultBoolean?: CreditReportQueryResultBooleanResolvers<ContextType>;
  CreditReportQueryResultFloat?: CreditReportQueryResultFloatResolvers<ContextType>;
  CreditReportQueryResultInt?: CreditReportQueryResultIntResolvers<ContextType>;
  CreditReportQueryResultString?: CreditReportQueryResultStringResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  InstaTouchIdHandshake?: InstaTouchIdHandshakeResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  OtpPasscode?: OtpPasscodeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

