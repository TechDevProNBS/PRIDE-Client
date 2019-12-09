import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'


export default class AchievementCarousel extends Component {
  constructor() {
    super();
    this.state = {
      records: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:9001/emp_achievements/carousel")
      .then(response => response.json())
      .then(data => {
        this.setState({
          records: data
        });
      });
  };

  render() {
    return (
      <Carousel>
        {this.state.records.map(each => {
          return (
            <Carousel.Item key={`${each.rempno},${each.achievement_id}`}>
              <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=First slide&bg=373940"
                  alt={each.rempno}
              />
              <Carousel.Caption>
                <p>{each.rempo} has completed the achievement {each.achievement_id}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    )
  }
}
        

