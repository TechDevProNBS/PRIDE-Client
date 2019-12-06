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
/*PRIDE buttons remain blue once clicked */
P() {
  document.getElementById("P").style.backgroundColor = "blue";
}
R() {
document.getElementById("R").style.backgroundColor = "blue";
}
I() {
document.getElementById("I").style.backgroundColor = "blue";
}
D() {
document.getElementById("D").style.backgroundColor = "blue";
}
E() {
document.getElementById("E").style.backgroundColor = "blue";
}
/*PRIDE buttons remain blue once clicked */
    render(){
        return(
            <div>
                <table id="table" className="table" >
                    <tbody>
                        <tr> <td>To: <input id="rempno" placeholder="Their Employee Number"></input></td>    </tr>

                          <tr><td>Recognising:
                          <span class="dropdown"> <button id="P" onClick={() => this.P()}className="button1">P</button> <span class="dropdown-content"> <p>Putting members first.</p></span> </span>
                          <span class="dropdown"> <button id="R" onClick={() => this.R()}className="button1">R</button> <span class="dropdown-content"> <p>Rising to the challenge.</p></span> </span>
                          <span class="dropdown"> <button id="I" onClick={() => this.I()}className="button1">I</button> <span class="dropdown-content"> <p>Inspiring trust.</p></span>  </span>
                          <span class="dropdown"> <button id="D" onClick={() => this.D()}className="button1">D</button> <span class="dropdown-content"> <p>Doing the right thing.</p></span> </span>
                          <span class="dropdown"> <button id="E" onClick={() => this.E()}className="button1">E</button> <span class="dropdown-content"> <p>Excelling at relationships.</p></span> </span>
                          </td></tr>
                        <tr>  <td>
                              Comment: <textarea className="textbox" id="message" placeholder="Your Message"></textarea></td></tr>
                        <tr>
                            <td><button id="newbutton" onClick={()=>this.addCard()}>Create New Card</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
