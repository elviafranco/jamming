import React from 'react';
import "./App.css";
import { PlayList } from "../Playlist/PlayList";
import SearchBar from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar></SearchBar>
          <div className="App-playlist">
            <SearchResults></SearchResults>
            <PlayList></PlayList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
