import React, { Component } from "react";
import "../App.css";
import Header from "./header";

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <Header getNewPage={this.props.getNewPage}></Header>

        <div className="contactBar">
          <div className="websiteTitle">
            <a
              href="#home"
              onClick={() => {
                this.props.getNewPage("#home");
              }}
            >
              <h1>Neishastylist</h1>
            </a>
          </div>
          <div className="contactInfo">
            <a href="mailto:neishastylist@gmail.com">
              <i className="far fa-envelope"></i>
              <span>neishastylist@gmail.com</span>
            </a>
          </div>
          <div className="contactInfo">
            <a href="tel:347-237-9564">
              <i className="fas fa-phone"> </i>
              <span>(347) 237-9564</span>
            </a>
          </div>
          <div className="contactInfo">
            <a href="https://www.instagram.com/neishastylist/?hl=en">
              <i className="fab fa-instagram"></i>
              <span>@Neishastylist</span>
            </a>
          </div>
        </div>
        <div className="navLinksContainer">
          <a
            className="navLink"
            href="#about"
            onClick={() => {
              this.props.getNewPage("#about");
            }}
          >
            <p>About Me</p>
          </a>
          <a
            className="navLink"
            href="#portfolio"
            onClick={() => {
              this.props.getNewPage("#portfolio");
            }}
          >
            <p>Portfolio</p>
          </a>
          <a
            className="navLink"
            href="#services"
            onClick={() => {
              this.props.getNewPage("#services");
            }}
          >
            <p>Services</p>
          </a>
          <a className="navLink" href="#shop" onClick={() => {
                this.props.getNewPage("#shop");
              }}>
            <p>Shop</p>
          </a>
        </div>
      </nav>
    );
  }
}
