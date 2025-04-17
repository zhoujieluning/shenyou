import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import About from "../../components/about/about";
import BlogSection from "../../components/BlogSection/BlogSection";
import ArticleSection from "../../components/ArticleSection/ArticleSection";
import CtaSection from "../../components/ctaSection/ctaSection";
import Footer from "../../components/footer/Footer";
import FunFact from "../../components/FunFact/FunFact";
import Hero from "../../components/hero/hero";
import Navbar from "../../components/Navbar/Navbar";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import Scrollbar from "../../components/scrollbar/scrollbar";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import TeamSection from "../../components/TeamSection/TeamSection";
import Testimonial from "../../components/Testimonial/Testimonial";
import PartnerSection from "../../components/PartnerSection/PartnerSection";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import abimg from "../../images/about.jpg";

const HomePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash]); // 依赖 hash 变化
  return (
    <Fragment>
      <Navbar hclass={"wpo-header-style-1"} topbarNone={"topbar-none"} />
      <Hero />
      <About abimg={abimg} />
      <ServiceSection />
      {/* <CtaSection /> */}
      {/* <FunFact />
      <TeamSection />
      <ProjectSection />
      <Testimonial /> */}
      <ArticleSection />
      {/* <BlogSection /> */}
      {/* <PartnerSection /> */}
      <ContactInfo />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default HomePage;
