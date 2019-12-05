import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar'

import PRIDEWall from '../PRIDEWall/PRIDEWall';
import Achievements from '../PRIDEWall/Achievements';


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
                    <div className="div1"><img src="favicon.ico" alt="favicon"></img>

{ /* First card */}
                    
                    </div>
{ /* Progress Card */}

                      {/* <div className="div2">
                        <ProgressBar>
                          <ProgressBar striped variant="danger" label={35} animated now={35} key={1} />
                          <ProgressBar  variant="secondary"  label={65} animated now={65} key={2} />
                        </ProgressBar>
                    </div> */}


                <div>
                    <Router>
                    <div class="sidenav">
                        <Link to='/'>Login</Link>
                        <Link to='/PRIDEWall'>PRIDE Wall</Link>
                        <a href='/'>My Sent Cards</a>
                        <Link to='/Achievements'>Milestones</Link>
                        <a href='/'>Login</a>
</div>
                        <div>
                          <Route exact path='/PRIDEWall' component={PRIDEWall}/>
                          <div className="div3">
                          <Route exact path='/Achievements' component={Achievements}/>
                          </div>
                        </div>
                      </Router>
                </div>

            </div>
        </div>
        )
    }
}
