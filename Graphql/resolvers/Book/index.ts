import path from "path";
import { createModule } from "graphql-modules";
import { loadFilesSync } from "@graphql-tools/load-files";

import { createBookResolver } from "./create/createBokk.resolver";
import { getBookResolver } from "./get/getBook.resolver";

export const bookModule = createModule({
  id: "book-module",
  dirname: __dirname,
  typeDefs: loadFilesSync(
    path.join(process.cwd(), "Graphql/resolvers/Book/**/"),
    {
      extensions: ["graphql", "gql"],
      ignoreIndex: true,
      recursive: true,
    }
  ),
  resolvers: [getBookResolver, createBookResolver],
});
