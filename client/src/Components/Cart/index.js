import React, {useEffect, useState} from 'react'

export default function Cart(props) {

const {orderArray} = props

    return(
        <div className="test">
           <p> Number of items in cart: {orderArray.length} </p>
            {orderArray.map((item)=>{
                return(<div className="card ">
                <div className="card-body">
                <p className="card-title">{item.name} </p>
             
             

                
                <div className="card-text ">
                    <p> {item.price} </p>
                </div>
                <div className="card-text ">
                    <p> {item.serial} </p>
                </div>


                </div>
               
            </div>
               )})}
        </div>

    )

}

