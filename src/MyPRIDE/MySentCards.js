import React, { Component } from 'react';
import '../PRIDEWall/PRIDEWall.css'


export default class ShowAllThisEmployee extends Component {
  constructor() {
    super()
    this.state = {
      records: [],
      username:sessionStorage.getItem("username"),
      empName:sessionStorage.getItem("empName")
    };
  }

  componentDidMount = () => {
    let data = {
      sempno: this.state.username
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
        <div class="col-sm-10">
          <h1>My Sent Cards</h1>
          <div className="container">
            <div className="row">
              {this.state.records.map(each => {
                return (
                  <div className="col-4" key={each.rempno + each.sempno + each.senddate + each.category}>
                    <div className="card mb-3 new-card">
                      <div className="row no-gutters">
                        <div className="col-md-4">
                        <img
                          src="female-silhouette.png"
                          height="60px"
                          width="40px"
                          className="card-img employee-image"
                          alt="Manager"
                        />
                          <div className="prideletter">
                            <h1>
                              <b>{each.category}</b>
                            </h1>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">
                              <b>{each.emp_name}</b>
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
        </div>

    )
  }
}
