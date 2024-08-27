import React from "react";
import Tracklist from "./tracklist";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpotify} from '@fortawesome/free-brands-svg-icons'

function Playlist(props) {
    function handleNameChange({target}) {
        props.onNameChange(target.value);
    }
    return ( 
        <div className="playlist">
            <input deafultvalue={"New Playlist"} placeholder="New Playlist" onChange={handleNameChange}/>
            <Tracklist 
            userSearchResults={props.playlistTracks} 
            onRemove={props.onRemove}
            isRemoval={true}
            />
            <button className="Playlist-save">Save To Spotify <FontAwesomeIcon icon={faSpotify} /></button>
        </div>
     );
}
 
export default Playlist;