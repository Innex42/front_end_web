import React from 'react';
import Item from "./Item";
import {items} from '../data/Data'

const DisplayFoodItems = () => {

    const handleClick= (e) => {
        alert(e.target.innerHTML)
    } 
    
    return (
        <ul>
            {items.map((food) => {
                return(
                    <li key={food.id} onClick={handleClick} > <Item item={food} /></li>
                )
            })}
        </ul>
    );
};
export default DisplayFoodItems;