import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Home from './Pages/HomePage'
import About from './Pages/AboutPage'
import Shop from './Pages/ShopPage';
import {  BrowserRouter, Routes, Route} from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  gql
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
    },
  };
});


const httpLink = createHttpLink({
  uri: '/4000/graphql',
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  // uri: `http://localhost:4000/graphql`
  uri: `https://exquisite-unlimited-website.herokuapp.com/graphql`,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
        <ApolloProvider client={client}>
      <BrowserRouter>
      <Navigation/>
      <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/shop" element={<Shop/>}/>
       </Routes>
       </BrowserRouter>
       </ApolloProvider>

    </div>
  );
}

export default App;
