import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';

const Layout = () => {
    return (
        <div>
            <header>
                <CustomLink to="/" >Home</CustomLink>
                <CustomLink to="/blog" >Blog</CustomLink>
                <CustomLink to="/about" >About us</CustomLink>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                Workshop react router 6 * 2022
            </footer>
        </div>
    );
};

export default Layout;