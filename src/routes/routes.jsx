import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';

const AppRoutes = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pokemon/:name" element={<Pokemon />} />
                </Routes>
            </div>
        </Router>
    );
};

export default AppRoutes;