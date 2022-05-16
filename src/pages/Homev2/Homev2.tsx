import Hero from 'components/layout/Hero/Hero';
import React from 'react';
import './Homev2.scss';
const Homev2 = () => {
    const heroHomePage = {
        label: 'IT Services Designer',
        name: 'Awesome IT Services For Your Business',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio,molestiae dolore unde assumenda earum deserunt aspernatur quaerat,',
        bg: 'https://softek.radiantthemes.com/wp-content/uploads/revslider/slider-27/vec01.png',
        btnContent: 'For any question',
        bgInfo: {
            bgWidth: '100%',
            bgHegth: '70%',
        },
    };
    return (
        <div className="home">
            <Hero custom={heroHomePage} />
        </div>
    );
};

export default Homev2;
