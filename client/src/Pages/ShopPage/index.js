import React from 'react'
import { useEffect, useState } from 'react'
import CategorySpecific from '../../Components/CategorySpecific';






function Shop(props) {

//   function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// }

//   const images = importAll(require.context('/img', false, '/\.jpg/'));


  const {product} = props
  

  const [Selection, setSelection] = useState("Welcome");
 

  const categoryFilter = (event) => {
    event.preventDefault()
    let targetCategory = event.target.name
    console.log(targetCategory)
    setSelection(targetCategory)
  }

  const FAQ = (event) => {

  }


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
        
          </section>



      {Selection === "Welcome" && (
        <div className="catalogue">

          {product.map((element,index) => {
            return (
              <div className="card product-card ">
                            <div className="card-body">
                            <p className="card-title"> {element.name} </p>
                         
                            <img src={require(`../../Assets/Products/${element.category}/${element.description}.jpg`)} className="card-img-top product-image" alt="..."/>
            
                            <div className="card-text ">
                                <p> {element.description} </p>
                            </div>
                            <div className="card-text ">
                                <p> {element.price} </p>
                            </div>
                            </div>
                            <button className="btn btn-outline-secondary shop-menu-button"
                                type="submit"
                                name="FAQ"
                                data-bs-toggle="modal"
                                data-bs-target="#OrderModal"
                                onClick={FAQ}> Order </button>
                            </div>
            )
          })}
        </div>
      )}

      {Selection !== "Welcome" && (
        <CategorySpecific categoryName={Selection}/>
      )}

            <form className="modal fade" id="FAQModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Commonly Asked Questions</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        
                            <div className="modal-body d-flex">
                                <div className="input-group mb-3">
                                    <p> Question: How do I place an order? </p>
                                    <p> Answer: Placing an order is simple. Click on the order button found on each item.</p>
                                    <p> Clicking on the order button will bring a modal for you to fill out. This modal is sent to our order processing department.</p>

                                    <p> Question: Will the paintings be shipped? </p>
                                    <p> Answer: Unfortunately, the paintings cannot be shipped at the moment. Our paintings will have to be picked up by the customer.</p>
                                </div>
                            </div>
                      
                        

                        <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >Save changes</button>
                        </div>
                    </div>
                </div>
            </form>

            <form className="modal fade" id="OrderModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Commonly Asked Questions</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        
                            <div className="modal-body d-flex">
                                <div className="input-group mb-3">
                                  <table>
                                    <tr> Name </tr>
                                    <tr> Item #  </tr>
                                    <tr> Quantity </tr>
                                    <tr> Total </tr>
                                  </table>
                                </div>
                            </div>
                      
                        

                        <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >Save changes</button>
                        </div>
                    </div>
                </div>
            </form>
        
 

    </div>
  </div>
  )
}

export default Shop