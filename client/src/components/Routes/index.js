import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Trending from '../../pages/Trending';
import Navbar from '../Navbar';
// import rootReducer from '../../reducers'


const index = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/profil" element={<Profil />} />
                <Route exact path="/trending" element={<Trending />} />
                {/* <Route path="*" element={<Home />} /> */}
            </Routes>
        </Router>
    );
};

export default index;