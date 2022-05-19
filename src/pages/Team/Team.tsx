import AboutBanner from 'components/layout/AboutBanner/AboutBanner';
import AboutItem from 'components/layout/AboutITem/AboutItem';
import AboutTeam from 'components/layout/AboutTeam/AboutTeam';
import Brand from 'components/layout/Brand/Brand';
import Discover from 'components/layout/Discover/Discover';
import { ABOUT_DISCOVER } from 'data/aboutDiscover';
import React from 'react';
import './Team.scss';
const Team = () => {
    return (
        <div className="team">
            <AboutBanner data={{ name: 'Team Members', title: 'Home  Team' }} />
            <Discover
                isReverce={true}
                bgImage={ABOUT_DISCOVER[10].bgImage}
                content={ABOUT_DISCOVER[10].content}
            >
                <div className="team__yt">
                    <img
                        src="https://softek.radiantthemes.com/wp-content/uploads/2020/11/video-7.png"
                        alt=""
                    />
                    <h3>Our Presentation</h3>
                </div>
            </Discover>
            <Brand />
            <AboutItem />
            <AboutTeam />
        </div>
    );
};

export default Team;
