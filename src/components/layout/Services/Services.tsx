import ServiceItem from 'components/common/ServiceItem/ServiceItem';
import { SERVICE } from 'data/serviceData';
import { motion } from 'framer-motion';
import React from 'react';
import './Services.scss';

const Services = () => {
    const variants = {
        open: { opacity: 0, y: 100 },
        closed: { opacity: 1, y: 0 },
    };

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
                    {SERVICE.map((item, indx) => (
                        <ServiceItem key={indx} item={item} indx={indx} total={6} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
