import React from 'react'
import {useEffect,useState} from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../Utils/queries';

function Shop() {
    const [Selection, setSelection] = useState("Default");
    const  {loading,error, data } = useQuery(QUERY_PRODUCTS);
    if (loading) {
      console.log("We have queried the server")
      console.log(loading)
    }
    if (error) {
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
  
  {ProductArray.map((element) => {
    return(
        <p> {element.name} </p>
    )
  })}
  </div>
)
}

export default Shop