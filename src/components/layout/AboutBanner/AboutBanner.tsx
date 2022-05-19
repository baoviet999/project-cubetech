import React from 'react';
import './AboutBanner.scss';

interface AboutBannerProp {
    data: {
        name: string;
        title: string;
    };
}

const AboutBanner = ({ data: { name, title } }: AboutBannerProp) => {
    return (
        <div
            className="about-banner"
            style={{
                backgroundImage: `url(https://softek.radiantthemes.com/wp-content/uploads/2020/10/banner-8.jpg)`,
            }}
        >
            <div className="about-banner__content">
                <h1>{name}</h1>
                <h4>{title}</h4>
            </div>
        </div>
    );
};

export default AboutBanner;
