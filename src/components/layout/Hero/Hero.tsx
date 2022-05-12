import Button from 'components/common/Button/Button';
import { motion } from 'framer-motion';
import React from 'react';
import './Hero.scss';

const Hero = () => {
    const variants = {
        open: { opacity: 0, x: -250 },
        closed: { opacity: 1, x: 0 },
    };
    return (
        <div className="hero">
            <div className="hero__outside1"></div>
            <div className="hero__outside2"></div>
            <div className="grid wide">
                <div className="row">
                    <div className="col l-6 m-6 c-12">
                        <div className="hero__left">
                            <motion.h3
                                initial="open"
                                whileInView="closed"
                                transition={{ duration: 1 }}
                                variants={variants}
                            >
                                IT Services Designer
                            </motion.h3>
                            <motion.h1
                                initial="open"
                                whileInView="closed"
                                transition={{ duration: 1, delay: 0.1 }}
                                variants={variants}
                            >
                                Awesome IT Services For Your Business
                            </motion.h1>
                            <motion.p
                                initial="open"
                                whileInView="closed"
                                transition={{ duration: 1, delay: 0.2 }}
                                variants={variants}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio,
                                molestiae dolore unde assumenda earum deserunt aspernatur quaerat,
                            </motion.p>
                            <motion.div
                                variants={variants}
                                initial="open"
                                whileInView="closed"
                                transition={{ duration: 1, delay: 0.3 }}
                                className="hero__left--bt"
                            >
                                <Button title="Start a Project" x={30} />
                                <div className="hero__left--btn hero__left--call">
                                    <h4>Call us 888-123-4587</h4>
                                    <h4>For any question</h4>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="col l-6 m-6 c-12">
                        <div className="hero__right">
                            <motion.div
                                initial={{ x: 200, opacity: 0 }}
                                // animate={{ x: 0, opacity: 1 }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 1 },
                                }}
                                viewport={{ once: false }}
                                transition={{ ease: 'easeInOut', duration: 1 }}
                                className="hero__right--img"
                            ></motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;