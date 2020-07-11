import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/navbar";
import Router from "./router";
import $ from "jquery";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: window.location.href.substr(
        window.location.href.indexOf("#")
      ),
    };
  }

  componentDidMount() {
    this.getNewPage(this.state.currentPage);
  }
  getNewPage = (page) => {
    this.setState({
      currentPage: page,
    });

    $(".navLink").removeClass("active");
    $("[href='" + page + "']").addClass("active");
  };
  render() {
    return (
      <main>
        <NavBar
          currentPage={this.state.currentPage}
          getNewPage={this.getNewPage}
        ></NavBar>
        <Router currentPage={this.state.currentPage}></Router>
      </main>
    );
  }
}
