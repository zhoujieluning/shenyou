import React from "react";
import { Link } from "react-router-dom";
import abimg2 from "../../images/about/4.jpg";
import shape1 from "../../images/ab-shape-1.png";
import shape2 from "../../images/ab-shape-2.png";
import img1 from "../../images/about/1.png";
import img2 from "../../images/about/2.png";
import img3 from "../../images/about/3.png";
import img4 from "../../images/about/4.png";
import img5 from "../../images/about/5.png";
import img6 from "../../images/about/6.png";
import board from "../../images/BUSINESS.png";
const ClickHandler = () => {
  window.scrollTo(10, 0);
};
const list = [
  {
    img: img1,
    name: "玩具贸易",
  },
  {
    img: img2,
    name: "不锈钢贸易",
  },
  {
    img: img3,
    name: "棕榈油贸易",
  },
  {
    img: img4,
    name: "生猪贸易",
  },
  {
    img: img5,
    name: "螺纹钢贸易",
  },
  {
    img: img6,
    name: "更多贸易",
  },
];

const About = (props) => {
  return (
    <section className="wpo-about-section">
      <div className="about-container row justify-content-center">
        <div className="row justify-content-center about-title">
          业务介绍
          <img src={board}></img>
        </div>
        <div className="row justify-content-between card-wrapper">
          {list.map((item) => (
            <div className="about-card">
              <img src={item.img}></img>
              <div className="about-name">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
