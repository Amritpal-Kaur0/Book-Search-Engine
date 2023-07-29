const { User } = require('../models');
const bookSchema = require('../models/Book');

const resolvers = {
    Query: {
      Books: async () => {
        return User.find()
      },
  
      thought: async (parent, { bookId }) => {
        return bookSchema.findOne({ _id: bookId });
      },
    },
}