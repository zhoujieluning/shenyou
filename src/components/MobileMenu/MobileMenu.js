import React, { Fragment, useState } from 'react'
import List from '@material-ui/core/List'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/List'
import Collapse from '@material-ui/core/Collapse'
import { NavLink } from 'react-router-dom'
import './style.css'
import icon1 from '../../images/icon/home.png'
import icon2 from '../../images/icon/trade.png'
import icon3 from '../../images/icon/forum.png'
import icon4 from '../../images/icon/call.png'

import Logo from '../../images/logo.png'

const menus = [
  {
    id: 1,
    title: '首页',
    link: '/',
    icon: icon1,
  },

  {
    id: 2,
    title: '大宗商品交易',
    link: '#ServiceSection',
    icon: icon2,
  },

  {
    id: 3,
    title: '金融论坛',
    link: '#BlogSection',
    icon: icon3,
  },
  {
    id: 4,
    title: '联系我们',
    link: '#ContactInfo',
    icon: icon4,
  },
]

const MobileMenu = () => {
  const [openId, setOpenId] = useState(0)
  const [menuActive, setMenuState] = useState(false)

  const ClickHandler = () => {
    window.scrollTo(10, 0)
  }

  return (
    <div>
      <div className={`mobileMenu ${menuActive ? 'show' : ''}`}>
        <div className="menu-header">
          <img src={Logo} />
          <div className="menu-close">
            <div className="clox" onClick={() => setMenuState(!menuActive)}>
              <i className="ti-close"></i>
            </div>
          </div>
        </div>

        <ul className="responsivemenu">
          {menus.map((item, mn) => {
            return (
              <ListItem key={mn}>
                <div className="item-wrapper">
                  <img src={item.icon} />
                  <Link to={item.link} onClick={() => setMenuState(false)}>
                    {item.title}
                  </Link>
                </div>
              </ListItem>
            )
          })}
        </ul>
      </div>

      <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
        <button type="button" className="navbar-toggler open-btn">
          <span className="icon-bar first-angle"></span>
          <span className="icon-bar middle-angle"></span>
          <span className="icon-bar last-angle"></span>
        </button>
      </div>
    </div>
  )
}

export default MobileMenu
