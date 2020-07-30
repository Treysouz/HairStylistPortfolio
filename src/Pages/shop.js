import React, { Component } from "react";
import "../App.css";
import ShopifyBuy from "@shopify/buy-button-js";
import Client from "../shopify";

export default class Home extends Component {
  componentDidMount() {
    var ui = ShopifyBuy.UI.init(Client);
    console.log(ui);
    ui.createComponent("collection", {
      id: 209649795223,
      node: document.getElementById("shopify"),
    });
  }
  render() {
    return (
      <section className="shop">
        <div id="shopify"></div>
      </section>
    );
  }
}
