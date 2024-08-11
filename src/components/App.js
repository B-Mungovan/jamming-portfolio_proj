
import React, {useState} from 'react';
import SearchBar from './searchBar';
import SearchResults from './searchResults';
import Playlist from './playlist';




function App() {

  const [searchResults, setSearchResults] = useState([{
    name: "example track name 1",
    artist: "example track artist 1",
    album: "example track album 1",
    id:"2",
  },{
    name: "example track name 2",
    artist: "example track artist 2",
    album: "example track album 2",
    id:"2",
  }]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammmin</h1>
        <SearchBar />
      </header>

      <div className="content">
        <Playlist />
        <SearchResults userSearchResults={searchResults} />
      </div>

    </div>
  );
}

export default App;
