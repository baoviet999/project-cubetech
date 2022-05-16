import React from 'react';
import { motion } from 'framer-motion';

interface ServiceProp {
    item: {
        img: string;
        name: string;
        title: string;
    };
    indx: number;
    total: number;
}
const itemVariant = {
    itemI: { opacity: 0, y: -100 },
    itemClose: { opacity: 1, y: 0 },
};
const ServiceItem = ({ item, indx, total }: ServiceProp) => {
    return (
        <motion.div
            className={`col l-${total}`}
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
    );
};

export default ServiceItem;
