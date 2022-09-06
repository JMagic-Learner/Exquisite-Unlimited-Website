import { render, screen } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import {QUERY_PRODUCTS} from './Utils/queries'
import App from './App';
import Shop from './Pages/ShopPage';
import About from './Pages/AboutPage';


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

test('Landing on About Page', () => {
  const AboutRoute = '/about'
  render(
    <MockedProvider mocks={mocks} addTypename={false}> 
    <App>
      <MemoryRouter initialEntries={[AboutRoute]}>
        <About />
      </MemoryRouter>,
    </App>
      </MockedProvider>
  )
});


describe ( `A Snapshot of the About Page`, ()=> {
  it('should match snapshot', () => {
    })
    const { asFragment } = render(<About > SnapShot Rewardpage </About>);
    expect(asFragment()).toMatchSnapshot();
})

test('Describe the About Page as it should appear', () => {

  render(
        <About />
  )

  const Title = screen.getByText(`"Life revolves around Color"`)
  expect(Title).toBeInTheDocument();
  const SubTitle= screen.getByText(`2008, The world turned upside down`)
  expect(SubTitle).toBeInTheDocument();
  const SubTitle2= screen.getByText(`Our Products`)
  expect(SubTitle2).toBeInTheDocument();
});
