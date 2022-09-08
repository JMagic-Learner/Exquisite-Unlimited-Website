import React, { useRef, useState } from 'react';
import { EmailOrderMobile } from '../EmailOrderMobile/index.js'
export default function Cart(props) {

    const { orderArray, totalAmount, removeFunction } = props
   
   

  
 
  
    const deleteFunction = (event) => {
        event.preventDefault()
        console.log("We are attempting to delete", event.target.id)
        removeFunction(event.target.id)
    }
    return (
        <div >

            <div className="desktop-disabled ">
                <button className="btn btn-outline-secondary shop-menu-button"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#CartModal"
                > Cart
                </button>


                <div className="modal fade mobile-width" id="CartModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel"> Cart (Mobile) </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body d-flex">
                                <div className="input-group mb-3">
                                    <h4> Cart (Copy Paste) </h4>


                                    <table className="table">
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

                                                <tbody>
                                                    <tr className="cart-font">
                                                        <th scope="row"> #{index + 1}</th>
                                                        <td>{item.name}</td>
                                                        <td>{item.serial}</td>
                                                        <td>{item.quantity}</td>
                                                        <td>{item.quantity * item.price}</td>
                                                        <button id={item.name} className="btn btn-outline-secondary" onClick={deleteFunction}> X </button>
                                                    </tr>
                                                </tbody>


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


                            </div>

                         

                            <EmailOrderMobile/>

                           
                        </div>
                    </div>
                </div>
            </div>


            <div className="mobile-disable">
                <h4> Cart (Copy Paste) </h4>


                <table className="table">
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

                            <tbody>
                                <tr className="cart-font">
                                    <th scope="row"> #{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.serial}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.quantity * item.price}</td>
                                    <button id={item.name} className="btn btn-outline-secondary" onClick={deleteFunction}> X </button>
                                </tr>
                            </tbody>


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
        </div>

    )

}

