import React from 'react'
import { Link } from 'react-router-dom'
import abimg2 from '../../images/about/4.jpg'
import shape1 from '../../images/ab-shape-1.png'
import shape2 from '../../images/ab-shape-2.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const About = (props) => {
    return(
        <section className={`wpo-about-section section-padding ${props.abClass}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <img src={props.abimg} alt=""/>
                                <div className="wpo-ab-shape-1"><img src={shape1} alt=""/></div>
                                <div className="wpo-ab-shape-2"><img src={shape2} alt=""/></div>
                                <div className="wpo-about-exprience">
                                    <h3>15 Years Experience</h3>
                                </div>
                                <div className="wpo-ab-img-2">
                                    <img src={abimg2} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <h4>Welcome To Consoel Consultancy Comapny</h4>
                            <h2>We are trusted consulting company, <b>with <span>28+ years</span> of experience.</b>
                            </h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting’s
                                the industrey's standard dummy text ever since the 1500 when printed
                                galley of type and scrambled type specimen book. One way to categorize the activities is
                                in terms of the professional’s area of expertise such as competitive analysis, corporate
                                strategy.</p>
                            <Link onClick={ClickHandler} className="theme-btn" to="/about">More About Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;