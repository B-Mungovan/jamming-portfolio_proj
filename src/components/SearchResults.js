import React from "react";
import Tracklist from "./tracklist"

function SearchResults(props) {
    return (  
        <div className="searchResults">
        <h1>Results</h1>  
        <Tracklist 
        userSearchResults={props.userSearchResults} 
        isRemoval={false} 
        onAdd={props.onAdd}
        />
        </div>
    );
}
 
export default SearchResults;