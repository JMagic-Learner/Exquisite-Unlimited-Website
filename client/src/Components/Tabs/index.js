import React from 'react';
import {Link} from 'react-router-dom'

function Tabs(props) {
    const {content, backdrop} = props

    return(
        <div className="horizontal-container border rounded" >
            <Link className="nav-link " to={`/shop/${content}`}>
          
                <div className="Tab-Image-Container"
            style={
                { 
                backgroundImage: `url(${backdrop})`,
                }
                }>
                    <div className="tabs-inner tab-text">

                            <h2 className=" font-weight-light"> {content} </h2>
                    </div>
            </div>
            </Link>
        </div>
    )
}

export default Tabs