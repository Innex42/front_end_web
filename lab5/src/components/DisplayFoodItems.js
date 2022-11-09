import React, { useState } from 'react';
import Item from "./Item";
import FetchData from './FetchNutrition'; 
import {items} from '../data/Data'
import BarChart from './NutritionChart';


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
        <FetchData query={selectedItem.name}/>

        <BarChart/>
        </>
        
    );
};
export default DisplayFoodItems;