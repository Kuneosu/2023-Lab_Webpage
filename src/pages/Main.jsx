import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Main = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>Main page</h1>
            <button onClick={() => { navigate('/') }}>Login</button>
        </>
    )
};

export default Main;