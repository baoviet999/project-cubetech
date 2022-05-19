import React from 'react';

interface OfferCardProp {
    item: {
        name: string;
        img: string;
        desc: string;
        position: string;
    };
}

const OfferCard = ({ item: { name, img, desc, position } }: OfferCardProp) => {
    return (
        <div className="test__card">
            <img src={img} alt={name} />
            <p>{desc}</p>
            <h4>{name}</h4>
            <span>{position}</span>
        </div>
    );
};

export default OfferCard;
