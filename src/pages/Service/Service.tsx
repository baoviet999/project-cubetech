import Progress from 'components/common/Progress/Progress';
import AboutBanner from 'components/layout/AboutBanner/AboutBanner';
import Discover from 'components/layout/Discover/Discover';
import Help from 'components/layout/Help/Help';
import Services from 'components/layout/Services/Services';
import { ABOUT_DISCOVER } from 'data/aboutDiscover';
import React from 'react';
import './Service.scss';
const Service = () => {
    const data = [
        { name: 'Content Strategy', desc: 'Maecenas ipsum suscipit' },
        { name: 'IT Management', desc: 'Maecenas ipsum suscipit' },
        { name: 'Work Dedication', desc: 'Maecenas ipsum suscipit' },
        { name: 'Content Strategy', desc: 'Maecenas ipsum suscipit' },
    ];
    return (
        <div className="service">
            <AboutBanner data={{ name: 'Service', title: 'Service  Service-01' }} />
            <Discover bgImage={ABOUT_DISCOVER[6].bgImage} content={ABOUT_DISCOVER[6].content}>
                <div className="grid">
                    <div className="row">
                        {data.map((item, indx) => (
                            <div className="col l-6">
                                <div key={indx} className="service__item">
                                    <img
                                        src="https://softek.radiantthemes.com/wp-content/uploads/2020/12/icon01-7.png"
                                        alt=""
                                    />
                                    <div className="service__item--content">
                                        <h3>{item.name}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Discover>
            <Services total={3} isCol={true} itemTotal={4} />
            <Discover
                isReverce={true}
                bgImage={ABOUT_DISCOVER[7].bgImage}
                content={ABOUT_DISCOVER[7].content}
            >
                <Progress time={60} />
                <Progress time={90} />
                <Progress time={75} />
            </Discover>
            <Help />
        </div>
    );
};

export default Service;
