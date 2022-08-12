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
  // if (NODE_ENV=="Production") {
  //   return "https://exquisite-unlimited-website.herokuapp.com/graphql"
  // } else {
  //   return "http://localhost:4000/shop"
  // }

});


const httpLink = createHttpLink({
  uri: 'https://exquisite-unlimited-website.herokuapp.com/graphql',
  // uri: `http://localhost:27017/graphql`,
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: httpLink,
  cache: new InMemoryCache(),
  playground: true,
  introspection: true,
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
