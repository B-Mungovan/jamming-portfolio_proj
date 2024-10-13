import React from "react";
import Tracklist from "./tracklist";

function SearchResults(props) {
    // Ensure a safe check even if the prop is undefined
    const hasSearchResults = Array.isArray(props.userSearchResults) && props.userSearchResults.length > 0;

    return (
        <div className="searchResults">
            <h1>Results</h1>
            {hasSearchResults ? (
                <Tracklist 
                    userSearchResults={props.userSearchResults} 
                    isRemoval={false} 
                    onAdd={props.onAdd}
                />
            ) : (
                <p>No results found.</p> // Optionally display a message when no results
            )}
        </div>
    );
}

export default SearchResults;
