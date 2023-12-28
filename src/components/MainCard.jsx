import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/MainCard.css";
import Card from "./Card";

const MainCard = () => {
    const navigate = useNavigate();
    return (
        <div id="maincard__container">
            <div id="maincard__status">
                <div id="maincard__status__items">
                    <div className="status__item" id="status__name__1">현재 운용중인 배전반</div>
                    <div className="status__item" id="status__number__1">6</div>
                </div>
                <div id="maincard__status__item">
                    <div className="status__item" id="status__name__2">정상</div>
                    <div className="status__item" id="status__number__2">4</div>
                </div>
                <div id="maincard__status__item">
                    <div className="status__item" id="status__name__3">이상</div>
                    <div className="status__item" id="status__number__3">2</div>
                </div>
            </div>
            <div id="maincard__items">
                <Card
                    name="Dummy 1"
                    mac="dfb172feff65112c"
                    url="http://localhost:3000/d-solo/ae85ca87-5c5d-4ff5-9038-90d32b387b1f/lab-data?orgId=1&refresh=1s&panelId=10"
                    style="blue"
                />
                <Card
                    name="Dummy 2"
                    mac="b35472feff65112c"
                    url="http://localhost:3000/d-solo/ae85ca87-5c5d-4ff5-9038-90d32b387b1f/lab-data?orgId=1&refresh=1s&panelId=6"
                    style="blue"
                />
                <Card
                    name="Dummy 3"
                    mac="b1ad72feff65112c"
                    url="http://localhost:3000/d-solo/ae85ca87-5c5d-4ff5-9038-90d32b387b1f/lab-data?orgId=1&refresh=1s&from=1703137798730&to=1703138098730&panelId=5"
                    style="red"
                />
                <Card
                    name="Dummy 4"
                    mac="44ad72feff65112c"
                    url="http://localhost:3000/d-solo/ae85ca87-5c5d-4ff5-9038-90d32b387b1f/lab-data?orgId=1&refresh=1s&panelId=3"
                    style="blue"
                />
                <Card
                    name="Dummy 2"
                    mac="b35472feff65112c"
                    url="http://localhost:3000/d-solo/ae85ca87-5c5d-4ff5-9038-90d32b387b1f/lab-data?orgId=1&refresh=1s&panelId=6"
                    style="blue"
                />
                <Card
                    name="Dummy 3"
                    mac="b1ad72feff65112c"
                    url="http://localhost:3000/d-solo/ae85ca87-5c5d-4ff5-9038-90d32b387b1f/lab-data?orgId=1&refresh=1s&from=1703137798730&to=1703138098730&panelId=5"
                    style="red"
                />
            </div>
        </div>
    );
}

export default MainCard;