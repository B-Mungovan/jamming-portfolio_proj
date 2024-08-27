import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMinus} from "@fortawesome/free-solid-svg-icons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";


function Track(props) {
    function renderAction() {
        if (props.isRemoval) {
            return (
                <button className="Track-action" onClick={passTrackToRemove}><FontAwesomeIcon icon={faMinus} /></button>
            );
        } else {
            return <button className="Track-action" onClick={passTrack}><FontAwesomeIcon icon={faPlus} /></button>;
        }
    }

    function passTrack() {
        props.onAdd(props.track);
    }

    function passTrackToRemove() {
        props.onRemove(props.track);
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
