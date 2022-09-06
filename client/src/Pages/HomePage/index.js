import React from 'react'
import Banner from '../../Components/Banner'
import Tabs from '../../Components/Tabs'
import Image1 from '../../Assets/img/tab-1.JPG'
import Image2 from '../../Assets/img/tab-2.jpg'
import Image3 from '../../Assets/img/tab-3.jpg'

function Home() {

    return(
        <div className="homepage-container ">
                 <Banner/>
                 
        <div className='homepage-container-lower'>
      
                <Tabs className="tab-text" content="Oil" backdrop={Image3}/>
                <Tabs className="tab-text" content="Engraving" backdrop={Image1}/>
                <Tabs className="tab-text" content="Contemporary" backdrop={Image2}/>
         
        </div>
        </div>
    )
}

export default Home