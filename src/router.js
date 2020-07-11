import React, { Component } from "react";
import Home from "./Pages/home";
import About from "./Pages/about";
import Portfolio from "./Pages/portfolio";
import Services from "./Pages/services";



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
            case "#portfolio":{
                return(<Portfolio></Portfolio>)
            } 
            case "#services":{
                return(<Services></Services>)
            }      
            default:{
                return(
                    <Home></Home>
                )
            }
        }
        
    }
}
