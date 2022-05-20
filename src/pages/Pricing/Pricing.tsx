import Switch from 'components/common/Switch/Switch';
import { pricingData, pricingDataBig } from 'data/pricingData';
import React, { useState } from 'react';
import PricingItem from './components/PricingItem/PricingItem';
import './Pricing.scss';
const Pricing = () => {
    const [price, setPrice] = useState(true);
    const data = price ? pricingData : pricingDataBig;
    return (
        <div className="pricing">
            <h6>Pricing Plan</h6>
            <h3>Great Price Plan For You!</h3>
            <p>
                Maecenas varius sem dui. Vestibulum semper ante a viverra posuere. Maecenas eleifend fermentum
                eros, et tristique eros.
            </p>
            <label className={`label ${price && 'active'}`}>
                <h5 className={`${price && 'active'} `}>Monthly</h5>
                <Switch active={price} setActive={setPrice} />
                <h5 className={`${!price && 'active'} `}>Annualy</h5>
            </label>
            <div className="grid wide">
                <div className="row">
                    {data.map((item, idx) => (
                        <PricingItem item={item} key={idx} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
