import React, { Component } from 'react';


export default class ShowAllThisEmployee extends Component {
  constructor() {
    super()
    this.state = {
      records: []
    };
  }

  componentDidMount = () => {
    let data = {
      "rempno": "P430221"
    }
    fetch('http://localhost:5000/cards/user'
      , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        // if (data.length === 0) {
        //   alert("No data for user");
        // } else {
          this.setState({
            records: data
          })
        // }
      })
  }

  render() {
    return (
      <div>
        <div>
          <h1>My PRIDE Cards</h1>

            { /* First card */}
            <div className="row">
              <div className="col">
                {this.state.records.map(each => {
                  return (
                    <div className="container" key={each.rempno + each.sempno + each.senddate + each.category} >
                      <div className="card mb-3 new-card">
                        <div className="row no-gutters">
                          <div className="col-md-4">
                            <img
                              src={each.picurl}
                              className="card-img employee-image"
                              alt="Manager"
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
          </div>
          { /* Progress Card */}
      </div>
    )
  }
}
