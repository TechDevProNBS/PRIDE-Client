import React, { Component } from 'react';
import Bar from 'react-bootstrap/ProgressBar'


export default class ShowAllThisEmployee extends Component {
  constructor() {
    super()
    this.state = {
      records:[]
    };
  }

    componentDidMount=()=> {
    fetch('http://localhost:8000/findAllCardsThisEmployee/P430221')
        .then(response => response.json())
        .then(data => {
          this.setState({
              records:data
          })
        })
    }

    render(){
        return(
            <div>
                <div>
                     <span>Welcome Isaac Douglas!</span>
                    <div className="div1"><img src="favicon.ico" alt="favicon"></img><div className="div3">
<span>My PRIDE Cards</span>
                    <div className="card mb-3 new-card">
                                    <div className="row no-gutters">
                                      <div className="col-md-4">
                                        <img
                                          src="https://cwind.global/wp-content/uploads/2017/04/Head-and-shoulder-silhouette.jpg"
                                          className="card-img employee-image"
                                          alt="Image of Manager"
                                        />
                                        <div className="prideletter">
                                          <h1>
                                            <b> P </b>
                                          </h1>
                                        </div>
                                      </div>
                                      <div className="col-md-8">
                                        <div className="card-body">
                                          <h5 className="card-title">
                                            <b>Mark Bates</b>
                                          </h5>
                                          <p className="card-text">
                                          Well done for completing the TDP!
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

{ /* Next card */}

                                  <div className="card mb-3 new-card">
                                                  <div className="row no-gutters">
                                                    <div className="col-md-4">
                                                      <img
                                                        src="https://cwind.global/wp-content/uploads/2017/04/Head-and-shoulder-silhouette.jpg"
                                                        className="card-img employee-image"
                                                        alt="Image of Manager"
                                                      />
                                                      <div className="prideletter">
                                                        <h1>
                                                          <b> E </b>
                                                        </h1>
                                                      </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                      <div className="card-body">
                                                        <h5 className="card-title">
                                                          <b>The Shafeeq</b>
                                                        </h5>
                                                        <p className="card-text">
                                                          Hello my friends..
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>

{ /* Next card */}

<div className="card mb-3 new-card">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src="https://cwind.global/wp-content/uploads/2017/04/Head-and-shoulder-silhouette.jpg"
                      className="card-img employee-image"
                      alt="Image of Manager"
                    />
                    <div className="prideletter">
                      <h1>
                        <b> R </b>
                      </h1>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        <b>Keiran Read</b>
                      </h5>
                      <p className="card-text">
                        Class pool skills mate..
                      </p>
                    </div>
                  </div>
                </div>
              </div>




              <div className="card mb-3 new-card">
                              <div className="row no-gutters">
                                <div className="col-md-4">
                                  <img
                                    src="https://cwind.global/wp-content/uploads/2017/04/Head-and-shoulder-silhouette.jpg"
                                    className="card-img employee-image"
                                    alt="Image of Manager"
                                  />
                                  <div className="prideletter">
                                    <h1>
                                      <b> D </b>
                                    </h1>
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <div className="card-body">
                                    <h5 className="card-title">
                                      <b>Matthew Kemp</b>
                                    </h5>
                                    <p className="card-text">
                                      Top bants.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                    </div>
                    </div>


                      <div className="div2">
                        <ProgressBar>
                          <ProgressBar striped variant="danger" label={35} animated now={35} key={1} />
                          <ProgressBar  variant="secondary"  label={65} animated now={65} key={2} />
                        </ProgressBar>
                    </div>

                    <div class="sidenav">
  <a href='/'>My PRIDE Cards</a>
  <a href='/'>My Sent Cards</a>
  <a href='/Achievements'>Milestones</a>
  <a href='/'>Login</a>
</div>

                </div>

                <table className="spacer">
                    <tbody>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                PRIDE Category
                            </th>
                            <th>
                                Date
                            </th>
                            <th>
                                Message
                            </th>
                        </tr>
                        {this.state.records.map(each => {
                            return (
                                <tr key={each.rempno+each.sempno+each.senddate+each.category}>
                                    <td style={{margin:'5px'}}>{each.rname}</td>
                                    <td style={{margin:'5px'}}>{each.category}</td>
                                    <td style={{margin:'5px'}}>{each.senddate.substring(8,10)+each.senddate.substring(4,9)+each.senddate.substring(1,4)}</td>
                                    <td style={{margin:'5px'}}>{each.message}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
