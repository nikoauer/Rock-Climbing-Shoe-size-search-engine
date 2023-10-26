const { Shoes, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = { 
    Query: {
      shoes: async () => {
        return await Shoes.find({})
      }  
    },

    Mutation: {
      signup: async (_, { username, email, password }) => {
        try {
          const user = await User.create({ username, email, password });
          const token = signToken(user);
  
          return { token, user };
        } catch (error) {
          console.log(error)
          throw new Error('Signup failed. Please try again!', error)
        }
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
        console.log(user)
        if(!user) {
          throw AuthenticationError;
        }
        const correctPassword = await user.isCorrectPassword(password);
        console.log(correctPassword)
        if (!correctPassword) {
          throw AuthenticationError;
        }  
        const token = signToken(user);
        return { token, user };
      }
    }
}

module.exports = resolvers;