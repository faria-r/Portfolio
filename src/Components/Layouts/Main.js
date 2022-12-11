import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Home from '../Home/Home/Home';
import Navbar from '../Home/navbar/Navbar';
import Social from '../SocialLInks/Social';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className='lg:relative'>
            <div className='sm:invisible lg:visible lg:fixed mt-64'>
<Social></Social>
            </div>
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Main;