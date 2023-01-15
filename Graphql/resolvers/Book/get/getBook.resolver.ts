import { BookModule } from "../generated/module-types";

export const getBookResolver: BookModule.Resolvers = {
  Query: {
    getBook(root, args, ctx, info) {
      return { name: args.name };
    },
  },
};
