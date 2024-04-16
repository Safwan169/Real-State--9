import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Router = () => {
    return (
        <div className='lg:w-full  overflow-y-hidden  mx-auto mt-4'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Router;