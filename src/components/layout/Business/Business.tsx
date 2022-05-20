import Button from 'components/common/Button/Button';
import React from 'react';
import { motion } from 'framer-motion';
import './Business.scss';
const Business = () => {
    const variants = {
        open: { opacity: 0, y: 200 },
        closed: { opacity: 1, y: 0 },
    };
    return (
        <div className="business">
            <motion.h1
                variants={variants}
                initial="open"
                whileInView="closed"
                transition={{ duration: 0.8 }}
                className="grid wide"
            >
                Breaking The Ice Concept For A Business Transparency
            </motion.h1>
            <motion.div
                className="business__btn"
                variants={variants}
                initial="open"
                whileInView="closed"
                transition={{ duration: 0.8 }}
            >
                <Button title="Get Started" />
            </motion.div>
            <motion.div
                variants={variants}
                initial="open"
                whileInView="closed"
                transition={{ duration: 0.9 }}
                className="business__img"
            >
                <img src="https://softek.radiantthemes.com/wp-content/uploads/2020/09/rocket-7.png" alt="" />
            </motion.div>
        </div>
    );
};

export default Business;
