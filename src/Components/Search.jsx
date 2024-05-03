/* eslint-disable no-unused-vars */
import React from "react"

function Search({handleSearch}){
    
    return(
        <div>
        <div className="Search-container" >
            <input 
            type="text" 
            name="search-box" className="search-box" placeholder="Search your recent transactions"
            onChange={handleSearch}
            />
            <button type='submit' className="search-button">
            </button>
        </div>
    
     </div>
    )  
}

export default Search