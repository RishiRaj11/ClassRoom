import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
const Nav = () => {
  return (
    <div>
      <ul>
        <li className="active">
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
