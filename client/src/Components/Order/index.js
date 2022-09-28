import React, { useEffect, useState } from "react"
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PRODUCT } from '../../Utils/queries';

function Order(props) {

    const { graphQLInput, childFunction } = props
    const [selected, setSelected] = useState("")
    const [quantity, setQuantity] = useState(1)
    const { loading, error, data } = useQuery(QUERY_SINGLE_PRODUCT, { variables: { name: graphQLInput } },);
    if (loading) {
        console.log("We have queried the server with ", graphQLInput)
    }
    if (error) {
        console.log("We have encountered an error")
        console.log(error)
    }
    if (data) {
        console.log('We have succesfully queried objectives');
        console.log(data)
    }

    const SingleProduct = data?.product || [];
    const SerialNumbers = SingleProduct?.serial || [];


    useEffect(()=>{
    setSelected("")
    },[])

    const selectedSerial = (event )=>{
        event.preventDefault()
        console.log(event.target.id)
        setSelected(event.target.id)
    }

    const selectedQuantity = (event )=>{
        event.preventDefault()
        console.log(event.target.id)
        setQuantity(event.target.id)
    }

    const SaveAndRemove = (event) =>{
        event.preventDefault()
        childFunction(
            {
              name: SingleProduct.name,
              serial: selected,
              price: SingleProduct.price,
              quantity: quantity
            }
        )
            
        setSelected("")
        setQuantity(1)
        
    }


    return (
        <form className="modal fade" id="OrderModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{graphQLInput}</h5>

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                   

                    <div className="modal-body d-flex">
                        <div className="input-group mb-3">
                        <label className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select Serial Number
                                </button>
                                <ul className="dropdown-menu">
                                    {SerialNumbers.map((item,index)=>{
                                        return  <li>  
                                            <a className="dropdown-item text-black " 
                                               href="#"
                                               id={JSON.stringify(SerialNumbers[index])}
                                               onClick={selectedSerial}>
                                                {JSON.stringify(SerialNumbers[index])}
                                            </a>
                                        </li>
                                    })} 
                                </ul>
                                
                            </label>
                        <input type="text" id="serial-output" name="serial-output" value={selected} readOnly></input>  
                        </div>       
                    </div>

                    <div className="modal-body d-flex">
                    <div className="input-group mb-3">
                        <label className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select Quantity
                                </button>
                                <ul className="dropdown-menu">
                                      <li>  
                                            <a className="dropdown-item text-black " 
                                               id={1}
                                               onClick={selectedQuantity}>
                                                1
                                            </a>
                                            <a className="dropdown-item text-black " 
                                               id={2}
                                               onClick={selectedQuantity}>
                                                2
                                            </a>
                                            <a className="dropdown-item text-black " 
                                               id={3}
                                               onClick={selectedQuantity}>
                                                3
                                            </a>
                                            <a className="dropdown-item text-black " 
                                               id={4}
                                               onClick={selectedQuantity}> 
                                               4
                                            </a>
                                            <a className="dropdown-item text-black " 
                                              id={5}
                                               onClick={selectedQuantity}> 
                                               5
                                            </a>
                                        </li>
                                  
                                </ul>
                                
                            </label>
                        <input type="text" id="serial-output" name="serial-output" value={quantity} readOnly></input>  
                        </div>       
                    </div>



                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close </button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={SaveAndRemove} >Save changes</button>
                    </div>
                </div>
            </div>
        </form>

    )
}

export default Order