import React, { Component } from 'react';

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
                    <h1>Your PRIDE Cards</h1>
                </div>
                <table style={{textAlign:'center'}}>
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