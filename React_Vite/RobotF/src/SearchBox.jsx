import React from "react";
import 'tachyons'

const SearchBox = () =>{
    return (
        <div className = 'pa2'>
            <input
            className="pa3 ba b--green bg-lightest-blue"
            type='search' 
            placeholder="search robots"
            />
        </div>
    )
}

export default SearchBox;