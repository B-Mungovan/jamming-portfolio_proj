import React from "react";

function Track(props) {
    function renderAction() {
        return <button className="Track-action">{props.isRemoval ? "-" : "+"}</button>;
    }

    return (
        <div className="Track">
            <div className="Track-Info">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {renderAction()}
        </div>
    );
}

export default Track;
