import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar'
import PRIDEWall from '../PRIDEWall/PRIDEWall';
import Achievements from '../PRIDEWall/Achievements';
import MyCards from '../MyPRIDE/MyCards';
import MySentCards from '../MyPRIDE/MySentCards';

export default class MyPRIDE extends React.Component{
    render(){
        return(
          <div>
            <Router>
              <div className="container-fluid text-center">
                <div className="row content">
                  <div className="col-sm-2 sidenav">

                    <div>
                    </div>
                    { /* Progress Card */}
                    <div>
                      <img src="Capture.PNG" alt="Capture"></img>

                      <ProgressBar>
                        <ProgressBar striped variant="danger" label={Achievements.progressachieved} animated now={Achievements.progressachieved} key={1} />
                        {/*<ProgressBar variant="secondary" label={Achievements.pointstoachieve} animated now={Achievements.pointstoachieve} key={2} /> */}
                      </ProgressBar>
                    </div>
                    <Link to='/MyCards'>My PRIDE Cards</Link>
                    <Link to='/MySentCards'>My Sent Cards</Link>
                    <Link to='/Achievements'>Milestones</Link>
                  </div>

                  <div>
                    <Route exact path='/PRIDEWall' component={PRIDEWall} />
                    <Route exact path='/MyCards' component={MyCards} />
                    <Route exact path='/MySentCards' component={MySentCards} />
                    <div className="col-8 text-left">
                    <Route exact path='/Achievements' component={Achievements} />
                    </div>
                  </div>
                </div>
              </div>
            </Router>
          </div>

    )
  }
}
