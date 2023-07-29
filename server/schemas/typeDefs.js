const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type bookSchema {
    _id: ID
    authors: String
    description: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password:String
    savedBooks:[bookSchema]
  }

  type Query {
    Books: [Book]!
    book(bookId: ID!): Book
  }

  `;
  
  module.exports = typeDefs;