import React from "react";

const Square = (props) => {
    return (
        <div onClick={props.onClick} className="square" style={{ border: "1px solid black", padding: "10px 10px", height: "150px", width: "150px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
            <h1 style={{ fontSize: "50px" }}>{props.value}</h1>
        </div>
    );
}

export default Square;
