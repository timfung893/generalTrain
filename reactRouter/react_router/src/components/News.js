import React, { Component } from "react";
import { Routes } from "react-router";

class News extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-4">
        <div className="card-deck">
          <div className="card">
            <a href="/News">
              <img
                className="card-img-top"
                src={this.props.img}
                alt="link to news"
              ></img>
            </a>
            <div className="card-body">
              <h4 className="card-title">{this.props.title}</h4>
              <p className="card-text">{this.props.intro}</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default News;
