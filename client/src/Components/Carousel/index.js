import React, { useEffect, useState } from 'react'

import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom'
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image1 from '../../Assets/img/tab-1.JPG'
import Image2 from '../../Assets/img/tab-2.jpg'
import Image3 from '../../Assets/img/tab-3.jpg'
import Image4 from '../../Assets/img/tab-3.jpg'
import Image5 from '../../Assets/img/tab-3.jpg'
function Carousel() {



  return (
    <div>
      <OwlCarousel className="owl-theme" loop margin={10} dots={true} dotsEach={true}>
        <div className="item owl-height" >
          <Link to={`/shop/Engraving`}>
          <img src={Image1} />
          </Link>
        </div>
        <div className="item owl-height">
        <Link to={`/shop/Contemporary`}>
          <img src={Image2} />
        </Link>
        </div>
        <div className="item owl-height">
        <Link to={`/shop/Oil`}>
          <img src={Image3} />
        </Link>
        </div>
        <div className="item owl-height">
          <img src={Image4} />
        </div>
        <div className="item owl-height">
          <img src={Image5} />
        </div>

      </OwlCarousel>

    </div>
  )
}

export default Carousel