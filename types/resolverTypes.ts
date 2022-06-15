import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from './general';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  zipcode?: Maybe<Scalars['String']>;
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

export type InstaTouchIdHandshake = {
  __typename?: 'InstaTouchIdHandshake';
  carrier?: Maybe<Scalars['String']>;
  instaTouch: Scalars['String'];
  sessionId: Scalars['String'];
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

export type OtpPasscode = {
  __typename?: 'OtpPasscode';
  sessionId: Scalars['String'];
  transactionKey: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getDocumentById?: Maybe<Scalars['String']>;
  getInstaTouchIdSession?: Maybe<InstaTouchIdHandshake>;
  getOneView?: Maybe<Scalars['String']>;
  getPlaidLinkToken?: Maybe<Scalars['String']>;
  getTouchIdOtpPasscode?: Maybe<OtpPasscode>;
  getUserData?: Maybe<Scalars['String']>;
  helloWorld?: Maybe<Scalars['String']>;
  sandbox?: Maybe<Scalars['Boolean']>;
};


export type QueryGetDocumentByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGetPlaidLinkTokenArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGetTouchIdOtpPasscodeArgs = {
  mobileNumber: Scalars['String'];
  sessionId: Scalars['String'];
};


export type QuerySandboxArgs = {
  params?: InputMaybe<Scalars['JSON']>;
  sql?: InputMaybe<Scalars['String']>;
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
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  InstaTouchIdHandshake: ResolverTypeWrapper<InstaTouchIdHandshake>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Mutation: ResolverTypeWrapper<{}>;
  OtpPasscode: ResolverTypeWrapper<OtpPasscode>;
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
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  InstaTouchIdHandshake: InstaTouchIdHandshake;
  JSON: Scalars['JSON'];
  Mutation: {};
  OtpPasscode: OtpPasscode;
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
  zipcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  createParcelUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deleteParcelUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  helloWorldMutate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type OtpPasscodeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OtpPasscode'] = ResolversParentTypes['OtpPasscode']> = ResolversObject<{
  sessionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transactionKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getDocumentById?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<QueryGetDocumentByIdArgs>>;
  getInstaTouchIdSession?: Resolver<Maybe<ResolversTypes['InstaTouchIdHandshake']>, ParentType, ContextType>;
  getOneView?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  getPlaidLinkToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<QueryGetPlaidLinkTokenArgs>>;
  getTouchIdOtpPasscode?: Resolver<Maybe<ResolversTypes['OtpPasscode']>, ParentType, ContextType, RequireFields<QueryGetTouchIdOtpPasscodeArgs, 'mobileNumber' | 'sessionId'>>;
  getUserData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  helloWorld?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sandbox?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<QuerySandboxArgs>>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  BankAccount?: BankAccountResolvers<ContextType>;
  Consumer?: ConsumerResolvers<ContextType>;
  ConsumerAddress?: ConsumerAddressResolvers<ContextType>;
  ConsumerContact?: ConsumerContactResolvers<ContextType>;
  ConsumerIdentification?: ConsumerIdentificationResolvers<ContextType>;
  ConsumerName?: ConsumerNameResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  InstaTouchIdHandshake?: InstaTouchIdHandshakeResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  OtpPasscode?: OtpPasscodeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

