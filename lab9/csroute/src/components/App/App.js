import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Dashboard from '../Dashboard/Dashboard';
import Prefrences from '../Prefrences/Prefrences';
import Login from '../Login/Login';
import useToken from './usetoken';

/*function setToken(userToken){
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
} */

function App() {
    //const[token, setToken] = useState();
    //const token = getToken();
    const {token, setToken} = useToken();
    if (!token) {
        return <Login setToken={setToken} />
    }
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