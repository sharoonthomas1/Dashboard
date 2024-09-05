import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/components/Home';

function Main() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home/>}  />
                <Route path="/services" element={<Home/>}  />
            </Routes>
        </Router>
    );
}

export default Main;