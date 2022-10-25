import React from 'react';
import "./App.css";
import { PlayList } from "../Playlist/PlayList";
import SearchBar from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";

// Add a constructor function to the App component, and pull in props from the React.Component class. Inside of the App constructor, set this.state to an object with a property called searchResults set to an array of objects, each containing name, artist, album, and id properties.

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
    ]
    }
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
            <SearchResults searchResults={this.state.searchResults}></SearchResults>
            {/* <PlayList></PlayList> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
