import "colors";
import type { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { schema, application } from "../../Graphql";

const executor = application.createExecution();
const subscribe = application.createSubscription();

let serverCleanup: any = null;

const server = new ApolloServer({
  schema: application.createSchemaForApollo(),
  plugins: [
    // Proper shutdown for the WebSocket server.
    {
      async serverWillStart() {
        return {
          async drainServer() {
            console.log("WebSocket - ".gray.bold, "Socket is disposing");
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

const handler = async (req: NextApiRequest, res: any) => {
  //* fixing hot reload
  const oldServer = res.socket.server.apolloServer;
  if (oldServer && oldServer !== server) {
    console.warn("WebSocket - ".gray.bold, "Fixing server hot reload");
    oldServer.stop();
    delete res.socket.server.apolloServer;
  }
  if (!res.socket.server.apolloServer) {
    console.log("WebSocket - ".gray.bold, "Socket is initializing");
    res.socket.server.apolloServer = server;

    /* eslint-disable react-hooks/roules-of-hooks */
    const wsServer = new WebSocketServer({
      server: res.socket.server,
      path: "/api/graphql",
    });

    serverCleanup = useServer(
      {
        schema: schema,
        execute: executor,
        subscribe: subscribe,
      },
      wsServer
    );
  }
  return { req, res, user: null };
};
export default startServerAndCreateNextHandler(server, {
  context: handler,
});
