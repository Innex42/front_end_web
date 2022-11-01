import React from "react";
import Accordion from "react-bootstrap/Accordion";
import StyledFoodItem from "./StyledFoodItem";

const StyledDisplayFoodItems = ({ foodList }) => {
  return (
    <Accordion style={{width:50+'%'}}>
      {foodList.map((food, index) => {
        return (
          <Accordion.Item eventKey={index} key={index}>
            <StyledFoodItem food={food} />
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default StyledDisplayFoodItems;