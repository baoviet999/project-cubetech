import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'swiper/css';
import './App.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Home from './pages/Home/Home';
import MainLayout from './pages/MainLayout/MainLayout';
import Loading from 'components/layout/Loading/Loading';
import Homev2 from 'pages/Homev2/Homev2';
import About from 'pages/About/About';
import About2 from 'pages/About2/About2';
import NotFound from 'pages/NotFound/NotFound';
import Blog from 'pages/Blog/Blog';
import Pricing from 'pages/Pricing/Pricing';
import Why from 'pages/WhyChooseUse/Why';
import Service from 'pages/Service/Service';
import Service2 from 'pages/Service2/Service2';
import Team from 'pages/Team/Team';
function App() {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 0);
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="homev2" element={<Homev2 />} />
                        <Route path="about" element={<About />} />
                        <Route path="about2" element={<About2 />} />
                        <Route path="notfound" element={<NotFound />} />
                        <Route path="blog" element={<Blog />} />
                        <Route path="pricing" element={<Pricing />} />
                        <Route path="why" element={<Why />} />
                        <Route path="service" element={<Service />} />
                        <Route path="service2" element={<Service2 />} />
                        <Route path="team" element={<Team />} />
                    </Route>
                </Routes>
            )}
        </>
    );
}

export default App;
