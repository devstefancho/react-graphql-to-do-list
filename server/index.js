import express from "express";
import { ApolloServer } from 'apollo-server-express';
import { readFile } from 'fs/promises';
import { PrismaClient } from "@prisma/client";
import { resolvers } from "./resolvers.js";

const prisma = new PrismaClient()
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

app.post('/create', async (req, res) => {
  const init = await prisma.post.create({
    data: {
      title: 'cleaning room',
      content: 'clean the room everyday'
    }
  })
  res.json(init);
})

app.listen(PORT, () => {
  console.log(PORT, ' is running')
})