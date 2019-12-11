import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar'
import PRIDEWall from '../PRIDEWall/PRIDEWall';
import Achievements from '../PRIDEWall/Achievements';
import MyCards from '../MyPRIDE/MyCards';
import MySentCards from '../MyPRIDE/MySentCards';

export default class MyPRIDE extends React.Component {
  constructor() {
    super()
    this.state = {
      records: []
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:5000/cards/cardNumbers')
      .then(response => response.json())
      .then(data => {
        let p = data.P;
        let r = data.R;
        let i = data.I;
        let d = data.D;
        let e = data.E;

        fetch(`http://localhost:9001/emp_achievements/P430221/${p}/${r}/${i}/${d}/${e}`)
          .then(response => response.json())
          .then(data => {
            this.setState({
              records: data
            })
          })
      })
  }

  calculateExperience = () => {
    var total = 0
    var level
    var outof = 0
    this.state.records.forEach(each => {
      total += each.pointsachieved
    })
    if (total < 30) {
      level = "PRIDE Recruit"
      outof = 30
    }
    else if (total >= 30 && total < 100) {
      level = "PRIDE Learner"
      outof = 100
    }
    else {
      level = "PRIDE Expert"
      outof = total
    }
    var toachieve = outof - total
    var label = total+"/"+outof
    var experience = { "level": level, "pointsoutof": outof, "pointsachieved": total, "pointstoachieve": toachieve, "label":label}
    return experience
  }
  render() {
    return (
      <div>
        <Router>
          <div className="container-fluid text-center">
            <div className="row content">
              <div className="col-sm-2 sidenav">
                <div> 
                  <div className="image-wrapper">
                    <img className="scale-image" src="Capture.PNG" alt="Capture"></img>
                    <ProgressBar style={{border:'solid', borderWidth:'1px'}}>
                      <ProgressBar striped variant="danger" label={this.calculateExperience().label} animated now={this.calculateExperience().pointsachieved} key={1} max={this.calculateExperience().pointsoutof} />
                    </ProgressBar>
                    {/* <ProgressBar  style={{ maxHeight:'auto',maxWidth: '170px',marginLeft:'auto',marginRight:'auto'}}>
                      <ProgressBar  striped variant="danger" label={this.calculateExperience().pointsachieved} animated now={this.calculateExperience().pointsachieved} key={1} max={this.calculateExperience().pointsoutof} />
                      <ProgressBar variant="secondary" label={this.calculateExperience().pointstoachieve} animated now={this.calculateExperience().pointstoachieve} key={2} />
                    </ProgressBar> */}
                  </div>
                  <div style={{ fontSize:'12px'}}>
                    Experience Level: {this.calculateExperience().level}
                  </div>

                </div>
                <Link to='/MyCards'>My PRIDE Cards</Link>
                <Link to='/MySentCards'>My Sent Cards</Link>
                <Link to='/Achievements'>Milestones</Link>
              </div>

              <div class="col-sm-10" style={{ position: "relative", height: "432px",  overflowY: "scroll",}}>
                <Route exact path='/PRIDEWall' component={PRIDEWall} />
                <Route exact path='/MyCards' component={MyCards} />
                <Route exact path='/MySentCards' component={MySentCards} />
                <Route exact path='/Achievements' component={Achievements} />
              </div>
            </div>
          </div>
        </Router>
      </div>

    )
  }
}
