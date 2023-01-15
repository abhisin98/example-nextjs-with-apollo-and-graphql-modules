import path from "path";
import { createModule } from "graphql-modules";
import { loadFilesSync } from "@graphql-tools/load-files";

import { createProductResolver } from "./create/createProduct.resolver";
import { getProductResolver } from "./get/getProduct.resolver";

export const productModule = createModule({
  id: "product-module",
  dirname: __dirname,
  typeDefs: loadFilesSync(
    path.join(process.cwd(), "Graphql/resolvers/Product/**/"),
    {
      extensions: ["graphql", "gql"],
      ignoreIndex: true,
      recursive: true,
    }
  ),
  resolvers: [createProductResolver, getProductResolver],
});
