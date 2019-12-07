import React, { Component } from "react";

export default class Carousel extends Component {
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
      <div>
        <div className="container">
          <div className="row">
            {this.state.records.map(each => {
              return (
                <div key={`${each.rempno},${each.achievement_id}`}>
                  <span>{each.rempno} has achieved {each.achievement_id}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
        

