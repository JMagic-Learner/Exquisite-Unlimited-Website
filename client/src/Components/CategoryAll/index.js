import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORY } from '../../Utils/queries'
import Order from '../Order/index.js'

function CategoryAll(props) {
    const {array, childFunction} = props
    const [SelectedOrder, setSelectedOrder] = useState("");

    const recordOrder = (event) => {
        event.preventDefault()
        let selectedProduct = event.target.name
        setSelectedOrder(selectedProduct)
    }

    return (
       
            <div className="catalogue">

                {array.map((element) => {
                    return (
                        <div className="card product-card ">
                            <div className="card-body">
                            <p className="card-title"> {element.name} </p>
                         
                          <img src={require(`../../Assets/Products/${element.category}/${element.description}.jpg`)} className="card-img-top product-image" alt="..."/>
            
                            
                            <div className="card-text ">
                                <p> {element.price} </p>
                            </div>

                            <button className="btn btn-outline-secondary order-button " 
                                type="button"
                                id={element.pictureID}
                                value={element.price}
                                name={element.name}
                                data-bs-toggle="modal"
                                data-bs-target="#OrderModal"
                                onClick={recordOrder}
                                > Order </button>
                            </div>
                           
                        </div>
                    )
                })}

<Order graphQLInput={SelectedOrder} childFunction={childFunction} />
            </div>
        
    )
}

export default CategoryAll
