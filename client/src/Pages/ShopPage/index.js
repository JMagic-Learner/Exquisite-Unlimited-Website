import React from 'react'
import { useEffect, useState } from 'react'
import CategorySpecific from '../../Components/CategorySpecific';
import EngImg1 from '../../Assets/img/Products/Engraving/EU05MY9079.jpg'
import EngImg2 from '../../Assets/img/Products/Engraving/EU05MY8033.jpg'
import EngImg3 from '../../Assets/img/Products/Engraving/EU05MY8033.jpg'
import EngImg4 from '../../Assets/img/Products/Engraving/EU05MY8033.jpg'
import EngImg5 from '../../Assets/img/Products/Engraving/EU05MY8033.jpg'
import EngImg6 from '../../Assets/img/Products/Engraving/EU05MY8033.jpg'
import EngImg7 from '../../Assets/img/Products/Engraving/EU05MY8033.jpg'






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
                            {element.category==="Engraving" && 
                          <img src={require(`../../Assets/img/Products/${element.category}/${element.serial}.jpg`)} className="card-img-top product-image" alt="..."/>
            }
                            <div className="card-text ">
                                <p> {element.description} </p>
                            </div>
                            <div className="card-text ">
                                <p> {element.price} </p>
                            </div>
                            </div>
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
                                    <p> How do I place an order</p>
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