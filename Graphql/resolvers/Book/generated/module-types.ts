import * as Types from "../../../generated/schema-type";
import * as gm from "graphql-modules";
export namespace BookModule {
  interface DefinedFields {
    Book: 'name';
    Query: 'getBook';
    Mutation: 'createBook';
    Subscription: 'createBookSub';
  };
  
  export type Book = Pick<Types.Book, DefinedFields['Book']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type Subscription = Pick<Types.Subscription, DefinedFields['Subscription']>;
  
  export type BookResolvers = Pick<Types.BookResolvers, DefinedFields['Book'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type SubscriptionResolvers = Pick<Types.SubscriptionResolvers, DefinedFields['Subscription']>;
  
  export interface Resolvers {
    Book?: BookResolvers;
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
    Subscription?: SubscriptionResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Book?: {
      '*'?: gm.Middleware[];
      name?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      getBook?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      createBook?: gm.Middleware[];
    };
    Subscription?: {
      '*'?: gm.Middleware[];
      createBookSub?: gm.Middleware[];
    };
  };
}