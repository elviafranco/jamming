import React from "react";
import './TrackList.css';

export class TrackList extends React.Component {
    render() {
        // const trackItems = props.map.name((track) => <li>{track}</li>)
        return (
        <div className="TrackList">
          {/* Add map method that renders a set of track components */}
          <ul>
            <li>{this.props.track}</li>
        </ul>
        </div>
        )
    }
}


TrackList.defaultProps = {
    track: 'Tiny Dancer',
  };


export default TrackList;