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
              <span>Welcome Isaac Douglas!</span>
                <div>

                <div>
                    <Router>
                    <div class="container-fluid text-center">
    <div class="row content">
      <div class="col-sm-2 sidenav">

     <div>
     </div>
{ /* Progress Card */}
 <div>
 <img  src="Capture.PNG" alt="Capture"></img>
 
         <ProgressBar>
           <ProgressBar striped variant="danger" label={35} animated now={35} key={1} />
           <ProgressBar  variant="secondary"  label={65} animated now={65} key={2} />
         </ProgressBar>
     </div>
          <Link to='/'>My PRIDE Cards</Link>
          <Link to='/'>My Sent Cards</Link>
          <Link to='/Achievements'>Milestones</Link>
      </div>

                        <div>
                          <Route exact path='/PRIDEWall' component={PRIDEWall}/>
                          <div class="col-8 text-left">
                          <Route exact path='/Achievements' component={Achievements}/>
                          </div>
                          </div>
                          </div>
                        </div>
                      </Router>
                </div>

            </div>

        </div>
        )
    }
}
