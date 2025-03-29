import React, { Fragment, useState } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/List'
import Collapse from '@material-ui/core/Collapse'
import { NavLink } from 'react-router-dom'
import './style.css'

const menus = [
  {
    id: 1,
    title: '首页',
    link: '/',
  },

  {
    id: 2,
    title: '大宗商品交易',
    link: '#ServiceSection',
  },

  {
    id: 3,
    title: '金融论坛',
    link: '#BlogSection',
  },
  {
    id: 4,
    title: '联系我们',
    link: '#ContactInfo',
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
        <div className="menu-close">
          <div className="clox" onClick={() => setMenuState(!menuActive)}>
            <i className="ti-close"></i>
          </div>
        </div>

        <ul className="responsivemenu">
          {menus.map((item, mn) => {
            return (
              <ListItem
                className={item.id === openId ? 'active' : null}
                key={mn}
              >
                <a
                  className="active"
                  href={item.link}
                  onClick={() => setMenuState(false)}
                >
                  {item.title}
                </a>
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
