
import React, {useState} from 'react';
import SearchBar from './searchBar';
import SearchResults from './searchResults';
import Playlist from './playlist';
import BackgroundImage from '../assets/images/spotify_background_image.jpg';
import { Spotify } from '../util/spotify';
import Footer from './footer';



function App() {

  const [playlistName, setPlaylistName] = useState("Example platlist name");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "",
      artist: "",
      album: "",
      id: "",
    }
  ]);

  const [searchResults, setSearchResults] = useState([{
    name: "",
    artist: "",
    album: "",
    id:"",
    }
  ]);

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

  function savePlaylist(){
    const trackURIs = playlistTracks.map((t) => t.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistName("New Playlist")
      setPlaylistTracks([]);
    });
  }

  function search(term) {
    Spotify.search(term).then((results) => {
      const filteredResults = results.filter((track) => 
        !playlistTracks.some((playlistTrack) => playlistTrack.id === track.id)
      );
      setSearchResults(filteredResults);
    });
    console.log(term);
  }
  

  return (
  <div 
    className="App" 
    style={{
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      minHeight: '100vh', 
      width: '100vw'
    }}
  >
    <header className="App-header">
      <h1>Jammmin</h1>
      <SearchBar onSearch={search}/>
    </header>

    <div className="content">
      <Playlist 
        playlistName={playlistName} 
        playlistTracks={playlistTracks}
        onRemove={removeTrack}
        onNameChange={updatePlaylistName}
        onSave={savePlaylist}
      />
      <SearchResults 
        userSearchResults={searchResults} 
        onAdd={addTrack}
      />
    </div>
    
    <footer>
      {<Footer/>}
    </footer>
  </div>
);
}

export default App;
