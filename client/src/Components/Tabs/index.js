import React from 'react';

function Tabs(props) {
    const {content, backdrop} = props

    return(
        <div className="horizontal-container border rounded">
            <a className="nav-link " href={`/shop/${content}`}>
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
            </a>
        </div>
    )
}

export default Tabs