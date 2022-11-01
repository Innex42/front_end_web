import React, { useState } from "react";
import OrderedFoodItems from "./OrderedFoodItems";

const StyledAndFilteredDisplayFoodItems = ({ foodList }) => {
     const availableList = foodList.filter((entry) => {
      return entry.available==="yes";
    });

    return (<>
    <OrderedFoodItems category="Main Dishes" categoryList={availableList.filter((entry) => {return entry.category==="main"})} />
    <OrderedFoodItems category="Pudding" categoryList={ availableList.filter((entry) => { return entry.category==="pudding"})} />
    <OrderedFoodItems category="Side" categoryList={availableList.filter((entry) => { return entry.category==="side" })} />
    <OrderedFoodItems category="Drinks" categoryList={availableList.filter((entry) => { return entry.category==="drinks"})} />
    </>
  );
};

export default StyledAndFilteredDisplayFoodItems;