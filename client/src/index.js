import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import store from './Store/store.js'
import { Provider } from 'react-redux'



const client = new ApolloClient({
    uri: 'https://jztdhnmxsm.us-west-2.awsapprunner.com/',
    cache: new InMemoryCache(),
  });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ApolloProvider client={client}>
  <Provider store={store}>
    <App />
  </Provider>
    </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
