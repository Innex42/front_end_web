import React, {useState, useContext} from "react";
import OrderContext from "./OrderContext";

const SubmitOrder = () => {
    const [order, setOrder] = useContext(OrderContext);
    const [nameField, setNameField] = useState("");
    const [tableField, setTableField] = useState("");
    const [message, setMessage] = useState("");

    const addOrder = () => {
        let newOrder = [nameField, tableField, ...order];
        const orderString = JSON.stringify(newOrder);
        fetch('http://localhost:3001/addOrder', {
            method: "POST",
            header: {
                Accept: "application/json, text/plain, */*  ",
                "Content-Type": "application/json",
            },
            body: orderString,
        })
            .then(() => {
                setMessage(
                    "Hi "+ nameField + " thank you for your order. You've Ordered " + order
                );
                setOrder([]);
                setNameField("");
                setTableField("");
            }).catch((err) => {
            console.log(err)
            });
    };

    return(
        <div>
            <h2>Submit Order</h2>
            <label>Enter our name:</label>
            <input
                className="form-control"
                type="text"
                placeholder="Enter your name here..."
                value={nameField}
                onChange={(e) => setNameField(e.target.value)}
            />
            <label>Enter Your table number :</label>
            <input
                className="form-control"
                type="text"
                placeholder="Enter your table number here ..."
            />
            <button onClick={addOrder}>Submit Order</button>
            <p>{message}</p>
        </div>
    );
};
export default SubmitOrder;