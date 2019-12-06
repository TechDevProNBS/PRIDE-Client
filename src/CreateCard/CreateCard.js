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
        window.location.reload();
    }

    /*PRIDE buttons remain blue once clicked */
    P() {
        document.getElementById("P").style.backgroundColor = "blue";
        document.getElementById("category").value = "P";
    }
    R() {
        document.getElementById("R").style.backgroundColor = "blue";
        document.getElementById("category").value = "R";
    }
    I() {
        document.getElementById("I").style.backgroundColor = "blue";
        document.getElementById("category").value = "I";
    }
    D() {
        document.getElementById("D").style.backgroundColor = "blue";
        document.getElementById("category").value = "D";
    }
    E() {
        document.getElementById("E").style.backgroundColor = "blue";
        document.getElementById("category").value = "E";
    }

    render() {
        return (

            <div>
                <input type="text" id="category" readOnly style={{ visibility: "collapse" }}/>
                <table id="table" className="table" >
                    <tbody>
                    <tr> <td>To: <input id="rempno" placeholder="Their Employee Number"></input></td>    </tr>

                    <tr><td>Recognising:
                        <span class="dropdown"> <button id="P" onClick={() => this.P()} className="button1">P</button> <span class="dropdown-content"> <p>Putting members first.</p></span> </span>
                        <span class="dropdown"> <button id="R" onClick={() => this.R()} className="button1">R</button> <span class="dropdown-content"> <p>Rising to the challenge.</p></span> </span>
                        <span class="dropdown"> <button id="I" onClick={() => this.I()} className="button1">I</button> <span class="dropdown-content"> <p>Inspiring trust.</p></span>  </span>
                        <span class="dropdown"> <button id="D" onClick={() => this.D()} className="button1">D</button> <span class="dropdown-content"> <p>Doing the right thing.</p></span> </span>
                        <span class="dropdown"> <button id="E" onClick={() => this.E()} className="button1">E</button> <span class="dropdown-content"> <p>Excelling at relationships.</p></span> </span>
                    </td></tr>
                    <tr>  <td>
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
