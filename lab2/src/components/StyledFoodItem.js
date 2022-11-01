import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const StyledFoodItem = ({ food }) => {
  return (
    <div>
      <Accordion.Header>{food.name}</Accordion.Header>
      <Accordion.Body>
        <p>{food.description}</p>
        <p>{food.price}</p>
      </Accordion.Body>
    </div>
  );
};

export default StyledFoodItem;