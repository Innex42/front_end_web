import React from "react";
import { items } from "./data/data";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchWithClass from "./components/SearchWithClass";
console.log( {items})

function App() {
  return (
    <div className="container">
      <h1>Menu</h1>
      <SearchWithClass details={items}/>
      {/*<DisplayFoodItems foodList={items} /> */}
    </div>
  );
}
export default App;