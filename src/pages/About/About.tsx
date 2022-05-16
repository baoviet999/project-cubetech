import AboutBanner from 'components/layout/AboutBanner/AboutBanner';
import AboutItem from 'components/layout/AboutITem/AboutItem';
import AboutTeam from 'components/layout/AboutTeam/AboutTeam';
import Analyst from 'components/layout/Analyst/Analyst';
import Discover from 'components/layout/Discover/Discover';

const About = () => {
    return (
        <div className="home">
            <AboutBanner data={{ name: 'About Company', title: 'Home  About Us-01' }} />
            <Discover
                bgImage="https://softek.radiantthemes.com/wp-content/uploads/2020/10/Vector01-7.png"
                content={{
                    name: 'About Company',
                    title: 'We Provide IT Solutions That Help You Succeed',
                    info: 'Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus. Phasellus magna erat, consectetur nec faucibus at, mollis vitae mauris.',
                }}
            />
            <AboutItem />
            <Discover
                isReverce={true}
                bgImage="https://softek.radiantthemes.com/wp-content/uploads/2020/10/Vector077-7.png"
                content={{
                    name: 'Our History',
                    title: 'Expertise In Diverse Business Verticals',
                    info: 'Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus.',
                }}
            />
            <Analyst />
            <AboutTeam />
        </div>
    );
};

export default About;
