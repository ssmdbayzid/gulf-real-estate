import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { About, Home, CarListing,CarDetails, Blog, BlogDetails, SignUp, LogIn, NotFound } from '../Pages';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to="/home" />} />
            <Route path='/home' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/cars' element={<CarListing />}/>
            <Route path='/cars/:slug' element={<CarDetails />}/>
            <Route path='/blog' element={<Blog />}/>
            <Route path='/blog/:slug' element={<BlogDetails />}/>
            <Route path='/sign-up' element={<LogIn />}/>
            <Route path='/log-in' element={<SignUp />}/>
            <Route path='*' element={<NotFound />}/>

        </Routes>
    );
};

export default Routers;