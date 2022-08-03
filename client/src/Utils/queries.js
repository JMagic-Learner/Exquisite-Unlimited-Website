import { gql } from '@apollo/client';


export const QUERY_PRODUCTS = gql`
  query getProducts {
    products {
      _id
      name
      category
      description
      price
      serial
      quantity
      size
    }
  }`

  export const QUERY_SINGLE_PRODUCT = gql`
  query getProduct($name: String!) {
    product(name: $name){
        _id
        name
        category
        description
        price
        serial
        quantity
        size
    }
  }`