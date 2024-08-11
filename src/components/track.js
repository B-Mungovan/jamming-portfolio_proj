import React from "react";

function Track(props) {
    function renderAction() {
        return <button className="Track-action">{props.isRemoval ? "-" : "+"}</button>;
    }

    return (
        <div className="Track">
            <div className="Track-Info">
                <h3>{props.name}</h3>
                <p>{props.artist} | {props.album}</p>
            </div>
            {renderAction()}
        </div>
    );
}

export default Track;
