const { ApolloServer, gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Book {
    name: String
    author: String
  }
  type Query {
    hello: String
    books: [Book]
  }
`;

const books = [
  { name: "book1", author: "summer" },
  { name: "book2", author: "sunny" }
];

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: (root, args, context) => "Hello world!",
    books: () => books
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
