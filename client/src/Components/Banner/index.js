import React from 'react'
import CompanyBanner from '../../Assets/img/placeholder.JPG'

function Banner() {
    return(
        <div className="Banner-Container">
        <div className="Banner-Image-Container"
            style={
            { 
            backgroundImage: `url(${CompanyBanner})`,
            }
            }>
          </div>
            <div className="banner-overlay">
            <h1 className="text-white font-weight-bold"> Bringing Color to your Home </h1>
            <h2 className="text-white font-weight-light"> Est 2008 </h2>
            </div>
      
        </div>
    )
}

export default Banner
