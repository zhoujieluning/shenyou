import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import shape1 from "../../images/page-title-shape-1.png";
import shape2 from "../../images/page-title-shape-2.png";
import pageTitle from "../../images/page-title.jpg";

const PageTitle = (props) => {
  return (
    <section className="page-title">
      <a href="http://kh.htsec.com/p/mQjudD" target="_blank">
        <img src={pageTitle} />
      </a>
    </section>
  );
};

export default PageTitle;
