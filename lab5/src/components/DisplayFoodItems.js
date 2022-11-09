import React, { useState } from 'react';
import Item from "./Item";
import FetchData from './FetchNutrition'; 
import {items} from '../data/Data'

const DisplayFoodItems = () => {
    const [selectedItem,setSelectedItem] = useState("")
    const handleClick= (currentItem) => {
        setSelectedItem(currentItem)
    } 
    
    return (
        <>
        <ul>
        <h2>Menu</h2>
            {items.map((food) => {
                return(
                    <li key={food.id} onClick={() => handleClick(food)} > 
                    <Item item={food} /></li>
                )
            })}
        </ul>
        <h2>Food: {selectedItem.name}</h2>
        <FetchData query={selectedItem.name}/>
        </>
    );
};
export default DisplayFoodItems;