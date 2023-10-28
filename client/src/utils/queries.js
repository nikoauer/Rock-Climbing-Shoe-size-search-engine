import { gql } from '@apollo/client';

export const GET_SHOES_BY_SIZE = gql`
query GetShoesBySize($size: Float!) {
    getShoesBySize(size: $size) {
      Model
      Brand
      SoleSize
      _id
      Width
    }
  }
`;