import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'

function Navigation() {

  return (
    // <nav className="navbar navbar-b navbar-trans navbar-expand-md" id="mainNav">
    //   <div className="container">

    //     <h1><a className="navbar-brand " href="/">Exquisite Unlimited</a> </h1>

    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarDefault"
    //       aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="navbar-collapse collapse justify-content-end  " id="navbarSupportedContent">
    //       <ul className="navbar-nav  ">
    //         <li className="nav-item hover-action ">
    //           <Link className="nav-link  active" to="/">Home</Link>
    //         </li>
    //         <li className="nav-item hover-action " >
    //           <Link className="nav-link " to="/about">About</Link>
    //         </li>
    //         <li className="nav-item hover-action " >
    //           <Link className="nav-link " to="/shop">Shop</Link>
    //         </li>

    //         <li className="nav-item hover-action dropdown">
    //           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //             Dropdown
    //           </a>
    //           <ul className="dropdown-menu">
    //             <li><a className="dropdown-item" href="#">Action</a></li>
    //             <li><a className="dropdown-item" href="#">Another action</a></li>
    //             <li><div className="dropdown-divider"></div></li>
    //             <li><a className="dropdown-item" href="#">Something else here</a></li>
    //           </ul>
    //         </li>

    //       </ul>
    //     </div>

    //   </div>
    // </nav>

    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
  <h1><Link className="navbar-brand " to="/">Exquisite Unlimited</Link> </h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav  ">

            <li className="nav-item hover-action ">
              <Link className="nav-link  active" to="/">Home</Link>
           </li>
            <li className="nav-item hover-action " >
              <Link className="nav-link " to="/about">About</Link>
            </li>
            <li className="nav-item hover-action " >
              <Link className="nav-link " to="/shop">Shop</Link>
            </li>
        <li className="nav-item dropdown">
          <button className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </button>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/"> Home </Link></li>
            <li><Link className="dropdown-item" to="/about"> About </Link></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><Link className="dropdown-item" to="/shop"> Shop </Link></li>
          </ul>
        </li>
      
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navigation