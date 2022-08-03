import React from 'react';

function Tabs(props) {
    const {content, backdrop} = props

    return(
        <div className="horizontal-container border rounded">
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
            
        </div>
    )
}

export default Tabs