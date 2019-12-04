import React, { Component } from 'react';

export default class Achievements extends Component {
  constructor() {
    super()
    this.state = {
      records:[]
    };
  }

    componentDidMount=()=> {
    fetch('http://localhost:9001/findAllAchievementsThisMonth')
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
                    <h1>This Month's Achievements</h1>
                </div>
                <table style={{textAlign:'center'}}>
                    <tbody>
                        {this.state.records.map(each => {
                            return (
                                <tr key={each.rempno+each.sempno+each.senddate+each.category}>
                                    <td style={{margin:'5px'}}>{each.rname+" achieved a '"+each.category+"' card!"}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}