import ContentHeader from 'components/common/ContentHeader/ContentHeader';
import Progress from 'components/common/Progress/Progress';
import Discover from 'components/layout/Discover/Discover';
import Offer from 'components/layout/Offer/Offer';
import Test from 'components/layout/Test/Test';
import { ABOUT_DISCOVER } from 'data/aboutDiscover';
import { WHY_DATA } from 'data/whyData';
import React from 'react';
import WhyItem from './components/WhyItem';
import './Why.scss';
const Why = () => {
    return (
        <>
            <div className="why">
                <div className="why__line"></div>
                <ContentHeader
                    name="How We Work"
                    content="Preparing For Your Success"
                    desc="Maecenas varius sem dui. Vestibulum semper ante a viverra posuere. Maecenas eleifend fermentum eros, et tristique eros."
                />
                <div className="grid wide">
                    {WHY_DATA.map((item, indx) => (
                        <WhyItem item={item} key={indx} indx={indx} />
                    ))}
                </div>
            </div>
            <Offer />
            <Discover
                isReverce={true}
                bgImage={ABOUT_DISCOVER[9].bgImage}
                content={ABOUT_DISCOVER[9].content}
            >
                <Progress time={60} />
                <Progress time={90} />
                <Progress time={75} />
            </Discover>
            <Test />
        </>
    );
};

export default Why;
