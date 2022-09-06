import React, { useEffect, useState } from 'react'

export default function Cart(props) {

    const { orderArray, totalAmount, removeFunction } = props

    const deleteFunction = (event) => {
        event.preventDefault()
        console.log("We are attempting to delete", event.target.id)
        removeFunction(event.target.id)
    }
    return (
        <div >
            {/* <p> Number of items in cart: {orderArray.length} </p>
            */}
            {/* {orderArray.map((item,index) => {
                return (<div className="card ">
                    <div className="card-body">
                        <p className="card-title">{item.name} </p>

                        <div className="card-text ">
                            <p> Price: {item.price} </p>
                        </div>
                        <div className="card-text ">
                            <p> Serial: {item.serial} </p>
                        </div>
                        <div className="card-text ">
                            <p> Quantity: {item.quantity} </p>
                        </div>
                        <button id={item.name} onClick={deleteFunction}> Delete </button>
                    </div>
                </div>
                )
            })} */}
            <h4> Cart (Copy Paste) </h4>
            <table className="table wide-view" >
                <thead>
                    <tr>
                        <th scope="col">Item </th>
                        <th scope="col">Name </th>
                        <th scope="col">Serial</th>
                        <th scope="col">#</th>
                        <th scope="col">Price</th>

                    </tr>
                </thead>
                {orderArray.map((item, index) => {
                    return (


                        <tr className="cart-font">
                            <th scope="row"> #{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.serial}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity * item.price}</td>
                            <button id={item.name} className="btn btn-outline-secondary" onClick={deleteFunction}> X </button>
                        </tr>


                    )

                })}
                <tr>
                    <th scope="row"> Final </th>
                    <td></td>
                    <td></td>
                    <td> Total:</td>
                    <td>  ${totalAmount} </td>
                </tr>
            </table>
        </div>

    )

}

