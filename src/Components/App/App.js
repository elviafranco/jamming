import React from 'react';
import "./App.css";
import { PlayList } from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";


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
        id: 4
      },
      {
        name: 'Tiny Dancer',
        artist: 'Tim McGraw',
        album: 'Love Story',
        id: 5
      },
      {
        name: 'Tiny Dancer',
        artist: 'The White Raven',
        album: 'Tiny Dancer',
        id: 6
      }
    ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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

  removeTrack(track){
    // this is equal to the array of objects in the state
    let stateTracks = this.state.playlistTracks;
    stateTracks = stateTracks.filter(currentTrack => currentTrack.id  !== track.id);
    this.setState({playlistTracks: stateTracks})
  }

  updatePlaylistName(name){
    this.setState({playlistName: name});
  }

  savePlaylist(){
    const trackUris = this.state.playlistTracks.map(track => track.uri);
  }

  search(searchTerm){
    console.log(searchTerm);
  }


  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search}></SearchBar>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} 
            onAdd={this.addTrack}></SearchResults>
            <PlayList playlistTracks={this.state.playlistTracks} playlistName={this.state.playlistName} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}></PlayList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
