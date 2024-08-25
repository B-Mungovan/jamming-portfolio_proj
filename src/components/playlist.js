import React from "react";
import Tracklist from "./tracklist";


function Playlist(props) {
    function handleNameChange({target}) {
        props.onNameChange(target.value);
    }
    return ( 
        <div className="playlist">
            <input deafultvalue={"New Playlist"} onChange={handleNameChange}/>
            <Tracklist 
            userSearchResults={props.playlistTracks} 
            onRemove={props.onRemove}
            isRemoval={true}
            />
            <button className="Playlist-save">Save To Spotify</button>
        </div>
     );
}
 
export default Playlist;