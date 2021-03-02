const { ApolloServer, gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Query {
    bookmark: [Bookmark!]
  }
  type Bookmark {
    id: ID!
    url: String!
    desc: String!
  }
  type Mutation {
    addBookmark(url: String!, desc: String!): Bookmark
  }
`;

const authors = [
  {
    id: 1,
    url: "https://github.com/gatsbyjs/gatsby-starter-hello-world",
    desc: "this is a github gatsby official repository",
  },
  {
    id: 2,
    url: "https://github.com/gatsbyjs/gatsby-starter-hello-world",
    desc: "this is a github gatsby official repository",
  },
  {
    id: 3,
    url: "https://github.com/gatsbyjs/gatsby-starter-hello-world",
    desc: "this is a github gatsby official repository",
  },
];
const resolvers = {
  Query: {
    bookmark: async (root, args, context) => {
      return authors;
    },
  },
  Mutation: {
    addBookmark: async (_, { url, desc }) => {
      console.log(url, desc);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = server.createHandler();

module.exports = { handler };
