import ServiceItem from 'components/common/ServiceItem/ServiceItem';
import { ABOUT_SERVICE } from 'data/aboutService';
import React from 'react';
import './AboutITem.scss';
const AboutItem = () => {
    return (
        <div className="about-item">
            <div className="grid wide">
                <div className="row">
                    {ABOUT_SERVICE.map((item, indx) => (
                        <ServiceItem isCol={false} indx={indx} item={item} key={indx} total={4} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutItem;
