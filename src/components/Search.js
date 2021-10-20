import React from "react";

function Search({search}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
        className="prompt" 
        
        onChange={search}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
