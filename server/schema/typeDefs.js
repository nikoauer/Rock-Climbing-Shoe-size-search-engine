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

  type Query {
    shoes: [Shoes]
  }
`;

module.exports = typeDefs;