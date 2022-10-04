import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Trending from '../../pages/Trending';
import Navbar from '../Navbar';

const index = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact="true" path="/" element={<Home />} />
                <Route exact="true" path="/profil" element={<Profil />} />
                <Route exact="true" path="/trending" element={<Trending />} />
                {/* <Route path="*" element={<Home />} /> */}
            </Routes>
        </Router>
    );
};

export default index;