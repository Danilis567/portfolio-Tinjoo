const express = require('express');
const { createYoga } = require('graphql-yoga');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => 'Hello, kedim benim!',
      },
    },
  }),
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
