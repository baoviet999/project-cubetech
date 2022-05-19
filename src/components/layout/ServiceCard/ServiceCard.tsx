import React from 'react';
import './ServiceCard.scss';

interface ServiceCardProps {
    item: {
        active: boolean;
        img: string;
        name: string;
        desc: string;
    };
}

const ServiceCard = ({ item: { active, img, name, desc } }: ServiceCardProps) => {
    return (
        <div className={`service-card ${active && 'active'}`}>
            <img src={img} alt="" />
            <h6>{name}</h6>
            <p>{desc}</p>
        </div>
    );
};

export default ServiceCard;
