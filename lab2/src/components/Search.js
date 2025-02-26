import React, {useState} from "react";
import DisplayFoodItems from "./DisplayFoodItems";
import StyledDisplayFoodItems from "./StyledDisplayFoodItems";
import StyledAndFilteredDisplayFoodItems from "./StyledAndFilteredDisplayFoodItems";
function Search({details}) {
    const [searchField, setSearchField] = useState("");


    const filtered = details.filter((entry) => {
        return entry.description.toLowerCase().includes(searchField.toLowerCase()) ||entry.name.toLowerCase().includes(searchField.toLowerCase());
    });

    
    return(
        <div>
            <div>
                <input
                className="form-control"
                type="text"
                placeholder="Search ..." 
                onChange={(e) => setSearchField(e.target.value)}
                />
            </div>
            <StyledAndFilteredDisplayFoodItems foodList={filtered}/>
        </div>
    );
}

export default Search;