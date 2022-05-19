import ScrollToTop from 'components/common/ScrollToTop/ScrollToTop';
import Footer from 'components/Footer/Footer';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

const MainLayout = () => {
    return (
        <div className="main">
            <Header />
            <Outlet />
            <Footer />
            <ScrollToTop/>
        </div>
    );
};

export default MainLayout;
