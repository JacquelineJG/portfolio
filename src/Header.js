import "./Header.scss";
import React from "react";
import logo from './logo.png';

function Header() {
  return (
    <div>
      <header class="page-header">
        <img class="logo" src={logo} alt=""/>
        <p>Hi</p>
        </header>
    </div>
  );
}

export default Header;
