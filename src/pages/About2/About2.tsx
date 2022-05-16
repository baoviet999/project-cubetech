import AboutBanner from 'components/layout/AboutBanner/AboutBanner';
import AboutItem from 'components/layout/AboutITem/AboutItem';
import AboutTeam from 'components/layout/AboutTeam/AboutTeam';
import Analyst from 'components/layout/Analyst/Analyst';
import Discover from 'components/layout/Discover/Discover';
import Help from 'components/layout/Help/Help';
import History from 'components/layout/History/History';

const About2 = () => {
    return (
        <div className="home">
            <AboutBanner data={{ name: 'About Company', title: 'Home  About Us-02' }} />
            <Discover
                isReverce={true}
                bgImage="https://softek.radiantthemes.com/wp-content/uploads/2020/10/About01-7.png"
                content={{
                    name: 'About Company',
                    title: 'Business Agency ThatnHelps You Succeed',
                    info: 'Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus. Phasellus magna erat, consectetur nec faucibus at, mollis vitae mauris.',
                }}
            />
            <History />
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
            <Help/>
        </div>
    );
};

export default About2;
