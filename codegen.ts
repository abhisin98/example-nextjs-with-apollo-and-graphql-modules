import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./Graphql/resolvers/**/*.graphql",
  generates: {
    "./Graphql/resolvers/": {
      preset: "graphql-modules",
      presetConfig: {
        baseTypesPath: "../generated/schema-type.ts",
        filename: "generated/module-types.ts",
        useGraphQLModules: true, // set false for you are not use graphql-modules
      },
      config: {
        contextType: "GraphQLModules.Context", // Your extended context type!
        useIndexSignature: true,
      },
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
