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
                    <div className="status__item" id="status__number__1">1</div>
                </div>
                <div id="maincard__status__item">
                    <div className="status__item" id="status__name__2">정상</div>
                    <div className="status__item" id="status__number__2">1</div>
                </div>
                <div id="maincard__status__item">
                    <div className="status__item" id="status__name__3">이상</div>
                    <div className="status__item" id="status__number__3">1</div>
                </div>
            </div>
            <div id="maincard__items">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default MainCard;