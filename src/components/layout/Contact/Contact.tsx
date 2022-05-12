import { Call, Email } from 'assets/svg';
import React from 'react';
import { motion } from 'framer-motion';
import './Contact.scss';
const Contact = () => {
    const variants = {
        open: { opacity: 0, y: 100 },
        closed: { opacity: 1, y: 0 },
    };
    return (
        <div className="contact">
            <div className="hero__outside1 contact__outside"></div>
            <div className="grid wide">
                <div className="row gutter">
                    <div className="col l-6 m-12 c-12">
                        <div className="contact__img"></div>
                    </div>
                    <div className="col l-6 m-12 c-12">
                        <div className="contact__content">
                            <motion.h3
                                variants={variants}
                                initial="open"
                                whileInView="closed"
                                transition={{ duration: 0.8 }}
                            >
                                Simple To Get Started
                            </motion.h3>
                            <motion.h1
                                variants={variants}
                                initial="open"
                                whileInView="closed"
                                transition={{ duration: 0.8, delay: 0.1 }}
                            >
                                To Make Your Claim Contact Us On Given Social Platforms.
                            </motion.h1>
                            <motion.p
                                variants={variants}
                                initial="open"
                                whileInView="closed"
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Simple To Get Started To Make Your Claim Contact Us On Given Social Platforms.
                                Morbi sagittis hendrt nulla ultricies. Cras en diam ips elementum pretium
                                hendrerit ultricies
                            </motion.p>
                            <motion.div
                                variants={variants}
                                initial="open"
                                whileInView="closed"
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="contact__btns"
                            >
                                <div className="contact__btn">
                                    <div className="contact__btn--img">
                                        <Call />
                                    </div>
                                    <div className="contact__btn--call">
                                        <h3>Call For Active Now</h3>
                                        <h3>+1 (888) 123-5678</h3>
                                    </div>
                                </div>
                                <div className="contact__btn">
                                    <div className="contact__btn--img">
                                        <Email />
                                    </div>
                                    <div className="contact__btn--call">
                                        <h3>Call For Active Now</h3>
                                        <h3>+1 (888) 123-5678</h3>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
