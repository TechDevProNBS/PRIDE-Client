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
        fetch('http://localhost:5000/cards/cardNumbers')
        .then(response => response.json())
        .then(data => {
            let p=data.P;
            let r=data.R;
            let i=data.I;
            let d=data.D;
            let e=data.E;

            fetch(`http://localhost:9001/emp_achievements/P430221/${p}/${r}/${i}/${d}/${e}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    records:data
                })
            })
        })
    }

    calculateExperience=()=> {
        var total = 0
        var level
        var outof = 0
        {this.state.records.map(each => {
            total += each.pointsachieved
        })}
        if(total<20){
            level = "Starter"
            outof = 20
        }
        else if(total>=20 && total<100){
            level = "Intermediate"
            outof = 100
        }
        else{
            level = "Expert"
            outof = total
        }
        var experience = {"level":level,"pointsoutof":outof,"pointsachieved":total}
        return experience
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
                              <td>Experience Level: {this.calculateExperience().level}</td>
                              <td>Experience Level: {this.calculateExperience().pointsachieved}</td>
                              <td>Experience Level: {this.calculateExperience().pointsoutof}</td>
                          </tr>
                          {this.state.records.map(each => {
                              total = (total + each.pointsachieved)
                              return (
                                  <tr key={each.achievementdesc}>
                                      <td style={{margin:'5px'}}>{each.achievementdesc}
                                      <div className="div4">
                                       <ProgressBar >
                                         <ProgressBar striped variant="danger" label={each.progressachieved} animated now={each.progressachieved} key={1} max={each.progressbar} />
                                         <ProgressBar  variant="secondary"  label={each.progressbar} animated now={each.progressbar} key={2} />
                                       </ProgressBar>
                                      </div>
                                      </td>

                                      <td style={{margin:'5px'}}>{each.points}pp</td>

                                  </tr>
                              )
                          })}
                      </tbody>
                  </table>
              </div>
          )
      }
  }
