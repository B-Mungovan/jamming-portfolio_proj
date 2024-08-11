import Tracklist from "./tracklist"

function SearchResults(props) {
    return (  
        <div className="searchResults">  
        <Tracklist userSearchResults={props.userSearchResults}/>
        </div>
    );
}
 
export default SearchResults;