import React from 'react'
import { useEffect, useState } from 'react'
import CategorySpecific from '../../Components/CategorySpecific';
import Cart from "../../Components/Cart"
import FAQComponent from '../../Components/FAQComponent';
import CategoryAll from '../../Components/CategoryAll';
import EmailOrder from '../../Components/EmailOrder';



function Shop(props) {
  const { product, reroute } = props
  const [Selection, setSelection] = useState(reroute);
  const [SelectedOrder, setSelectedOrder] = useState("");
  const [CartArray, setCartArray] = useState([])
  const [total,setTotal] = useState(0)


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
    console.log("This is the order selected", OrderInput)
    setCartArray([
      ...CartArray,
      OrderInput
    ]);
  }

  const removeFromCart = (RemoveOrder) => {
    console.log("This is the order selected", RemoveOrder)
    let filteredCart = CartArray.filter((item)=> item.name != RemoveOrder)
    setCartArray(filteredCart)
  }

  useEffect(() => {
    console.log(CartArray)
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
    console.log(temporary)
    let sum = temporary.reduce((pv, cv) => pv + cv, 0);
    console.log(sum)
    setTotal(sum)
  }, [CartArray])

  return (
    <div className="Shop-Container">




      <div className="row">
        <section className="shop-menu">
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
          <Cart orderArray={CartArray} totalAmount={total} removeFunction={removeFromCart}/>
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