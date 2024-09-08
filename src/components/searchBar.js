import React, {useState} from "react";

const SearchBar = (props) => {
    const [term, setTerm] = useState("");

    function passTerm(){
        props.onSearch(term);
    }
    function handleTermChange({target}){
        setTerm(target.value);
    }

    return (  
        <div className="SearchBar" >
            <input type="text" placeholder="Search.." onChange={handleTermChange}></input>
            <button onClick={passTerm}>SEARCH</button>
        </div>
    );
}
 
export default SearchBar;