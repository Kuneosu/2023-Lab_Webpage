import './App.css';
import React from 'react';
import Main from './pages/Main';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
