import React, { Fragment } from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Services from '../../api/service';
import ServiceSidebar from './sidebar'
import Contact from './contact';
import Footer2 from '../../components/footer2/Footer2';

const ServiceSinglePage = (props) => {
    const { id } = useParams()

    const serviceDetails = Services.find(item => item.Id === id)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <Navbar3 hclass={'wpo-header-style-5'} />
            <PageTitle pageTitle={serviceDetails.sTitle} pagesub={'Project'} />
            <div className="wpo-service-single-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-main-img">
                                        <img src={serviceDetails.sImgS} alt="" />
                                    </div>
                                    <div className="wpo-service-single-title">
                                        <h3>{serviceDetails.sTitle}</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet
                                        tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum cursus
                                        velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum
                                        quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis
                                        sollicitudin diam, elit sit. Et nisi in libero facilisis sed est. Elit curabitur
                                        amet risus bibendum. Posuere et eget orci, tempor enim.</p>
                                    <p>Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio
                                        facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at
                                        rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit.</p>
                                    <div className="row mt-4">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={serviceDetails.ssImg1} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={serviceDetails.ssImg2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-service-single-item list-widget">
                                    <div className="wpo-service-single-title">
                                        <h3>Our Capabilities</h3>
                                    </div>
                                    <p>Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id
                                        risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis
                                        sollicitudin diam.</p>
                                    <ul>
                                        <li>Non saed velit dictum quam risus pharetra esta.</li>
                                        <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                        <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                        <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                        <li>Elit curabitur amet risus bibendum.</li>
                                    </ul>
                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        <h3>Our approach</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean
                                        tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi
                                        eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit
                                        elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae
                                        id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem
                                        adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce
                                        vulputate diam interdum morbi ac a.</p>
                                </div>
                                <div className="wpo-service-single-item list-widget">
                                    <div className="wpo-service-single-title">
                                        <h3>Our Work Process</h3>
                                    </div>
                                    <ul>
                                        <li>Non saed velit dictum quam risus pharetra esta.</li>
                                        <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                        <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                        <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                    </ul>
                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        <h3>Related Service</h3>
                                    </div>
                                    <div className="wpo-service-area">
                                        <div className="row align-items-center">
                                            {Services.slice(0,3).map((service, srv) => (
                                                <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                                    <div className="wpo-service-item">
                                                        <i className={`fi ${service.icon}`} ></i>
                                                        <h2>{service.sTitle}</h2>
                                                        <p>Lacus, etiam sed est eu tempus need Temer diam congue.</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-contact-area">
                                        <div className="wpo-contact-title">
                                            <h2>Have project in mind? Let's discuss</h2>
                                            <p>Get in touch with us to see how we can help you with your project</p>
                                        </div>
                                        <div className="wpo-contact-form-area">
                                            <Contact/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ServiceSidebar/>
                    </div>
                </div>
            </div>
            <Footer2/>
            <Scrollbar />
        </Fragment>
    )
};
export default ServiceSinglePage;
