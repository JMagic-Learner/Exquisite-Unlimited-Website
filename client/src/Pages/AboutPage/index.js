import React from 'react'
import ColumnImage from '../../Assets/img/about-column.jpg'


function About() {
    return(
        <div className="About-Container">
            <h1 className="text-black font-italic"> "Life revolves around Color" </h1>
             <div className="row">
                <div className="col column-image"
                style={
                    { 
                    backgroundImage: `url(${ColumnImage})`,
                    }
                    }>

                </div>
                <div className="col">
                    <section className="about">
                         <h2> 2008, The world turned upside down </h2>
                            <div className="paragraph text-justify"> 
                                 Faced with a world-economy that was free-falling, we saw opportunity to plant seeds for a long term goal.
                                 We wanted to bring color to households, on an affordable price tag. 
                            </div>
                    </section>
                    <section className="about">
                         <h2> Our Products </h2>
                            <div className="paragraph text-justify"> 
                                 Exquisite Unlimited LLC carries three primary types of paintings
                            </div>
                    </section>
                    <section className="about">
                         <h4> Engravings </h4>
                            <div className="paragraph text-justify"> 
                                 Engravings are paintings that incorporate 3D-topography. Traditional paintings are purely 2d, but our Engraving product line are sculpted murals to be hanged on your walls.
                                 Made with a variety of metals, these paintings weigh the heaviest. Subjects of this product line range from religious iconography, to mythical landscapes and creatures.
                            </div>
                    </section> 
                    <section className="about">
                         <h4> Oils</h4>
                            <div className="paragraph text-justify"> 
                                 Our Oil paintings sport the most vibrant color assortment of our product range. Depicting villas, cities, fields, forests and more in vivid colors, Oils are our main product line.
                            </div>
                    </section> 
                    <section className="about">
                         <h4> Contemporary </h4>
                            <div className="paragraph text-justify"> 
                                 The Contemporary product line highlights art styles from the 1980's onward. This product range includes abstract expressionism,modernism, surrealism, geometric etc 
                            </div>
                    </section>        
                    </div>
                  
               
            </div>
        </div>
    )
}

export default About