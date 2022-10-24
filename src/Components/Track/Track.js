import React from "react";
import './Track.css';

export class Track extends React.Component {
renderAction(){
    if (this.props.isRemoval === true){
        return <button>-</button>
    } else {
        return <button>+</button>
    }
}

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>Track Name</h3>
          <p>Track artist and track album</p>
        </div>
        <button class="Track-action"></button>
      </div>
    );
  }
}
