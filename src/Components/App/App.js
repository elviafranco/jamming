import React from 'react';
import "./App.css";
import { PlayList } from "../Playlist/PlayList";
import SearchBar from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import TrackList from '../TrackList/TrackList';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      searchResults: [
      {
        name: 'Stronger',
        artist: 'Britney Spears',
        album: 'Oops!...I Did It Again',
        id: 1
      },
      {
        name: 'So Emotional',
        artist: 'Whitney Houston',
        album: 'Whitney',
        id: 2
      },
      {
        name: 'My Need',
        artist: 'Janet Jackson',
        album: 'The Velvet Rope',
        id: 3
      },
    ],
    playlistName: 'My Play Play',
    playlistTracks: [
      {
        name: 'Tiny Dancer',
        artist: 'Elton John',
        album: 'Madman Across The Water',
        id: 3
      },
      {
        name: 'Tiny Dancer',
        artist: 'Tim McGraw',
        album: 'Love Story',
        id: 4
      },
      {
        name: 'Tiny Dancer',
        artist: 'The White Raven',
        album: 'Tiny Dancer',
        id: 5
      }
    ]
    };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    // this is equal to the array of objects in the state
    let stateTracks = this.state.playlistTracks;
    if(stateTracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    stateTracks.push(track);
    this.setState({playlistTracks: stateTracks})
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar></SearchBar>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} 
            onAdd={this.addTrack}></SearchResults>
            <PlayList playlistTracks={this.state.playlistTracks} playlistName={this.state.playlistName}></PlayList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
