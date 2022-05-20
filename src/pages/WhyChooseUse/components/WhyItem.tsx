import React from 'react';
import { motion } from 'framer-motion';
interface WhyItemProp {
    item: {
        img: string;
        name: string;
        desc: string;
        color: string;
        borderColor: string;
    };
    indx: number;
}

const WhyItem = ({ item: { name, img, desc, color, borderColor }, indx }: WhyItemProp) => {
    const variants = {
        open: { opacity: 0, x: -300 },
        closed: { opacity: 1, x: 0 },
    };
    const variants2 = {
        open: { opacity: 0, x: -300 },
        closed: { opacity: 1, x: 0 },
    };
    return (
        <div className="row" style={{ flexDirection: `${indx % 2 === 0 ? 'row' : 'row-reverse'}` }}>
            <div className="col l-6">
                <motion.div
                    className="why__left"
                    variants={variants}
                    initial="open"
                    whileInView="closed"
                    transition={{ duration: 0.8 }}
                >
                    <img src={img} alt="" />
                </motion.div>
            </div>
            <div className="col l-6">
                <motion.div
                    variants={variants2}
                    transition={{ duration: 0.8 }}
                    initial="open"
                    whileInView="closed"
                    className="why__right"
                >
                    <div className="why__right--card" style={{ borderLeft: `5px solid ${borderColor}` }}>
                        <div className="why__right--num">
                            <span style={{ background: color }}>{`0${indx + 1}`}</span>
                        </div>
                        <div className="why__right--content">
                            <h5>{name}</h5>
                            <p>{desc}</p>
                        </div>
                        <div className="why__right--line">
                            <div className="why__right--a"></div>
                            <div className="why__right--point"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default WhyItem;
