import React from "react";
import { NavLink, useLocation } from "react-router-dom";
const LeftNav = () => {
  // extract pathname from location
  const { pathname } = useLocation();
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">          
          <NavLink
            to="/"
            className={({ isActive }) => (['/'].includes(pathname) ? "active-left-nav" : "")}
          >
            <img src="./img/icons/home.svg" alt="home" />
          </NavLink>
          <br />
          <NavLink
            to="/trending"
            className={({ isActive }) => (isActive ? "active-left-nav" : "")}
          >
            <img src="./img/icons/rocket.svg" alt="trend" />
          </NavLink>
          <br />
          <NavLink
            to="/profil"
            className={({ isActive }) => (isActive ? "active-left-nav" : "")}
          >
            <img src="./img/icons/user.svg" alt="profil" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
