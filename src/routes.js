import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ActivateAccount from './pages/ActivateAccount/ActivateAccount';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/ActivateAccount' element={<ActivateAccount />} />
        </Routes>
    )
}

export default MainRoutes;