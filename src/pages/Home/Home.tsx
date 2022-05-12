import Analyst from 'components/layout/Analyst/Analyst';
import Contact from 'components/layout/Contact/Contact';
import Discover from 'components/layout/Discover/Discover';
import Featured from 'components/layout/Featured/Featured';
import Hero from 'components/layout/Hero/Hero';
import News from 'components/layout/News/News';
import Project from 'components/layout/Project/Project';
import Services from 'components/layout/Services/Services';
import Solution from 'components/layout/Solution/Solution';
import React from 'react';
import '../../components/layout/Analyst/Analyst.scss';
import './Home.scss';

const heroHomePage = {
    label: 'IT Services Designer',
    name: 'Awesome IT Services For Your Business',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio,molestiae dolore unde assumenda earum deserunt aspernatur quaerat,',
    bg: 'https://softek.radiantthemes.com/wp-content/uploads/revslider/slider-32/Ban01.png',
    btnContent: 'For any question',
};

const Home = () => {
    return (
        <div className="home">
            <Hero custom={heroHomePage} />
            <Services />
            <Discover />
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
