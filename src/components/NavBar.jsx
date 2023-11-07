import React from "react";
import {NavLink} from "react-router-dom"
import LogOutButton from "./LogoutButton";
import defaultUserImg from '../assets/user.png'
import logoImg from '../assets/react.svg'
import '../styles/NavBar.css';


const NavBar = () => {
  return(
    <div className='navbar'>
      <div className="logo">
        <NavLink className="home" to="/">
          <img src={logoImg}/>
        </NavLink>
      </div>
      <div className="container">
        <div className="menu-wrap">
          <input type="checkbox" className="toggler" />
          <div className="user">
            <img src={defaultUserImg}/>
          </div>
          <div className="menu">
            <ul>
              <li><LogOutButton className="logout"/></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
