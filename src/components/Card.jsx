import React from "react";
import "./styles/Card.css";

const Card = () => {

    return (
        <div className="card">
            <div id="card__header">
                <span id="card__name">Name : Dummy 1</span>
                <span id="card__mac">Mac : dfb172feff65112c</span>
            </div>
            <div id="card__body">
                <iframe src="http://localhost:3000/d-solo/ae85ca87-5c5d-4ff5-9038-90d32b387b1f/lab-data?orgId=1&refresh=1s&panelId=10" width="450" height="200" frameborder="0"></iframe>
            </div>
        </div>
    );
}

export default Card;