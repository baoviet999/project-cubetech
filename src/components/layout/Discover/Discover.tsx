import { Dot, DotOrange } from 'assets/svg';
import Button from 'components/common/Button/Button';
import { motion } from 'framer-motion';
import React from 'react';
import './Discover.scss';
const Discover = () => {
    const variants = {
        open: { opacity: 0, y: 100 },
        closed: { opacity: 1, y: 0 },
    };
    return (
        <div className="discover">
            <div className="grid wide">
                <div className="row gutter">
                    <div className="col l-6 m-12 c-12">
                        <div className="discover__img">
                            <div className="discover__img-sub"></div>
                        </div>
                    </div>
                    <div className="col l-6 m-12 c-12">
                        <div className="discover__content">
                            <motion.h3
                                variants={variants}
                                initial="open"
                                whileInView="closed"
                                transition={{ duration: 0.8 }}
                            >
                                Discover Our Company
                            </motion.h3>
                            <motion.h1
                                variants={variants}
                                initial="open"
                                whileInView="closed"
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Bringing New IT Business Solutions And Ideas
                            </motion.h1>
                            <motion.p
                                variants={variants}
                                initial="open"
                                whileInView="closed"
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                                industry’s standard dummy text.
                            </motion.p>
                            <motion.div
                                variants={variants}
                                initial="open"
                                whileInView="closed"
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="discover__content--section"
                            >
                                <div className="discover__content--dot">
                                    <Dot />
                                </div>
                                <div className="discover__content--title">
                                    <h3>Engaging Group Discussion</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                                        tellus, luctus nec ullamcorper mattis
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={variants}
                                initial="open"
                                whileInView="closed"
                                transition={{ duration: 0.8, delay: 0.5 }}
                                onViewportEnter={()=>console.log('aaaaaa')}
                                className="discover__content--section"
                            >
                                <div className="discover__content--dot">
                                    <DotOrange />
                                </div>
                                <div className="discover__content--title">
                                    <h3>Engaging Group Discussion</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                                        tellus, luctus nec ullamcorper mattis
                                    </p>
                                </div>
                            </motion.div>
                            <Button title="Discover More" x={30} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;
