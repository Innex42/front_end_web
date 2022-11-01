import React from 'react';
import Accordion from "react-bootstrap/Accordion"
import FoodItem from './FoodItem';

const DisplayFoodItems = ({foodList }) => {

    const availableList = foodList.filter((entry) =>{
        return entry.available==="yes";
    });

    const mainList = availableList.filter((entry) =>{
        return entry.category==="main";
    });


    const sideList = availableList.filter((entry) =>{
        return entry.category==="side";
    });


    const snackList = availableList.filter((entry) =>{
        return entry.category==="snack";
    });

    const puddingList = availableList.filter((entry) =>{
        return entry.category==="pudding";
    });


    const drinksList = availableList.filter((entry) =>{
        return entry.category==="drinks";
    });


    return (
        <><><><><><h1>Main Dishes</h1>
            <Accordion style={{ width: 50 + '%' }}>
                {mainList.map((food, index) => {
                    return (
                        <Accordion.Item eventKey={index} key={index}>
                            <FoodItem food={food} />
                        </Accordion.Item>
                    );
                })}
            </Accordion></>
            <h1>Pudding</h1>
            <Accordion style={{ width: 50 + '%' }}>
                {puddingList.map((food, index) => {
                    return (
                        <Accordion.Item eventKey={index} key={index}>
                            <FoodItem food={food} />
                        </Accordion.Item>
                    );
                })}
            </Accordion></>
            <h1>Side</h1>
            <Accordion style={{ width: 50 + '%' }}>
                {sideList.map((food, index) => {
                    return (
                        <Accordion.Item eventKey={index} key={index}>
                            <FoodItem food={food} />
                        </Accordion.Item>
                    );
                })}
            </Accordion></>
            <h1>Drinks</h1><Accordion style={{ width: 50 + '%' }}>
                {drinksList.map((food, index) => {
                    return (
                        <Accordion.Item eventKey={index} key={index}>
                            <FoodItem food={food} />
                        </Accordion.Item>
                    );
                })}
            </Accordion></>
            <h1>Snacks</h1>
            <Accordion style={{ width: 50 + '%' }}>
                {snackList.map((food, index) => {
                    return (
                        <Accordion.Item eventKey={index} key={index}>
                            <FoodItem food={food} />
                        </Accordion.Item>
                    );
                })}
            </Accordion></>
            
    );
};
export default DisplayFoodItems;