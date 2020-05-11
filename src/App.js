import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/navbar";
import Router from "./router";
import Header from "./Components/header";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: window.location.href.substr(
        window.location.href.indexOf("#")
      ),
    };
  }
  getNewPage = (page) => {
    this.setState({
      currentPage: page,
    });
  };
  render() {
    return (
      <main>
        <Header getNewPage={this.getNewPage}></Header>
        <NavBar
          currentPage={this.state.currentPage}
          getNewPage={this.getNewPage}
        ></NavBar>
        <Router currentPage={this.state.currentPage}></Router>
      </main>
    );
  }
}
