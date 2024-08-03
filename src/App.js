import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/playlist';
import Tracklist from './components/tracklist';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammmin!</h1>
        <SearchBar />
      </header>

      <body className="content">
        <Playlist />
        <Tracklist />
      </body>

    </div>
  );
}

export default App;
