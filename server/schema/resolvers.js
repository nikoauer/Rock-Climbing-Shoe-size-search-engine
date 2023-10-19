const { Shoes } = require('../models/index');

const resolvers = { 
    Query: {
      shoes: async () => {
        return await Shoes.find({})
      }  
    }
}

module.exports = resolvers;