import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import { createProxyMiddleware } from 'http-proxy-middleware';
import connectToDatabase from "./database/connect_to_db.js";
import { typeDefs, resolvers } from "./GraphQL/Index.js";

const startServer = async () => {
  try {
    const app = express();
    const httpServer = http.createServer(app);

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await connectToDatabase();
    await server.start();

    // Proxy setup
    app.use('/proxy', createProxyMiddleware({
      target: 'http://localhost:8080/graphql', // Replace with your target server
      changeOrigin: true,
      pathRewrite: {
        '^/proxy': '', // Remove /proxy from the request path
      },
    }));

    app.use(
      "/graphql",
      cors({
        origin: "http://localhost:3000",
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
      }),
      express.json(),
      expressMiddleware(server, {
        context: ({ req, res }) => {
          const token = req.headers.authorization || "";
          return { token, res, req };
        },
      })
    );

    // Modified server startup
    await new Promise((resolve) => httpServer.listen({ port: 8080 }, resolve));
    console.log(`🚀 Server ready at http://localhost:8080/`);
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
