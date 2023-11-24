import React from "react";
import { NavLink } from "react-router-dom";
import LogOutButton from "./LogoutButton";
import defaultUserImg from "../assets/user.png";
import logoImg from "/paris2024.png";
import "../styles/NavBar.css";
import { auth } from "../firebase/FirebaseConfig";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink className="home" to="/">
          <img src={logoImg} />
          <h3>O.M.G.</h3>
        </NavLink>
      </div>
      <div className="container">
        {auth.currentUser ? (
          <>
            <p className="user-name">{auth.currentUser.displayName}</p>
            <div className="menu-wrap">
              <input type="checkbox" className="toggler" />
              <div className="user">
                <img className="user-profile" src={auth.currentUser.photoURL} />
              </div>
              <div className="menu">
                <ul>
                  <li>
                    <LogOutButton className="logout" />
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NavBar;
