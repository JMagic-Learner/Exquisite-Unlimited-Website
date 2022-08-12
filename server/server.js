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
  server.start();
  const app = express();

  app.use(cors({
    origin: 'http://localhost:3000'
  }));


  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  server.applyMiddleware({ app });
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

  app.get('*', (req, res) => {
    if (req) {
      console.log("A request has been sent");
    }
    if (res) {
      console.log("A response has been generated");
      console.log(res)
    }
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
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

