const { User } = require('../models');
const bookSchema = require('../models/Book');

const resolvers = {
  Query: {
    // Resolver to get a user by ID
    getUser: async (_, { id }) => {
      try {
        const user = await User.findById(id);
        return user;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
  },
    Mutation:{
// Resolver for creating a new user
createUser: async (_, { input }) => {
  try {
    const user = await User.create(input);
    return { success: true, message: 'User created successfully', user };
  } catch (error) {
    return { success: false, message: error.message, user: null };
  }
},

// Resolver for updating an existing user
updateUser: async (_, { id, input }) => {
  try {
    const user = await User.findByIdAndUpdate(id, input, { new: true });
    if (!user) {
      return { success: false, message: 'User not found', user: null };
    }
    return { success: true, message: 'User updated successfully', user };
  } catch (error) {
    return { success: false, message: error.message, user: null };
  }
},

// Resolver for deleting a user
deleteUser: async (_, { id }) => {
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return { success: false, message: 'User not found', user: null };
    }
    return { success: true, message: 'User deleted successfully', user };
  } catch (error) {
    return { success: false, message: error.message, user: null };
  }
},
// You can add more mutation resolvers here as needed
},
User: {
// Resolver for the `savedBooks` field, which should return an array of books
savedBooks: (parent) => parent.savedBooks || [],

// Resolver for the `bookCount` field, which should return the length of savedBooks array
bookCount: (parent) => parent.savedBooks.length,
},
};
