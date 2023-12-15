import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import MainCard from '../components/MainCard';
import './styles/Main.css';


const Main = () => {
    const navigate = useNavigate();
    return (
        <div id='main__container'>
            <Sidebar />
            <MainCard />
        </div>
    )
};

export default Main;