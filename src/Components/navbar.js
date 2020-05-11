import React, { Component } from "react";
import "../App.css";

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="contactBar">
          <div className="contactInfo">
            <i class="far fa-envelope"></i>
            <a href="mailto:neishastylist@gmail.com">neishastylist@gmail.com</a>
          </div>
          <div className="contactInfo">
            <i className="fas fa-phone"> </i>
            <span>(347) 237-9564</span>
          </div>
          <div className="contactInfo">
            <i className="fab fa-instagram"></i>
            <a href="https://www.instagram.com/neishastylist/?hl=en">
              @Neishastylist
            </a>
          </div>
        </div>
        <a
          className="navLink"
          href="#about"
          onClick={() => {
            this.props.getNewPage("#about");
          }}
        >
          <p>About Me</p>
        </a>
        <a className="navLink" href="#portfolio">
          <p>Portfolio</p>
        </a>
        <a className="navLink" href="#services">
          <p>Services</p>
        </a>
        <a className="navLink" href="#shop">
          <p>Shop</p>
        </a>
      </nav>
    );
  }
}
