import React from "react";
import { Link, Outlet } from "react-router-dom";

const People = ({ people }) => {
    return(
        <>
            <h2>Meet our Staff</h2>
            <ul>
                {people.map((person) => (
                    <li key={person.id}>
                        <Link to={person.id}>{person.fullName}</Link>
                    </li>
                ))}
            </ul>
            <Outlet/>
        </>
    );
};

export default People;