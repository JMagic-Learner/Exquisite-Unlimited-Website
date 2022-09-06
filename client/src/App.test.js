import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import { MockedProvider } from "@apollo/client/testing";
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import {QUERY_PRODUCTS} from './Utils/queries'
import App from './App';
import Shop from './Pages/ShopPage';
import About from './Pages/AboutPage';
import Home from './Pages/HomePage';


const mocks = [
  {
    request: {
      query: QUERY_PRODUCTS,
    result: {
      products: {
        products: { pictureID: 12, name: "Flowers Ornate #2", category: "Engraving", description: "FlowerVase2", price: 69.00, serial: ["EU05MY 8023B-1", "EU05MY 8023B-2", "EU05MY 8023B-3", "EU05MY 8023B-4"], quantity:10, size:"test"}
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



test('Testing an invalid response for react-routing-dom',  () => {
  const route = '/Truth'
  render(
   
      <MemoryRouter initialEntries={[route]}>
          <Home/>
      </MemoryRouter> 
      
  )
  const Invalid = screen.getByText(`Bringing Color to your Home`);
  expect(Invalid).toBeInTheDocument();
 
});

test('Testing an valid response for react-routing-dom',  () => {
  const route = '/Shop'
  const result = [
    {
      "pictureID": 1,
      "name": "Landscape Catalogue #1",
      "category": "Oil",
      "description": "Countryside1",
      "price": 85.00,
      "serial": ["KN1 013", "KNI 017", "KNI 020", "KNI 021", "KNI 022", "KNI 024"],
      "quantity":10,
      "size": "32 x 32" 
    },
  ]
  render(
    <MockedProvider mocks={mocks} addTypename={false}> 
      <MemoryRouter initialEntries={[route]}>
          <Shop product={result} reroute="Welcome"/>
      </MemoryRouter> 
      </MockedProvider> 
      
  )
  const Invalid = screen.getByText(`Cart (Copy Paste)`);
  const Invalid2 = screen.getByText('Landscape Catalogue #1');
  expect(Invalid).toBeInTheDocument();
  expect(Invalid2).toBeInTheDocument();
 
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
