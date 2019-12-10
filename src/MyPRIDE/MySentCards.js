import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar'

import PRIDEWall from '../PRIDEWall/PRIDEWall';
import Achievements from '../PRIDEWall/Achievements';


export default class ShowAllThisEmployee extends Component {
  constructor() {
    super()
    this.state = {
      records: []
    };
  }

  componentDidMount = () => {
    let data = {
      "sempno": "P430221"
    }
    fetch('http://localhost:5000/cards/mySentCards'
      , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          alert("No data for user");
        } else {
          this.setState({
            records: data
          })
        }
      })
  }

  render() {
    return (
      <div>
        <div>
  <h1>My Sent Cards</h1>

            { /* First card */}
            <div className="row">
              <div className="col">
                {console.log(this.state.records)}
                {this.state.records.map(each => {
                  return (
                    <div className="container">
                      <div key={each.rempno + each.sempno + each.senddate + each.category} className="card mb-3 new-card">
                        <div className="row no-gutters">
                          <div className="col-md-4">
                            <img
                              src={each.picurl}
                              className="card-img employee-image"
                              alt="Image of Manager"
                            />
                            <div className="button1">
                              <h1>
                                <b>{each.category}</b>
                              </h1>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">
                                <b>{each.rempno}</b>
                              </h5>
                              <p className="card-text">
                                {each.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              </div>
          { /* Progress Card */}
        </div>
      </div>
    )
  }
}
