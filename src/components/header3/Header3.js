import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderTopbar2 from '../HeaderTopbar2/HeaderTopbar2'
import MobileMenu from '../MobileMenu/MobileMenu'
import Logo from '../../images/logo.png'
import Logo1 from '../../images/logo1.png'

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
      <div
        className={`wpo-site-header ${props.hclass}`}
        style={{ background: '#ffb22c' }}
      >
        <nav
          className="navigation navbar navbar-expand-lg navbar-light"
          style={{ background: '#ffb22c' }}
        >
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
                    <img src={Logo1} alt="" style={{ width: '120px' }} />
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
                      <a onClick={ClickHandler} to="/blog-fullwidth">
                        金融论坛
                      </a>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/home#ContactInfo">
                        联系我们
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-lg-3 col-md-2 col-2">
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
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header3
