import React, { Component } from "react";
import "../App.css";
import ImageOne from "../Assets/Images/IMG-20200423-WA0000.jpg";
import ImageTwo from "../Assets/Images/IMG-20200423-WA0001.jpg";
import ImageThree from "../Assets/Images/IMG-20200423-WA0002.jpg";
import ImageFour from "../Assets/Images/IMG-20200423-WA0003.jpg";
import ImageFive from "../Assets/Images/IMG-20200423-WA0004.jpg";
import ImageSix from "../Assets/Images/IMG-20200423-WA0005.jpg";
import ImageSeven from "../Assets/Images/IMG-20200423-WA0006.jpg";
import ImageEight from "../Assets/Images/IMG-20200423-WA0007.jpg";

export default class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      showGallery: false,
      clickedImage: "",
    };

    this.gallery = [
      Object.values({ ImageOne }),
      Object.values({ ImageTwo }),
      Object.values({ ImageThree }),
      Object.values({ ImageFour }),
      Object.values({ ImageFive }),
      Object.values({ ImageSix }),
      Object.values({ ImageSeven }),
      Object.values({ ImageEight }),
    ];
  }

  componentDidMount() {
    // for (var index = 0; index < this.gallery.length; index++) {
    //   // var node = document.createElement("img");
    //   // node.src = Object.values(this.gallery[index]);
    //   // node.onclick = function(){(this.openImage(Object.values(this.gallery[index])))};
    //   // document.getElementsByClassName("column")[index % 3].appendChild(node);
    //  document.getElementsByClassName("column")[index % 3]
    // }
  }

  openOverlay = () => {
    this.setState({
      showGallery: !this.state.showGallery,
    });
  };

  setImage = (image) => {
    this.setState({
      clickedImage: Object.values(image),
    });
  };

  render() {
    return (
      <section className="portfolio">
        <div className="bottomFade"></div>
        {this.state.showGallery ? (
          <div className="overlay" onClick={() => this.openOverlay()}>
            <img src={this.state.clickedImage} alt="Hair Example"></img>
          </div>
        ) : null}
        <div className="column">
          {this.gallery.map((image) => {
            if (this.gallery.indexOf(image) % 3 === 0) {
              return (
                <img
                  src={image}
                  alt="Hair Example"
                  key={image}
                  onClick={() => {
                    this.setImage({ image });
                    this.openOverlay();
                  }}
                ></img>
              );
            } else return null;
          })}
        </div>
        <div className="column">
          {this.gallery.map((image) => {
            if (this.gallery.indexOf(image) % 3 === 1) {
              return (
                <img
                  src={image}
                  alt="Hair Example"
                  key={image}
                  onClick={() => {
                    this.setImage({ image });
                    this.openOverlay();
                  }}
                ></img>
              );
            } else return null;
          })}
        </div>
        <div className="column">
          {this.gallery.map((image) => {
            if (this.gallery.indexOf(image) % 3 === 2) {
              return (
                <img
                  src={image}
                  alt="Hair Example"
                  key={image}
                  onClick={() => {
                    this.setImage({ image });
                    this.openOverlay();
                  }}
                ></img>
              );
            } else return null;
          })}
        </div>
      </section>
    );
  }
}
