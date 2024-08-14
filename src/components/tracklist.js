import React from "react";
import Track from "./track";

function Tracklist(props) {
    // Safeguard against undefined or non-array data
    if (!Array.isArray(props.userSearchResults)) {
        return <div>No tracks found.</div>;
    }

    return (
        <div className="TrackList">
            {props.userSearchResults.map((track) => (
                <Track track={track}
                 key={track.id} 
                 isRemoval={props.isRemoval}
                 onAdd={props.onAdd}
                 />
            ))}
        </div>
    );
}

export default Tracklist;
