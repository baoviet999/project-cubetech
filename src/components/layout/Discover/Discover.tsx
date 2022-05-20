import { Dot, DotOrange } from 'assets/svg';
import Button from 'components/common/Button/Button';
import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import { variants } from 'utils/variants';
import './Discover.scss';

interface DiscoverProps {
    bgImage?: string;
    content?: {
        name: string;
        title: string;
        info: string;
    };
    isReverce?: boolean;
    children?: ReactNode;
}

const Discover = ({ bgImage, content, isReverce = false, children }: DiscoverProps) => {
    return (
        <div className="discover">
            <div className="grid wide">
                <div className="row gutter" style={{ flexDirection: `${isReverce ? 'row-reverse' : 'row'}` }}>
                    <div className="col l-6 m-12 c-12">
                        <motion.div
                            variants={variants}
                            initial="open"
                            whileInView="closed"
                            transition={{ duration: 0.8 }}
                            className="discover__img"
                            style={{ backgroundImage: `url(${bgImage})` }}
                        >
                            <div className="discover__img-sub"></div>
                        </motion.div>
                    </div>
                    <div className="col l-6 m-12 c-12">
                        <div className="discover__content">
                            <motion.h3
                                variants={variants}
                                initial="open"
                                whileInView="closed"
                                transition={{ duration: 0.8 }}
                            >
                                {content?.name}
                            </motion.h3>
                            <motion.h1
                                variants={variants}
                                initial="open"
                                whileInView="closed"
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                {content?.title}
                            </motion.h1>
                            <motion.p
                                variants={variants}
                                initial="open"
                                whileInView="closed"
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                {content?.info}
                            </motion.p>
                            {children ? (
                                children
                            ) : (
                                <>
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                                elit tellus, luctus nec ullamcorper mattis
                                            </p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        variants={variants}
                                        initial="open"
                                        whileInView="closed"
                                        transition={{ duration: 0.8, delay: 0.5 }}
                                        className="discover__content--section"
                                    >
                                        <div className="discover__content--dot">
                                            <DotOrange />
                                        </div>
                                        <div className="discover__content--title">
                                            <h3>Engaging Group Discussion</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                                elit tellus, luctus nec ullamcorper mattis
                                            </p>
                                        </div>
                                    </motion.div>
                                    <Button title="Discover More" x={30} />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;
