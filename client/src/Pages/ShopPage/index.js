import React from 'react'
import {useEffect,useState} from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../Utils/queries';

function Shop() {
    const [Selection, setSelection] = useState("Default");
    const  {loading,error, data } = useQuery(QUERY_PRODUCTS);
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

    const ProductArray = data?.products|| [];
    
    

return(
  <div className="Shop-Container">
    <h2>Product Catalogue</h2> 
    <div className="row">
        <section className="shop-menu"> 
            <button type="button" className="btn btn-primary shop-menu-button"> Engraving </button>
            <button type="button" className="btn btn-primary shop-menu-button"> Oil </button>
            <button type="button" className="btn btn-primary shop-menu-button"> Contemporary </button>
          </section>
      </div>
  

  <div className="catalogue">
    {ProductArray.map((element) => {
      return(
        <div className="product-card">
           <p className="product-title"> {element.name} </p>
          <div className="product-description ">
             <p> {element.description} </p>
          </div>
          <div className="product-description ">
             <p> {element.price} </p>
          </div>
        </div>
    )
    })}
    </div>
  </div>
)
}

export default Shop