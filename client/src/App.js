import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Home from './Pages/HomePage'
import About from './Pages/AboutPage'
import Shop from './Pages/ShopPage';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from './Utils/queries';
import {  BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import React, {useEffect,useState} from 'react'

function App() {

  // Prefetchinig the Product catalogue prior to end-user clicking submit.
  const  { loading, error, data } = useQuery(QUERY_PRODUCTS)
    if (loading) {
    console.log("We have queried the server")
  }
  if (error) {
    console.log("We have encountered an error")
    console.log(error)
  }
  if (data) {
    console.log('We have succesfully queried objectives');
    console.log(data)
  }

  const ProductArray = data?.products || [];


  return (
    <div className="App">
   
      <BrowserRouter>
      <Navigation/>
      <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/shop" element={<Shop product={ProductArray} />}  />
            <Route exact path="/shop/Oil" element={<Shop product={ProductArray} reroute="Oil" />} />
            <Route exact path="/shop/Engraving" element={<Shop product={ProductArray} reroute="Engraving" /> }/>
            <Route exact path="/shop/Contemporary" element={<Shop product={ProductArray} reroute="Contemporary" />}/>
            
       </Routes>
     
       </BrowserRouter>
     
       
    </div>
  );
}

export default App;
