import "./App.css";
import { Playlist } from "../Playlist/Playlist";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";


function App() {
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar></SearchBar>
        <div className="App-playlist">
      <SearchResults></SearchResults>
      <Playlist></Playlist>
        </div>
      </div>
    </div>
  );
}

export default App;
