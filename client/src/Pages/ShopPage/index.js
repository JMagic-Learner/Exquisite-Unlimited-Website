import React from 'react'
import { useEffect, useState } from 'react'
import CategorySpecific from '../../Components/CategorySpecific';
import Cart from "../../Components/Cart"
import FAQComponent from '../../Components/FAQComponent';
import CategoryAll from '../../Components/CategoryAll';
import EmailOrder from '../../Components/EmailOrder';
import { useSelector, useDispatch } from 'react-redux'
import {cartArray} from '../../Slices/Item/itemSlice.js'
import { removeItem, addItem } from '../../Slices/Quantity/quantitySlice.js'
import { addtoTotal, subtractfromTotal } from '../../Slices/TotalAmount/totalAmountSlice.js'
import { addItemToCart } from '../../Slices/Item/itemSlice.js'
import { removeItemFromCart } from '../../Slices/Item/itemSlice.js'


function Shop(props) {
  const { product, reroute } = props
  const [Selection, setSelection] = useState(reroute);
  const [CartArray, setCartArray] = useState([])
  const [total,setTotal] = useState(0)

  const item = useSelector(cartArray)
  const dispatch = useDispatch()

  const categoryFilter = (event) => {
    event.preventDefault()
    let targetCategory = event.target.name
    console.log(targetCategory)
    setSelection(targetCategory)
  }

  const FAQ = (event) => {
    event.preventDefault()
  }

  

  const liftedState = (OrderInput) => {
    dispatch(addItem())
    if (item.length>=1) {
      const duplicate = item.filter((product)=>product.serial == OrderInput.serial)
      let duplicateQuantity = 0;
    
      duplicate.forEach((individualProduct)=> duplicateQuantity+= individualProduct.quantity)
     
     
      const duplicateItem = {
        name:OrderInput.name,
        category:"",
        description:"",
        price:OrderInput.price,
        serial:OrderInput.serial,
        quantity: parseInt(OrderInput.quantity) + parseInt(duplicateQuantity),
        size:""
      }
      removeFromCart(OrderInput.serial, "duplicate")
      dispatch(addItemToCart( duplicateItem))
      dispatch(addtoTotal(duplicateItem))
      
    } else {
      dispatch(addItemToCart( OrderInput))
      dispatch(addtoTotal(OrderInput))
    }
    
  }

  const removeFromCart = (RemoveOrder, message) => {
    console.log("This is the order selected", RemoveOrder)
    console.log("this is the the array of items in the cart", item)
    console.log("This is after the filter" , item.filter((product)=> product.serial == RemoveOrder))
    let targetProducts = item.filter((product)=> product.serial == RemoveOrder)
    let amounttoSubtract = 0;
    targetProducts.forEach((product)=> amounttoSubtract+=(product.price * product.quantity))
    if (message != "duplicate") {
      dispatch(removeItem())
    }

    dispatch(removeItemFromCart(RemoveOrder))
    dispatch(subtractfromTotal(amounttoSubtract))
  }

  useEffect(() => {
    let temporary = []
    CartArray.forEach((item)=>{
      if (item.quantity>1) {
        let quantity = item.quantity
        for(let i = 0; i< quantity; i++) {
          temporary.push(item.price)
        }
      } else {
        temporary.push(item.price)}
      }
    )
    let sum = temporary.reduce((pv, cv) => pv + cv, 0);
    setTotal(sum)
  }, [CartArray])



  return (
    <div className="Shop-Container">




      <div className="row">
        <section className="shop-menu">
          {/* <button type="button" className="btn btn-outline-secondary shop-menu-button" name="Welcome" onClick={categoryFilter}> Show All </button> */}
          <button type="button" className="btn btn-outline-secondary shop-menu-button" name="Welcome" onClick={categoryFilter}> Show All </button>
          <button type="button" className="btn btn-outline-secondary shop-menu-button" name="Engraving" onClick={categoryFilter}> Engraving </button>
          <button type="button" className="btn btn-outline-secondary shop-menu-button" name="Oil" onClick={categoryFilter}> Oil </button>
          <button type="button" className="btn btn-outline-secondary shop-menu-button" name="Contemporary" onClick={categoryFilter}> Contemporary </button>
          <button className="btn btn-outline-secondary shop-menu-button"
            type="submit"
            name="FAQ"
            data-bs-toggle="modal"
            data-bs-target="#FAQModal"
            onClick={FAQ}> FAQ </button>
          <Cart  removeFunction={removeFromCart}/>
          <EmailOrder orderArray={CartArray}/>
        </section>



        {Selection === "Welcome" && (
          <CategoryAll array={product} childFunction={liftedState}/>

        )}

        {Selection !== "Welcome" && (
          <CategorySpecific categoryName={Selection} childFunction={liftedState}/>
        )}

      
        <FAQComponent/>
       


      </div>
    </div>
  )
}

export default Shop