import React from "react";
import Accordion from "react-bootstrap/Accordion";
import StyledFoodItem from "./StyledFoodItem";

const OrderedFoodItems = ({categoryList,category}) => {
     
    return (
      <>
      <h3>{category}</h3>
    <Accordion style={{width:50+'%'}}>
      {categoryList.map((food, index) => {
        return (
          <Accordion.Item eventKey={index} key={index}>
            <StyledFoodItem food={food} />
          </Accordion.Item>
        );
      })}
    </Accordion>
    </>
  );
};
export default OrderedFoodItems;