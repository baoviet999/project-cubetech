import AboutBanner from 'components/layout/AboutBanner/AboutBanner';
import AboutItem from 'components/layout/AboutITem/AboutItem';
import AboutTeam from 'components/layout/AboutTeam/AboutTeam';
import Analyst from 'components/layout/Analyst/Analyst';
import Discover from 'components/layout/Discover/Discover';
import Help from 'components/layout/Help/Help';
import History from 'components/layout/History/History';
import { ABOUT_DISCOVER } from 'data/aboutDiscover';

const About2 = () => {
    return (
        <div className="home">
            <AboutBanner data={{ name: 'About Company', title: 'Home  About Us-02' }} />
            <Discover
                isReverce={true}
                bgImage={ABOUT_DISCOVER[2].bgImage}
                content={ABOUT_DISCOVER[2].content}
            />
            <History />
            <AboutItem />
            <Discover
                isReverce={true}
                bgImage={ABOUT_DISCOVER[3].bgImage}
                content={ABOUT_DISCOVER[3].content}
            />
            <Analyst />
            <AboutTeam />
            <Help />
        </div>
    );
};

export default About2;
