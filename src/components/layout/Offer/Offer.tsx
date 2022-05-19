import React from 'react';
import './Offer.scss';
const Offer = () => {
    const OFFER_DATA = [
        {
            name: 'Business Collaboration',
            desc: 'Morbi sagittis hendrerit nulla in ultricies. Cras n en diam',
        },
        {
            name: 'Engineering & Services',
            desc: 'Proin scelerisque porttitor feugiat. Mauris meopo en varius t',
        },
        {
            name: 'Creative Minds',
            desc: 'Aenean pharetra est dictum, ultricies nontem er sum. Cras en',
        },
        {
            name: 'Revenue Generation',
            desc: 'Mauris varius tellus eu lectus suscipit, sed sus cipito nisi ',
        },
    ];

    return (
        <div className="offer">
            <h3>What We Offer</h3>
            <h1>Prominent IT Services</h1>
            <div className="grid wide">
                <div className="row">
                    {OFFER_DATA.map((item, indx) => (
                        <div className="col l-6">
                            <div className="offer__card">
                                <img
                                    src="https://softek.radiantthemes.com/wp-content/uploads/2020/11/Capa-7.png"
                                    alt=""
                                />
                                <div className="offer__content">
                                    <h3>{item.name}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Offer;
