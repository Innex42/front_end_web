import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Locations from "./components/Locations";
import Navigation from "./components/Navigation";
import NoPage from "./components/NoPage";
import People from "./components/People";
import Person from "./components/Person";
import { people } from "./data/data";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="AboutUs" element={<People people={people} />} >
            <Route path=":personId" element={<Person people={people} />} />
          </Route> 
          <Route path="Locations" element={<Locations />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;