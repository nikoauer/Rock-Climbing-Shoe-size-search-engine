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
    id: ID!
    username: String!
    email: String!
    password: String!
    savedShoes: [Shoes]!
  }

  type Query {
    shoes: [Shoes]
  }
`;

module.exports = typeDefs;