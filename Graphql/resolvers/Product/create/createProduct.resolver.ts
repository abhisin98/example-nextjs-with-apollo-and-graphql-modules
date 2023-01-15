import { ProductModule } from "../generated/module-types";

export const createProductResolver: ProductModule.Resolvers = {
  Mutation: {
    createProduct(root, args, ctx, info) {
      return { name: args.name };
    },
  },
};
