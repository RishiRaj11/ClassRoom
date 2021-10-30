import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
const Nav = () => {
  return (
    <div>
      <ul>
        <li className="active">
          <NavLink to="/home" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeClassName="active">
            SignUp
          </NavLink>
        </li>

        <li style={{ float: "right" }}>
          <NavLink to="/home">LogOut</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
