
import React, {useState} from 'react';
import SearchBar from './searchBar';
import SearchResults from './searchResults';
import Playlist from './playlist';




function App() {

  const [playlistName, setPlaylistResults] = useState("Example platlist name");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "Example Playlist Name 1",
      artist: "Example Playlist Artist 1",
      album: "Example Playlist Album 1",
      id: 1,
    },
    {
      name: "Example Playlist Name 2",
      artist: "Example Playlist Artist 2",
      album: "Example Playlist Album 2",
      id: 2,
    }
  ]);

  const [searchResults, setSearchResults] = useState([{
    name: "example track name 1",
    artist: "example track artist 1",
    album: "example track album 1",
    id:"1",
  },{
    name: "example track name 2",
    artist: "example track artist 2",
    album: "example track album 2",
    id:"2",
  }]);

  function addTrack(track) {
    const existingTrack = playlistTracks.find((t) => t.id === track.id);
    const newTrack = playlistTracks.concat(track);
    if (existingTrack) {
      console.log("Track already exists");
    } else{
      setPlaylistTracks(newTrack);
    }
  }

  function removeTrack(track) {
    const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(existingTrack);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammmin</h1>
        <SearchBar />
      </header>

      <div className="content">
        <Playlist 
        playlistName={playlistName} 
        playlistTracks={playlistTracks}
        onRemove={removeTrack}
        />
        <SearchResults 
        userSearchResults={searchResults} 
        onAdd={addTrack}
        />
      </div>

    </div>
  );
}

export default App;
