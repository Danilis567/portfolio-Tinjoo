const express = require('express');
const { createYoga } = require('graphql-yoga');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const typeDefs = require('./src/graphql/schema'); 
const resolvers = require('./src/graphql/resolvers'); 

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

const yoga = createYoga({
  schema,
  graphiql: true, 
});

app.use('/graphql', yoga);

const PORT = 2005;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/graphql`);
});
