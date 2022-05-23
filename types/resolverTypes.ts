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
};

export type InstaTouchIdHandshake = {
  __typename?: 'InstaTouchIdHandshake';
  carrier?: Maybe<Scalars['String']>;
  instaTouch: Scalars['String'];
  sessionId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  completeInstaTouchIdMobile?: Maybe<Scalars['Boolean']>;
  completeInstaTouchIdOtp?: Maybe<Scalars['Boolean']>;
  helloWorldMutate?: Maybe<Scalars['String']>;
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
  getTouchIdOtpPasscode?: Maybe<OtpPasscode>;
  helloWorld?: Maybe<Scalars['String']>;
};


export type QueryGetDocumentByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGetTouchIdOtpPasscodeArgs = {
  mobileNumber: Scalars['String'];
  sessionId: Scalars['String'];
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  InstaTouchIdHandshake: ResolverTypeWrapper<InstaTouchIdHandshake>;
  Mutation: ResolverTypeWrapper<{}>;
  OtpPasscode: ResolverTypeWrapper<OtpPasscode>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  ID: Scalars['ID'];
  InstaTouchIdHandshake: InstaTouchIdHandshake;
  Mutation: {};
  OtpPasscode: OtpPasscode;
  Query: {};
  String: Scalars['String'];
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

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  completeInstaTouchIdMobile?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationCompleteInstaTouchIdMobileArgs, 'SSN' | 'sessionId' | 'zipCode'>>;
  completeInstaTouchIdOtp?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationCompleteInstaTouchIdOtpArgs, 'SSN' | 'mobileNumber' | 'passcode' | 'sessionId' | 'transactionKey' | 'zipCode'>>;
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
  getTouchIdOtpPasscode?: Resolver<Maybe<ResolversTypes['OtpPasscode']>, ParentType, ContextType, RequireFields<QueryGetTouchIdOtpPasscodeArgs, 'mobileNumber' | 'sessionId'>>;
  helloWorld?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  InstaTouchIdHandshake?: InstaTouchIdHandshakeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  OtpPasscode?: OtpPasscodeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

