import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Home from './Pages/HomePage'
import About from './Pages/AboutPage'
import Shop from './Pages/ShopPage';
import {  BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
      <Navigation/>
      <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/shop" element={<Shop/>}/>
       </Routes>
       </BrowserRouter>
     

    </div>
  );
}

export default App;
