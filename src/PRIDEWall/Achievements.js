import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

export default class Achievements extends Component {
  constructor() {
    super()
    this.state = {
      records:[]
    };
  }

  componentDidMount=()=> {
      fetch('http://localhost:9001/emp_achievements/P430221/1/5/2/1/1')
          .then(response => response.json())
          .then(data => {
            this.setState({
                records:data
            })
          })
      }

      calculateExperience=()=> {
          var total = 0
          {this.state.records.map(each => {
              total += each.pointsachieved
          })}
          var level
          if(total<20){
              level = "Starter"
          }
          else if(total>=20 && total<100){
              level = "Intermediate"
          }
          else if(total>=100){
              level = "Expert"
          }
          return level
      }

      render(){
          var total = 0
          return(
              <div>
                  <div>
                      <h1>Milestones</h1>
                  </div>
                  <table style={{textAlign:'center'}}>
                      <tbody>

                          <tr>
                              <td>Experience Level: {this.calculateExperience()}</td>
                          </tr>
                          {this.state.records.map(each => {
                              total = (total + each.pointsachieved)
                              return (
                                  <tr key={each.achievementdesc}>
                                      <td style={{margin:'5px'}}>{each.achievementdesc}
                                      <div className="div4">
                                       <ProgressBar>
                                         <ProgressBar striped variant="danger" label={35} animated now={35} key={1} />
                                         <ProgressBar  variant="secondary"  label={65} animated now={65} key={2} />
                                       </ProgressBar>
                                      </div>
                                      </td>
                                      <td style={{margin:'5px'}}>{each.points}</td>
                                      <td style={{margin:'5px'}}>{each.progressbar}</td>
                                      <td style={{margin:'5px'}}>{each.progressachieved}</td>
                                  </tr>
                              )
                          })}
                      </tbody>
                  </table>
              </div>
          )
      }
  }
