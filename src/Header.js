import "./Header.scss";
import React from "react";
import logo from './logo.png';

function Header() {
  return (
    <div>
      <header class="page-header">
        <img class="logo" src={logo} alt=""/>
        <nav>
          <ul class="main-nav">
            <li class="list-item">Home</li>
            <li class="list-item">Projects</li>
            <li class="list-item">Resume</li>
            <li class="list-item">About Me</li>
          </ul>
        </nav>
        </header>
    </div>
  );
}

export default Header;
