import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORY } from '../../Utils/queries'

function CategorySpecific(props) {
    const { categoryName } = props
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

    return (
        <div className="category Shop-Container">
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
        </div>
    )
}

export default CategorySpecific

