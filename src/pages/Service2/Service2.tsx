import Progress from 'components/common/Progress/Progress';
import AboutBanner from 'components/layout/AboutBanner/AboutBanner';
import CompanyItem from 'components/layout/CompanyItem/CompanyItem';
import Discover from 'components/layout/Discover/Discover';
import Help from 'components/layout/Help/Help';
import ServiceCard from 'components/layout/ServiceCard/ServiceCard';
import Services from 'components/layout/Services/Services';
import Solution from 'components/layout/Solution/Solution';
import { ABOUT_DISCOVER } from 'data/aboutDiscover';
import Pricing from 'pages/Pricing/Pricing';
import React from 'react';
import './Service2.scss';
const Service2 = () => {
    const data = [
        { name: 'Content Strategy', desc: 'Maecenas ipsum suscipit' },
        { name: 'IT Management', desc: 'Maecenas ipsum suscipit' },
        { name: 'Work Dedication', desc: 'Maecenas ipsum suscipit' },
        { name: 'Content Strategy', desc: 'Maecenas ipsum suscipit' },
    ];
    const solutionData = [
        {
            img: 'https://softek.radiantthemes.com/wp-content/uploads/2020/10/Ser02-7.png',
            active: false,
            name: 'Bussiness Collaboration',
            desc: 'Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.',
        },
        {
            img: 'https://softek.radiantthemes.com/wp-content/uploads/2020/10/Ser03-7.png',
            active: true,
            name: 'Coding & Design',
            desc: 'Simply dummy text of the printing and typesetting, consectetur adipisicing',
        },
        {
            img: 'https://softek.radiantthemes.com/wp-content/uploads/2020/10/Ser04-7.png',
            active: false,
            name: 'Team Brainstorming',
            desc: 'consectetur dolor adipisicing elit, do eiusmod printing and typesetting',
        },
    ];
    return (
        <div className="service">
            <AboutBanner data={{ name: 'Service', title: 'Service  Service-02' }} />
            <Solution>
                {solutionData.map((item, indx) => (
                    <div className="col l-4">
                        <ServiceCard item={item} />
                    </div>
                ))}
            </Solution>
            <Discover
                isReverce={true}
                bgImage={ABOUT_DISCOVER[8].bgImage}
                content={ABOUT_DISCOVER[8].content}
            />
            <Services total={3} isCol={true} itemTotal={4} />
            <Discover
                isReverce={true}
                bgImage={ABOUT_DISCOVER[7].bgImage}
                content={ABOUT_DISCOVER[7].content}
            >
                <div className="grid">
                    <div className="row">
                        <div className="col l-6">
                            <CompanyItem />
                        </div>
                        <div className="col l-6">
                            <CompanyItem />
                        </div>
                        <div className="col l-6">
                            <CompanyItem />
                        </div>
                        <div className="col l-6">
                            <CompanyItem />
                        </div>
                    </div>
                </div>
            </Discover>
            <Pricing />
            <Help />
        </div>
    );
};

export default Service2;
