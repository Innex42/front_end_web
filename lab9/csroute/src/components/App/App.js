import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import Prefrences from '../Prefrences/Prefrences';

function App() {
    return(
        <>
            <div className='wrapper'>
                <BrowserRouter>                
                    <Routes>
                        <Route path="/" element={<h1>Application</h1>} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/prefrences" element={<Prefrences />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;