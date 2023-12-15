import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';


const Main = () => {
    const navigate = useNavigate();
    return (
        <>
            <Sidebar />
            <button onClick={() => { navigate('/') }}>Login</button>
        </>
    )
};

export default Main;