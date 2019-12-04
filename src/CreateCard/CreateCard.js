import React, { Component } from 'react';

export default class CreateCard extends Component {
  constructor() {
    super()
    this.state = {
      users:[]
    };
  }

    addCard(){
        let data = {
            "rempno": document.getElementById("rempno").value,
            "rname": document.getElementById("rname").value,
            "rmempno": document.getElementById("rmempno").value,
            "sempno": document.getElementById("sempno").value,
            "sname": document.getElementById("sname").value,
            "category": document.getElementById("category").value,
            "senddate": document.getElementById("senddate").value,
            "message": document.getElementById("message").value,
            "picurl": document.getElementById("picurl").value
        }
        fetch(`http://localhost:8000/newCard`, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        window.location.reload()
    }

    render(){
        return(
            <div>
                <table id="table" style={{textAlign:'center'}}>
                    <tbody>
                        <tr>
                            <td><input id="rempno" placeholder="Their Employee Number"></input></td>
                        </tr>
                        <tr>
                            <td><input id="rname" placeholder="Their Name"></input></td>
                        </tr>
                        <tr>
                            <td><input id="rmempno" placeholder="Their Manager's Employee Number"></input></td>
                        </tr>
                        <tr>
                            <td><input id="sempno" placeholder="Your Employee Number"></input></td>
                        </tr>
                        <tr>
                            <td><input id="sname" placeholder="Your Name"></input></td>
                        </tr>
                        <tr>
                            <td><input id="category" placeholder="Letter of PRIDE"></input></td>
                        </tr>
                        <tr>
                            <td><input id="senddate" placeholder="Today's Date in format YYYY-MM-DD"></input></td>
                        </tr>
                        <tr>
                            <td><input id="message" placeholder="Your Message"></input></td>
                        </tr>
                        <tr>
                            <td><input id="picurl" placeholder="URL of Their Picture"></input></td>
                        </tr>
                        <tr>
                            <td><button id="newbutton" onClick={()=>this.addCard()}>Create New Card</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}