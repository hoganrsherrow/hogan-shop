console.log(`Starting Express Server...`);
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// import schemas for GraphQL
const { typeDefs, resolvers } = require('./schemas');
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
const PORT = process.env.PORT || 3001;

console.log(`Connecting to DB...`);
const db = require('./config/connection');

app.get('/', (req, res) => {
    res.send('Hello World');
});

console.log(`Starting up Apollo Server...`);
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });
    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`Apollo server is ready at http://localhost:${PORT}${server.graphqlPath}.`);
        });
    });
}


startApolloServer(typeDefs, resolvers);