import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Sidebar.css";

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div id="sidebar__container">
            <div id="side__date">2023.00.00 00:00:00</div>
            <div id="company__info">
                <div id="company__logo"></div>
                <div id="product__info">
                    <div id="company">T/O Solution</div>
                    <div id="product">실시간 배전반 관리 시스템</div>
                </div>
            </div>
            <div id="side__menu">
                <div className="menu__item" id="menu__item__1" onClick={() => navigate("/Main")}>
                    실시간 배전반 현황
                </div>
                <div className="menu__item" id="menu__item__2" onClick={() => navigate("/Main")}>
                    사용자 관리
                </div>
                <div className="menu__item" id="menu__item__3" onClick={() => navigate("/Main")}>
                    배전반 관리
                </div>
            </div>
            <div id="logout__button" onClick={() => navigate("/")}>
                Logout
            </div>
        </div>
    );
}

export default Sidebar;