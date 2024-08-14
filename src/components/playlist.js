import React from "react";
import Tracklist from "./tracklist";


function Playlist(props) {
    return ( 
        <div className="playlist">
            <input deafultvalue={"New Playlist"}/>
            <Tracklist userSearchResults={props.playlistTracks}/>
            <button className="Playlist-save">Save To Spotify</button>

        </div>
     );
}
 
export default Playlist;