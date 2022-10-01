import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Translate from '../pages/Translate';
import DeveloperAPI from '../pages/DeveloperAPI';
import Register from '../pages/auth/Register';
import Login from '../pages/auth/Login';
import Profile from '../pages/auth/Profile';
import NotFound from '../pages/exception/NotFound';
import Features from '../pages/Features';

const UseRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} exact/>
                <Route path="/translate" element={<Translate />} exact/>
                <Route path="/developer" element={<DeveloperAPI />} exact/>
                <Route path="/features" element={<Features />} exact/>
                <Route path="/register" element={<Register />} exact/>
                <Route path="/login" element={<Login />} exact/>
                <Route path="/profile" element={<Profile />} exact/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </Router>
    );
};

export default UseRouter;