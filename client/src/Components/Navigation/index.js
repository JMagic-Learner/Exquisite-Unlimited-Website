import React from 'react'
import { Link} from 'react-router-dom'

function Navigation() {

 

  return (

    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
  <Link className="navbar-brand " to="/">Exquisite Unlimited</Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
            <li className="nav-item hover-action ">
              <Link className="nav-link  active" to="/">Home</Link>
           </li>
            <li className="nav-item hover-action " >
              <Link className="nav-link " to="/about">About</Link>
            </li>
            <li className="nav-item hover-action " >
              <Link className="nav-link " to="/shop">Shop</Link>
            </li>  
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navigation