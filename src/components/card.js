import React, { Component} from "react";

class Card extends Component {
  render() {
    return (
        <div className="col s6 m2">
          <div className="card">
            <div className="card-image">
              <img src={this.props.src}></img>
            </div>
            <div className="writer-name">
              <a href={this.props.url} className="action-text">{this.props.name}</a>
            </div>
          </div>
        </div>
    )
  }
}

export default Card;