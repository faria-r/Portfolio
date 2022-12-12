import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/navbar/Navbar';
import Social from '../SocialLInks/Social';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div>
            <div className='lg:fixed mt-0 lg:mt-64'>
<Social></Social>
            </div>
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Main;