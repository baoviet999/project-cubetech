import Analyst from 'components/layout/Analyst/Analyst';
import Contact from 'components/layout/Contact/Contact';
import Discover from 'components/layout/Discover/Discover';
import Featured from 'components/layout/Featured/Featured';
import Hero from 'components/layout/Hero/Hero';
import News from 'components/layout/News/News';
import Project from 'components/layout/Project/Project';
import Services from 'components/layout/Services/Services';
import Solution from 'components/layout/Solution/Solution';
import { ABOUT_DISCOVER } from 'data/aboutDiscover';
import { heroHomePage2 } from 'data/homeV2Data';
import React from 'react';
import '../../components/layout/Analyst/Analyst.scss';
import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            <Hero custom={heroHomePage2} />
            <Services itemTotal={4} isCol={false} total={6} />
            <Discover bgImage={ABOUT_DISCOVER[3].bgImage} content={ABOUT_DISCOVER[3].content} />
            <Analyst />
            <Solution />
            <Featured />
            <Project />
            <News />
            <Contact />
        </div>
    );
};

export default Home;
