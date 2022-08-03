import { gql } from '@apollo/client';

export const BUY_PRODUCT = gql`
  mutation buyProduct($_id: ID!, $quantity: Int!) {
    buyProduct(product: id:$_id, quantity: $quantity) {
      
      product {
        _id
        quantity
      }
    }
  }
`;