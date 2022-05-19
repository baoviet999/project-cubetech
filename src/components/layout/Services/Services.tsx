import ServiceItem from 'components/common/ServiceItem/ServiceItem';
import { SERVICE, SERVICE2 } from 'data/serviceData';
import { motion } from 'framer-motion';
import React from 'react';
import { variants } from 'utils/variants';
import './Services.scss';

interface ServiceProps {
    total: number;
    isCol: boolean;
    itemTotal: number;
}

const Services = ({ total, isCol, itemTotal }: ServiceProps) => {
    return (
        <div className="services">
            <div className="grid wide">
                <motion.div
                    className="services__title"
                    variants={variants}
                    initial="open"
                    whileInView="closed"
                    transition={{ duration: 0.8 }}
                >
                    <h3>Services We Deliver</h3>
                    <h1>Our Featured Services</h1>
                </motion.div>
                <div className="row gutter">
                    {SERVICE2.slice(0, itemTotal).map((item, indx) => (
                        <ServiceItem isCol={isCol} key={indx} item={item} indx={indx} total={total} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
