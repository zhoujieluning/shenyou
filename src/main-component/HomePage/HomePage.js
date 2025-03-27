import React, {Fragment} from 'react';
import About from '../../components/about/about';
import BlogSection from '../../components/BlogSection/BlogSection';
import CtaSection from '../../components/ctaSection/ctaSection';
import Footer from '../../components/footer/Footer';
import FunFact from '../../components/FunFact/FunFact';
import Hero from '../../components/hero/hero';
import Navbar from '../../components/Navbar/Navbar'
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import abimg from '../../images/about.jpg'

const HomePage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-1'} topbarNone={'topbar-none'}/>
            <Hero/>
            <About abimg={abimg}/>
            <ServiceSection/>
            <CtaSection/>
            <FunFact/>
            <TeamSection/>
            <ProjectSection/>
            <Testimonial/>
            <BlogSection/>
            <PartnerSection/>
            <ContactInfo/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;