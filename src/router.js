import React, { Component } from "react";
import Home from "./Pages/home";
import About from "./Pages/about";



export default class Router extends Component {
    render(){
        switch(this.props.currentPage){
            case "#home":{
                return(
                    <Home></Home>
                )
            }
            case "#about":{
                return(
                    <About></About>
                )
            }        
            default:{
                return(
                    <Home></Home>
                )
            }
        }
        
    }
}
