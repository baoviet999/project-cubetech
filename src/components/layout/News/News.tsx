import { NEWDATA } from 'data/newsData';
import React from 'react';
import { motion } from 'framer-motion';
import './News.scss';
const News = () => {
    const mainNew = NEWDATA[0];
    const subNew = NEWDATA.slice(1);
    const variants = {
        open: { opacity: 0, y: 100 },
        closed: { opacity: 1, y: 0 },
    };
    return (
        <div className="new">
            <div className="grid wide">
                <div className="new__title">
                    <motion.h3
                        variants={variants}
                        initial="open"
                        whileInView="closed"
                        transition={{ duration: 0.8 }}
                    >
                        Technology solutions
                    </motion.h3>
                    <motion.h1
                        variants={variants}
                        initial="open"
                        whileInView="closed"
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Latest News & Blog
                    </motion.h1>
                </div>
                <div className="row">
                    <div className="col l-6">
                        <div className="new__item">
                            <div
                                className="new__item--img"
                                style={{ backgroundImage: `url(${mainNew.img})` }}
                            >
                                <div className="new__item--tag">{mainNew.cate}</div>
                            </div>
                            <div className="new__item--content">
                                <p>{mainNew.title}</p>
                                <h3>{mainNew.name}</h3>
                                <p>{mainNew.desc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col l-6">
                        <div className="row gutter">
                            {subNew.map((item, indx) => (
                                <div className="col l-12">
                                    <div className="new__item new__item-sub">
                                        <div
                                            className="new__item--img new__item-sub--img"
                                            style={{ backgroundImage: `url(${item.img})` }}
                                        >
                                            <div className="new__item--tag">{item.cate}</div>
                                        </div>
                                        <div className="new__item--content new__item-sub--content">
                                            <p>{item.title}</p>
                                            <h3>{item.name}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
