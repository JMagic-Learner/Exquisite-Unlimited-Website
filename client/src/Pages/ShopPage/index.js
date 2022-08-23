import React from 'react'
import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../Utils/queries';
import CategorySpecific from '../../Components/CategorySpecific';

function Shop() {
  const [Selection, setSelection] = useState("Welcome");
  const { loading, error, data } = useQuery(QUERY_PRODUCTS);
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

  const categoryFilter = (event) => {
    event.preventDefault()
    let targetCategory = event.target.name
    console.log(targetCategory)
    setSelection(targetCategory)
  }


  return (
    <div className="Shop-Container">
      <h2>Product Catalogue</h2>

      <div className="row">
        <section className="shop-menu">
          <button type="button" className="btn btn-primary shop-menu-button" name="Welcome" onClick={categoryFilter}> Show All </button>
        </section>
      </div>

      <div className="row">
        <section className="shop-menu">
          <button type="button" className="btn btn-primary shop-menu-button" name="Engraving" onClick={categoryFilter}> Engraving </button>
          <button type="button" className="btn btn-primary shop-menu-button" name="Oil" onClick={categoryFilter}> Oil </button>
          <button type="button" className="btn btn-primary shop-menu-button" name="Contemporary" onClick={categoryFilter}> Contemporary </button>
        </section>
      </div>

      <div className="selection-display">
        <p> {Selection}  </p>
      </div>

      {Selection === "Welcome" && (
        <div className="catalogue">

          {ProductArray.map((element) => {
            return (
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
      )}

      {Selection !== "Welcome" && (
        <CategorySpecific categoryName={Selection}/>
      )}

    </div>
  )
}

export default Shop