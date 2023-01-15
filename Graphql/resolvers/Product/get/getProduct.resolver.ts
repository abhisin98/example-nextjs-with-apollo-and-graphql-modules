import { ProductModule } from "../generated/module-types";

export const getProductResolver: ProductModule.Resolvers = {
  Query: {
    getProduct(root, args, ctx, info) {
      return { name: args.name };
    },
  },
};
