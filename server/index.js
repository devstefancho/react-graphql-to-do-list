import express from "express";
import { ApolloServer } from 'apollo-server-express';
import { readFile } from 'fs/promises';
import { resolvers } from "./resolvers.js";

const PORT = 9000;
const app = express();

const typeDefs = await readFile('./schema.graphql', 'utf-8')
const server = new ApolloServer({
  typeDefs,
  resolvers
})

await server.start();
server.applyMiddleware({
  app,
  path: '/graphql'
})

app.listen(PORT, () => {
  console.log(PORT, ' is running')
})