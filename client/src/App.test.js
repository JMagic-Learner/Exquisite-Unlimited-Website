import { render, screen } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import {QUERY_PRODUCTS} from './Utils/queries'
import App from './App';


const mocks = [
  {
    request: {
      query: QUERY_PRODUCTS,
    result: {
      products: {
        products: { pictureID: 1, name: "Test", category: "Oil", description: "Oil", price: 50.00, serial: "xx1", quantity:1, size:"test"}
      }
    }
  }
}
];

test('Renders default application UI', () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}> 
    <App />
      </MockedProvider>
 );
  const linkElement = screen.getByText("Exquisite Unlimited");
  const NAVBAR = screen.getByText('Home')
  expect(linkElement).toBeInTheDocument();
  expect(NAVBAR).toBeInTheDocument();
});
