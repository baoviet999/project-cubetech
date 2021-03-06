import Button from 'components/common/Button/Button';
import { motion } from 'framer-motion';
import React from 'react';
import { variants } from 'utils/variants';
import './Hero.scss';

interface HeroProps {
    custom: {
        bg?: string;
        label?: string;
        name?: string;
        title?: string;
        btnContent?: string;
        bgInfo?: {
            bgWidth?: string;
            bgHegth?: string;
        };
        background?: string;
    };
}

const Hero = ({
    custom: { bg, label, name, title, btnContent, bgInfo = { bgWidth: '100%', bgHegth: '100%' }, background },
}: HeroProps) => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${background && background})` }}>
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
                                {label}
                            </motion.h3>
                            <motion.h1
                                initial="open"
                                whileInView="closed"
                                transition={{ duration: 1, delay: 0.1 }}
                                variants={variants}
                            >
                                {name}
                            </motion.h1>
                            <motion.p
                                initial="open"
                                whileInView="closed"
                                transition={{ duration: 1, delay: 0.2 }}
                                variants={variants}
                            >
                                {title}
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
                                    <h4>{btnContent}</h4>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="col l-6 m-6 c-12">
                        <div className="hero__right">
                            <motion.div
                                initial={{ x: 200, opacity: 0 }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 1 },
                                }}
                                viewport={{ once: false }}
                                transition={{ ease: 'easeInOut', duration: 1 }}
                                className="hero__right--img"
                                style={{
                                    backgroundImage: `url(${bg})`,
                                    paddingTop: bgInfo.bgHegth,
                                    width: bgInfo.bgWidth,
                                }}
                            ></motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
