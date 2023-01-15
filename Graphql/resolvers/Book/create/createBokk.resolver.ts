import { PubSub } from "graphql-subscriptions";
import { BookModule } from "../generated/module-types";

export const createBookResolver: BookModule.Resolvers = {
  Subscription: {
    createBookSub: {
      subscribe(root, args, ctx, info) {
        return ctx.injector.get(PubSub).asyncIterator(["CREATE_BOOK"]);
      },
    },
  },
  Mutation: {
    createBook(oot, args, ctx, info) {
      ctx.injector
        .get(PubSub)
        .publish("CREATE_BOOK", { createBookSub: { name: args.name } });
      return { name: args.name };
    },
  },
};
