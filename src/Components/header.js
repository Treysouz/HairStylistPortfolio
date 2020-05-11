import React, { Component } from "react";
import "../App.css";
import Logo from "../Assets/Images/logo.png";

export default class Header extends Component {
  render() {
    return (
      <header>
        <a href="#home" 
          onClick={() => {
            this.props.getNewPage("#home");
          }}
        >
          <img src={Logo} alt="logo"></img>
        </a>
      </header>
    );
  }
}
