import { createApplication } from "graphql-modules";
import { PubSub } from "graphql-subscriptions";
import { bookModule } from "./resolvers/Book";
import { productModule } from "./resolvers/Product";

// This is your application, it contains your GraphQL schema and the implementation of it.
export const application = createApplication({
  modules: [bookModule, productModule],
  providers: [
    {
      provide: PubSub,
      useValue: new PubSub(),
    },
  ],
});

// This is your actual GraphQL schema
export const schema = application.schema;
