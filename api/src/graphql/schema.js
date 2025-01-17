const { gql } = require('graphql-tag');

const typeDefs = gql`
  type Work {
    id: ID!
    title: String!
    img: String!
    subText: String!
    content: String! # Markdown içeriği burada tutulur
    date: String!
    category: String!
  }

  type Blog {
    id: ID!
    title: String!
    content: String! # Markdown içeriği burada tutulur
    subText: String!
    date: String!
    category: String!
  }

  type Query {
    getWorks: [Work!]!
    getWork(id: ID!): Work
    getBlogs: [Blog!]!
    getBlog(id: ID!): Blog
  }
`;

module.exports = typeDefs;
