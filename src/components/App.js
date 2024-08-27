
import React, {useState} from 'react';
import SearchBar from './searchBar';
import SearchResults from './searchResults';
import Playlist from './playlist';
import BackgroundImage from '../assets/images/jammin_background_image.jpg';



function App() {

  const [playlistName, setPlaylistName] = useState("Example platlist name");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "Example track Name 1",
      artist: "Example Artist 1",
      album: "Example  Album 1",
      id: 1,
    },
    {
      name: "Example track Name 2",
      artist: "Example Artist 2",
      album: "Example Album 2",
      id: 2,
    }
  ]);

  const [searchResults, setSearchResults] = useState([{
    name: "Example track name 1",
    artist: "Example artist 1",
    album: "Example album 1",
    id:"1",
  },{
    name: "example track name 2",
    artist: "example artist 2",
    album: "example album 2",
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

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  return (
  <div 
    className="App" 
    style={{
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      height: '120vh', 
      width: '100vw'
    }}
  >
    <header className="App-header">
      <h1>Jammmin</h1>
      <SearchBar />
    </header>

    <div className="content">
      <Playlist 
        playlistName={playlistName} 
        playlistTracks={playlistTracks}
        onRemove={removeTrack}
        onNameChange={updatePlaylistName}
      />
      <SearchResults 
        userSearchResults={searchResults} 
        onAdd={addTrack}
      />
    </div>

    <footer>
      {/* Footer content can go here */}
    </footer>
  </div>
);
}

export default App;
