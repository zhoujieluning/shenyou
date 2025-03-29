import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderTopbar2 from '../HeaderTopbar2/HeaderTopbar2'
import MobileMenu from '../MobileMenu/MobileMenu'
import Logo from '../../images/logo-2.png'

const Header3 = (props) => {
  const [menuActive, setMenuState] = useState(false)
  const SubmitHandler = (e) => {
    e.preventDefault()
  }

  const ClickHandler = () => {
    window.scrollTo(10, 0)
  }

  return (
    <header id="header" className={`wpo-header-style-7 ${props.topbarNone}`}>
      <HeaderTopbar2 />
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="navbar-header">
                  <Link
                    onClick={ClickHandler}
                    className="navbar-brand"
                    to="/home"
                  >
                    <img src={Logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/">
                        首页
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/home#ServiceSection">
                        大宗商品交易
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <a onClick={ClickHandler}>金融论坛</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-2 col-2">
                <div className="header-right">
                  <div className="close-form">
                    <Link
                      onClick={ClickHandler}
                      className="theme-btn"
                      to="/home#ContactInfo"
                    >
                      联系我们
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header3
