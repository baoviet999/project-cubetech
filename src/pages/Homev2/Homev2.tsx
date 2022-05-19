import Progress from 'components/common/Progress/Progress';
import Analyst from 'components/layout/Analyst/Analyst';
import Brand from 'components/layout/Brand/Brand';
import Business from 'components/layout/Business/Business';
import Discover from 'components/layout/Discover/Discover';
import Featured from 'components/layout/Featured/Featured';
import Help from 'components/layout/Help/Help';
import Hero from 'components/layout/Hero/Hero';
import Services from 'components/layout/Services/Services';
import { ABOUT_DISCOVER } from 'data/aboutDiscover';
import { heroHomePage } from 'data/homeV2Data';
import React from 'react';
import './Homev2.scss';
const Homev2 = () => {
    return (
        <div className="home">
            <Hero custom={heroHomePage} />
            <Discover bgImage={ABOUT_DISCOVER[5].bgImage} content={ABOUT_DISCOVER[5].content} />
            <Analyst />
            <Services itemTotal={6} isCol={true} total={4} />
            <Discover bgImage={ABOUT_DISCOVER[5].bgImage} content={ABOUT_DISCOVER[5].content}>
                <Progress time={60} />
                <Progress time={90} />
                <Progress time={75} />
            </Discover>
            <Brand />
            <Business />
            <Featured />
            <Help />
        </div>
    );
};

export default Homev2;
