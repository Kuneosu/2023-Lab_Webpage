import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Login.css"

const Login = () => {
    const navigate = useNavigate();
    return (
        <div id="login__container">
            <div className="login__wrapper" id="wrapper__left">
                <div id="login__header">
                    <span id="company__name">T/O Solution</span>
                    <span id="product__name">실시간 배전반 관리 시스템</span>
                    <span id="login__title">Login to your Account</span>
                </div>
                <div id="login__form">
                    <form>
                        <span>ID</span>
                        <input type="text" />
                        <span>Password</span>
                        <input type="password" />
                        <div id="remember__check"><input type="checkbox" /><span>Remember me</span></div>
                        <button type="submit" onClick={() => navigate("/Main")}>Login</button>
                    </form>
                </div>
            </div>
            <div className="login__wrapper" id="wrapper__right">
            </div>
        </div>
    );
}

export default Login;