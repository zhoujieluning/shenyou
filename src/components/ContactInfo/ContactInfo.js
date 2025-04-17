import React, { useState, useEffect } from "react";
import { message } from "antd";
import shape from "../../images/ct-shape.png";
import { submitPhone } from "../../api/article";

message.config({
  top: 100, // 距离顶部距离
});

const ContactInfo = (props) => {
  const [phone, setPhone] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!phone) {
        message.warning("请填写您的手机号码");
        return;
      } else if (!/^1[3-9]\d{9}$/.test(phone)) {
        message.warning("请填写合法的手机号码");
        setPhone("");
        return;
      }
      await submitPhone(phone);
      message.success("提交成功");
      setPhone("");
    } catch (error) {
      message.error("提交失败: " + error.message);
    }
  };
  return (
    <section id="ContactInfo" className="contact-info-section section-padding">
      <div className="container">
        <div className="office-info">
          <h2 style={{ color: "white", textAlign: "center" }}>
            留下您的联系方式
          </h2>
          <div
            className=" newsletter-widget"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <form onSubmit={submitHandler}>
              <div className="input-1">
                <input
                  type="phone"
                  className="form-control"
                  placeholder="手机号"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
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
                  {/* <span>公司地址</span> */}
                </div>
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="office-info-item">
                <div className="office-info-icon">
                  <div className="icon">
                    <i className="fi flaticon-phone-call"></i>
                  </div>
                </div>
                <div className="office-info-text">
                  <p>185 1111 1111</p>
                  {/* <span>电话</span> */}
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
                  {/* <span>邮箱</span> */}
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
