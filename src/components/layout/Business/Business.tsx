import Button from 'components/common/Button/Button';
import React from 'react';
import './Business.scss';
const Business = () => {
    return (
        <div className="business">
            <h1>Breaking The Ice Concept For A Business Transparency</h1>
            <div className="business__btn">
                <Button title="Get Started" />
            </div>
            <div className="business__img">
                <img src="https://softek.radiantthemes.com/wp-content/uploads/2020/09/rocket-7.png" alt="" />
            </div>
        </div>
    );
};

export default Business;
