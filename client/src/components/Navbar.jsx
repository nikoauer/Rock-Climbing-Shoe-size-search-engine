import { useState } from "react";
import { Link } from "react-router-dom";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Navbar = () => {
  <>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
        <Nav.Link as={Link} to='/'>
            WebSiteName
          </Nav.Link>
        </div>
        <ul class="nav navbar-nav">
          <li class="active">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          </li>
            <Nav.Link as={Link} to='/savedshoes'>Saved Shoes</Nav.Link>
          <li>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="">
              <span class="glyphicon glyphicon-user"></span> Sign Up
            </a>
          </li>
          <li>
            <a href="">
              <span class="glyphicon glyphicon-log-in"></span> Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </>;
};

export default Navbar;
