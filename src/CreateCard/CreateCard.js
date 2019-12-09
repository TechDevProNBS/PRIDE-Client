import React, { Component } from 'react';
import moment from 'moment';


export default class CreateCard extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        };
    }

    addCard() {
        let data = {
            "rempno": document.getElementById("rempno").value,
            // "rname": "Dummy Data Receiver", //document.getElementById("rname").value,
            "rmempno": "P123456", //document.getElementById("rmempno").value,
            "sempno": "P654321", //document.getElementById("sempno").value,
            // "sname": "Dummy Data Sender", //document.getElementById("sname").value,
            "category": document.getElementById("category").value,
            "senddate": moment().format("YYYY-MM-DD"),
            "message": document.getElementById("message").value,
            "picurl": "www.pic.co.uk/dummydata" //document.getElementById("picurl").value
        }
        console.log(data);
        fetch(`http://localhost:5000/cards/newCard`, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
   
        .then(alert("Card Added"))
        window.location.reload();
    }

    /*PRIDE buttons remain #303030 once clicked */
    P() {
        document.getElementById("P").style.backgroundColor = "#303030";
        document.getElementById("category").value = "P";
        document.getElementById("R").style.backgroundColor = "#004a8f";
        document.getElementById("I").style.backgroundColor = "#004a8f";
        document.getElementById("D").style.backgroundColor = "#004a8f";
        document.getElementById("E").style.backgroundColor = "#004a8f";
    }
    R() {
      document.getElementById("P").style.backgroundColor = "#004a8f";
      document.getElementById("R").style.backgroundColor = "#303030";
      document.getElementById("category").value = "R";
      document.getElementById("I").style.backgroundColor = "#004a8f";
      document.getElementById("D").style.backgroundColor = "#004a8f";
      document.getElementById("E").style.backgroundColor = "#004a8f";
    }
    I() {
      document.getElementById("P").style.backgroundColor = "#004a8f";
      document.getElementById("R").style.backgroundColor = "#004a8f";
      document.getElementById("I").style.backgroundColor = "#303030";
      document.getElementById("category").value ="I";
      document.getElementById("D").style.backgroundColor = "#004a8f";
      document.getElementById("E").style.backgroundColor = "#004a8f";

    }
    D() {
      document.getElementById("P").style.backgroundColor = "#004a8f";
      document.getElementById("R").style.backgroundColor = "#004a8f";
      document.getElementById("I").style.backgroundColor = "#004a8f";
      document.getElementById("D").style.backgroundColor = "#303030";
      document.getElementById("category").value = "D";
      document.getElementById("E").style.backgroundColor = "#004a8f";
    }
    E() {
      document.getElementById("P").style.backgroundColor = "#004a8f";
      document.getElementById("R").style.backgroundColor = "#004a8f";
      document.getElementById("I").style.backgroundColor = "#004a8f";
      document.getElementById("D").style.backgroundColor = "#004a8f";
      document.getElementById("E").style.backgroundColor = "#303030";
      document.getElementById("category").value = "E";
    }

    render() {
        return (

            <div>
                <input type="text" id="category" readOnly style={{ visibility: "collapse" }}/>
                <table id="table" className="table" >
                    <tbody>
                    <tr><td>To: <input id="rempno" placeholder="Their Employee Number"></input></td></tr>
                    <tr><td>Recognising:
                        <span className="dropdown"> <button id="P" onClick={() => this.P()} className="button1">P</button> <span className="dropdown-content"> <p>Putting members first.</p></span> </span>
                        <span className="dropdown"> <button id="R" onClick={() => this.R()} className="button1">R</button> <span className="dropdown-content"> <p>Rising to the challenge.</p></span> </span>
                        <span className="dropdown"> <button id="I" onClick={() => this.I()} className="button1">I</button> <span className="dropdown-content"> <p>Inspiring trust.</p></span>  </span>
                        <span className="dropdown"> <button id="D" onClick={() => this.D()} className="button1">D</button> <span className="dropdown-content"> <p>Doing the right thing.</p></span> </span>
                        <span className="dropdown"> <button id="E" onClick={() => this.E()} className="button1">E</button> <span className="dropdown-content"> <p>Excelling at relationships.</p></span> </span>
                    </td></tr>
                    <tr><td>
                        Comment: <textarea className="textbox" id="message" placeholder="Your Message"></textarea></td></tr>
                    <tr>
                        <td><button id="newbutton" onClick={() => this.addCard()}>Create New Card</button></td>
                    </tr>
                </tbody>
                </table>
            </div >
        )
    }
}
