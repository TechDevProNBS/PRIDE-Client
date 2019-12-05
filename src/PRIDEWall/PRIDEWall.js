import React from "react";
import Achievements from "./Achievements";
import ShowAllThisMonth from "./showAll";
import "./PRIDEWall.css";
import "../Homepage.css";

export default class PRIDEWall extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card mb-3 new-card">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src="https://cwind.global/wp-content/uploads/2017/04/Head-and-shoulder-silhouette.jpg"
                      className="card-img employee-image"
                      alt="Image of Manager"
                    />
                    <div className="prideletter">
                      <h1>
                        <b> P </b>
                      </h1>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        <b>Mark Bates</b>
                      </h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscerisque
                        neque nec
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="carousel" className="carousel" data-ride="carousel"></div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <p>
              <b>
                <h1>"Pride card number 1"</h1>
              </b>
            </p>
          </div>
          <a class="carousel-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    );
  }
}
