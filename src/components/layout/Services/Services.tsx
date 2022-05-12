import { SERVICE } from 'data/serviceData';
import { motion } from 'framer-motion';
import React from 'react';
import './Services.scss';

const Services = () => {
    const variants = {
        open: { opacity: 0, y: 100 },
        closed: { opacity: 1, y: 0 },
    };
    const itemVariant = {
        itemI: { opacity: 0, y: -100 },
        itemClose: { opacity: 1, y: 0 },
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
                        <motion.div
                            className="col l-6"
                            variants={itemVariant}
                            initial="itemI"
                            whileInView="itemClose"
                            transition={{ duration: 0.8, delay: indx * 0.3 }}
                        >
                            <div className="services__item">
                                <div className="services__item--img">
                                    <item.img />
                                </div>
                                <div className="services__item--content">
                                    <h3>{item.name}</h3>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
