import React from "react";
import "./styles/Card.css";

const Card = (props) => {

    return (
        <div className="card" id={props.style}>
            <div id="card__header">
                <span id="card__name">Name : {props.name}</span>
                <span id="card__mac">Mac : {props.mac}</span>
            </div>
            <div id="card__body">
                <iframe src={props.url} width="450" height="200" frameborder="0"></iframe>
            </div>
        </div>
    );
}

export default Card;