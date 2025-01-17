const { gql } = require('graphql-tag');

const typeDefs = gql`
  type Work {
    id: ID!
    title: String!
    img: String!
    subText: String!
    content: String!
    date: String!
    category: String!
  }

  type Blog {
    id: ID!
    title: String!
    content: String!
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

  type Mutation {
    addWork(
      title: String!
      img: String!
      subText: String!
      content: String!
      category: String!
    ): Work
    addBlog(
      title: String!
      content: String!
      subText: String!
      category: String!
    ): Blog
  }
`;

module.exports = typeDefs;
