import AboutBanner from 'components/layout/AboutBanner/AboutBanner';
import AboutItem from 'components/layout/AboutITem/AboutItem';
import AboutTeam from 'components/layout/AboutTeam/AboutTeam';
import Analyst from 'components/layout/Analyst/Analyst';
import Discover from 'components/layout/Discover/Discover';
import { ABOUT_DISCOVER } from 'data/aboutDiscover';

const About = () => {
    return (
        <div className="home">
            <AboutBanner data={{ name: 'About Company', title: 'Home  About Us-01' }} />
            <Discover bgImage={ABOUT_DISCOVER[0].bgImage} content={ABOUT_DISCOVER[0].content} />
            <AboutItem />
            <Discover bgImage={ABOUT_DISCOVER[1].bgImage} content={ABOUT_DISCOVER[1].content} />
            <Analyst />
            <AboutTeam />
        </div>
    );
};

export default About;
