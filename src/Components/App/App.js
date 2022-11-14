import React from 'react';
import "./App.css";
import {PlayList} from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import {SearchResults} from "../SearchResults/SearchResults";
import Spotify from "../../util/Spotify";


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'Name1',
          artist: 'Artist1',
          album: 'Album1',
          id: 1
        },
        {
          name: 'Name2',
          artist: 'Artist2',
          album: 'Album2',
          id: 2
        },
        {
          name: 'Name3',
          artist: 'Artist3',
          album: 'Album3',
          id: 3
        }
      ],
      playlistName: 'My Play Play',
      playlistTracks: [
           {
          name: 'PlaylistName1',
          artist: 'PlaylistArtist1',
          album: 'PlaylistAlbum1',
          id: 4
        },
        {
          name: 'PlaylistName2',
          artist: 'PlaylistArtist2',
          album: 'PlaylistAlbum2',
          id: 5
        },
        {
          name: 'PlaylistName3',
          artist: 'PlaylistArtist3',
          album: 'PlaylistAlbum3',
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
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: [],
      })
    })
  }

  search(searchTerm){
    Spotify.search(searchTerm).then(searchResults => {
      this.setState({searchResults: searchResults})
      console.log(searchTerm);
    });
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
