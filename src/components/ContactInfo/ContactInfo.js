import React from "react";
import shape from "../../images/ct-shape.png";

const ContactInfo = (props) => {
  return (
    <section
      className="contact-info-section section-padding"
      style={{ marginTop: "200px" }}
    >
      <div className="container">
        <div className="office-info">
          <h2 style={{ color: "white", textAlign: "center" }}>
            留下您的联系方式
          </h2>
          <div
            className=" newsletter-widget"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <form onSubmit={() => {}}>
              <div className="input-1">
                <input
                  type="phone"
                  className="form-control"
                  placeholder="手机号"
                  required
                />
              </div>
              <div className="submit clearfix">
                <button type="submit">
                  <i className="fi flaticon-send"></i>
                </button>
              </div>
            </form>
          </div>
          <h2 style={{ color: "white", textAlign: "center", marginTop: 40 }}>
            或联系我们
          </h2>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="office-info-item">
                <div className="office-info-icon">
                  <div className="icon">
                    <i className="fi flaticon-place"></i>
                  </div>
                </div>
                <div className="office-info-text">
                  <p>深圳市福田区XXXXXX</p>
                  <span>公司地址</span>
                </div>
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="office-info-item active">
                <div className="office-info-icon">
                  <div className="icon">
                    <i className="fi flaticon-phone-call"></i>
                  </div>
                </div>
                <div className="office-info-text">
                  <p>185 1323 8932</p>
                  <span>电话</span>
                </div>
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="office-info-item">
                <div className="office-info-icon">
                  <div className="icon">
                    <i className="fi flaticon-email"></i>
                  </div>
                </div>
                <div className="office-info-text">
                  <p>xxxxxxxxxxxxxx@gmail.com</p>
                  <span>邮箱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="ct-shape">
        <img src={shape} alt="shape" />
      </div> */}
    </section>
  );
};

export default ContactInfo;
