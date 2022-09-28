import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORY } from '../../Utils/queries'
import Order from '../Order/index.js'

function CategorySpecific(props) {
    const { categoryName, childFunction } = props
    const { loading, error, data } = useQuery(QUERY_CATEGORY, {variables: { category: categoryName }},);
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

    const ProductArray = data?.productCategory || [];
    const [SelectedOrder, setSelectedOrder] = useState("");

    const recordOrder = (event) => {
        event.preventDefault()
        let selectedProduct = event.target.name
        setSelectedOrder(selectedProduct)
    }

    return (
       
            <div className="catalogue">

                {ProductArray.map((element) => {
                    return (
                        <div className="card product-card " key={element.serial}>
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

export default CategorySpecific

