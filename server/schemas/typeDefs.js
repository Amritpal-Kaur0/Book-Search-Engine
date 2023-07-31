const {gql} = require("apollo-server-express");

const typeDefs = gql`
type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  input InputBook {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

type User {
    _id:ID
    username: String
      email: String
      password: String
      savedBooks: [Book]
      bookCount: Int!

    }
    type Auth {
      token:ID
      user:User
    }
    type Query{
        User: [User] !
        user (username:String): User
    }

    type Mutation{
      addUser(username: String!, email: String!, password: String!): Auth
      login(email: String!, password: String!): Auth
      saveBook(savedBooks: InpuBook!): User
   removeBook(bookId: ID!): User

  
    }

`;
module.exports = typeDefs;
