const { v4: uuidv4 } = require('uuid'); 
const works = [];
const blogs = [];

const resolvers = {
  Query: {
    getWorks: () => works,
    getWork: (_, { id }) => works.find((work) => work.id === id),
    getBlogs: () => blogs,
    getBlog: (_, { id }) => blogs.find((blog) => blog.id === id),
  },
  Mutation: {
    addWork: (_, { title, img, subText, content, category }) => {
      const newWork = {
        id: uuidv4(),
        title,
        img,
        subText,
        content,
        date: new Date().getFullYear().toString(),
        category,
      };
      works.push(newWork);
      return newWork;
    },
    addBlog: (_, { title, content, subText, category }) => {
      const newBlog = {
        id: uuidv4(),
        title,
        content,
        subText,
        date: new Date().getFullYear().toString(), 
        category,
      };
      blogs.push(newBlog);
      return newBlog;
    },
  },
};

module.exports = resolvers;
