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
                <Track
                    key={track.id}
                    name={track.name}
                    artist={track.artist}
                    album={track.album}
                    isRemoval={false}  // Example prop, can be adjusted based on your logic
                />
            ))}
        </div>
    );
}

export default Tracklist;
