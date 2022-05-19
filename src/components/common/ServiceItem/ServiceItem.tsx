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
    isCol: boolean;
}
const itemVariant = {
    itemI: { opacity: 0, y: -100 },
    itemClose: { opacity: 1, y: 0 },
};
const ServiceItem = ({ item, indx, total, isCol }: ServiceProp) => {
    return (
        <motion.div
            className={`col l-${total}`}
            variants={itemVariant}
            initial="itemI"
            whileInView="itemClose"
            transition={{ duration: 0.8, delay: indx * 0.3 }}
        >
            <div className="services__item" style={{ flexDirection: !isCol ? 'row' : 'column' }}>
                <div className="services__item--img" style={{ width: !isCol? '90px' : '55px', margin: '0' }}>
                    <item.img />
                </div>
                <div className="services__item--content" style={{ textAlign: !isCol ? 'center' : 'left' }}>
                    <h3>{item.name}</h3>
                    <p>{item.title}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceItem;
