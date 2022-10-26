import React from "react";
import { items } from "./data/data";
import DisplayFoodItems from "./components/DisplayFoodItems";

console.log( {items})
function App() {
  return (
    <div>
      <h1>Menu</h1>
      <DisplayFoodItems foodList={items} />
    </div>
  );
}
export default App;