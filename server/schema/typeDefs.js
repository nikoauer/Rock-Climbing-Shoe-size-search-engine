const typeDefs = `
type Shoes {
    _id: ID!
    Brand: String
    Model: String
    USMensSize: Float
    USWomensSize: Float
    UkSize: Float
    EuroSize: Float
    BoxSize: Float
    SoleSize: Float
    ToeBox: String
    Width: String
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    shoes: [Shoes]
    getShoesBySize(size: Float!): [Shoes]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    signup(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;