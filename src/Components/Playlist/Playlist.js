import React from "react";
// import TrackList from "../TrackList/TrackList";
import "./PlayList.css";


export class PlayList extends React.Component {
    render(){
        return (
        <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        {/* <TrackList trackList={this.props.playlistTracks}></TrackList> */}
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
        )
    }
}