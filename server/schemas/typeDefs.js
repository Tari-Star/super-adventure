// import the gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    saveBooks: [Book]
  }

  type Book {
      bookId: String!
      authors: [String]
      description: String
      title: String!
      image: String
      link: String
  }
  input BookInput {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String!
  }
  type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput!): User
    removeBook(bookId: String!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;