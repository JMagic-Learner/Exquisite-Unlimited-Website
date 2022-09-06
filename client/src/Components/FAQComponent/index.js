import React from 'react'

function FAQComponent(){

    return(
        <form className="modal fade" id="FAQModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
    )
}

export default FAQComponent