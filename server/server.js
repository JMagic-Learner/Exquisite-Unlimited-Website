const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();


const { typeDefs, resolvers } = require('./schemas');


const db = require('./config/connection');

const PORT = process.env.PORT || 4000;

async function startApolloServer() {
  const server = new ApolloServer({
      typeDefs,
      resolvers,
      playground: true,
      introspection: true,
  });
  await server.start();
  const app = express();
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());


  // Serve static files (js/css)
  app.use(express.static(path.join(__dirname, "../client/build")));
  
  // Serve the graphql endpoint
  server.applyMiddleware({ app });
  
  // Fallback to index.html for all other (not yet matched) routes
  app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
  

    db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });


 
 
  // await new Promise(resolve => app.listen({ port: 4000 }, resolve));
  // console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
  }

startApolloServer();






// db.objectives.find().sort( { category: -1 } );

