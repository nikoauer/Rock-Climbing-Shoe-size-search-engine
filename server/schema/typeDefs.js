const typeDefs = `
type Shoes {
    _id: ID!
    Brand: String
    Model: String
    USMensSize: Int
    USWomensSize: Int
    UkSize: Int
    EuroSize: Int
    BoxSize: Int
    SoleSize: Int
    ToeBox: String
    Width: String
  }

  type Query {
    shoes: [Shoes]
  }
`;

module.exports = typeDefs;