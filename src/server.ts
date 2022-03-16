import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { SuperHeroResolver } from "./graphql/resolvers";

async function startServer() {
  const schema = await buildSchema({
    resolvers: [SuperHeroResolver],
    emitSchemaFile: true,
  });

  const server = new ApolloServer({ schema });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}

startServer();
