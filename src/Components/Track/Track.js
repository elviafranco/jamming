import React from "react";
import './Track.css';

export class Track extends React.Component {

renderAction(){
    if (this.props.isRemoval === true){
        return <button className="Track-action">-</button>
    } else {
        return <button className="Track-action">+</button>
    }
}

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>Track Name</h3>
          <p>Track artist | track album</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}
