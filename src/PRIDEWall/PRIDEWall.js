import React from "react";
import ShowAllThisMonth from "./showAll";
import "./PRIDEWall.css";
import "../Homepage.css";
import AchievementCarousel from "./Carousel";

export default class PRIDEWall extends React.Component {
  render() {
    return (
      <div>
        <div style={{ height: "478px",  overflowY: "scroll"}} >
          <ShowAllThisMonth/>
        </div>
        <div style={{ position: "fixed", bottom: "0", width: "100%"}}>
          <AchievementCarousel/>
        </div>
      </div>
    )
  }
}
