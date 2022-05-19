import Button from 'components/common/Button/Button';
import React from 'react';

interface PricingItemProp {
    item: {
        name: string;
        img: string;
        price: string;
        btnContent: string;
        bestSeller: boolean;
    };
}

const PricingItem = ({ item: { name, img, price, btnContent, bestSeller } }: PricingItemProp) => {
    return (
        <div className="col l-4">
            <div className={`pricing__item ${bestSeller && 'active'}`}>
                {bestSeller && (
                    <div className="pricing__tag">
                        <p>Most Popular</p>
                    </div>
                )}
                <h5>{name}</h5>
                <img src={img} alt="" />
                <div className="pricing__price">
                    <span>$</span>
                    <p>{price}</p>
                    <span>/Per Month</span>
                </div>
                <ul className="pricing__list">
                    <li>
                        <strong>Mobile</strong> Application
                    </li>
                    <li>
                        <strong>Android</strong> App Design
                    </li>
                    <li>
                        <strong>Mobile </strong>App Development
                    </li>
                    <li>
                        <strong>Software</strong> Development
                    </li>
                </ul>
                <Button title={btnContent} />
            </div>
        </div>
    );
};

export default PricingItem;
