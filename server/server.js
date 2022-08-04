const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
require('dotenv').config();

const { typeDefs, resolvers } = require('./schemas');
// const { authMiddleware } = require('./utils/auth');

const db = require('./config/connection');

const PORT = process.env.PORT || 4000;
const app = express();
// Congigring dotenv to use my key for the NY times search form


const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: process.env.NODE_ENV == 'production',
  // context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}


app.get('*', (req, res) => {
  if (req) {
    console.log("A request has been sent");
  }
  if (res) {
    console.log("A response has been generated");
  }
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// db.objectives.find().sort( { category: -1 } );

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});