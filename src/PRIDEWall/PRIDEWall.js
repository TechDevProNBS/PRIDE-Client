import React from "react";
import ShowAllThisMonth from "./showAll";
import "./PRIDEWall.css";
import "../Homepage.css";
import Carousel from "./Carousel";

export default class PRIDEWall extends React.Component {
  render() {
    return (
      <div>
        <div>
          <ShowAllThisMonth/>
        </div>
        <div>
          <Carousel/>
        </div>
      </div>
    )
  }
}

        
        
