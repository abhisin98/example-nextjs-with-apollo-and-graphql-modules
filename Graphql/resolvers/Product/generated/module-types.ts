import * as Types from "../../../generated/schema-type";
import * as gm from "graphql-modules";
export namespace ProductModule {
  interface DefinedFields {
    Product: 'name';
    Query: 'getProduct';
    Mutation: 'createProduct';
  };
  
  export type Product = Pick<Types.Product, DefinedFields['Product']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  
  export type ProductResolvers = Pick<Types.ProductResolvers, DefinedFields['Product'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  
  export interface Resolvers {
    Product?: ProductResolvers;
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Product?: {
      '*'?: gm.Middleware[];
      name?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      getProduct?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      createProduct?: gm.Middleware[];
    };
  };
}