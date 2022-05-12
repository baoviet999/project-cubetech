import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'swiper/css';
import './App.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Home from './pages/Home/Home';
import MainLayout from './pages/MainLayout/MainLayout';
import Loading from 'components/layout/Loading/Loading';
function App() {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 3000);
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            )}
        </>
    );
}

export default App;
