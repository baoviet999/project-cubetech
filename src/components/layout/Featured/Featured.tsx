import { FEATURED } from 'data/fearturedData';
import { motion } from 'framer-motion';
import React from 'react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { variants } from 'utils/variants';
import './Featured.scss';

const Featured = () => {
    return (
        <div className="featured">
            <div className="grid wide">
                <div className="featured__content">
                    <motion.h3
                        variants={variants}
                        initial="open"
                        whileInView="closed"
                        transition={{ duration: 0.8 }}
                    >
                        Featured Services
                    </motion.h3>
                    <motion.h1
                        variants={variants}
                        initial="open"
                        whileInView="closed"
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Our Latest Case Studies
                    </motion.h1>
                    <motion.p
                        variants={variants}
                        initial="open"
                        whileInView="closed"
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae
                        vulputate nibh libero ac metus phasellus magna erat
                    </motion.p>
                </div>
                <div className="row">
                    <Swiper
                        pagination={true}
                        // modules={[Pagination]}
                        spaceBetween={50}
                        slidesPerView={3}
                        grabCursor={true}
                    >
                        {FEATURED.map((item, indx) => (
                            <SwiperSlide key={indx}>
                                <div className="featured__item">
                                    <img src={item.img} alt="" width="100%" height="100%" />
                                    <div className="featured__popup">
                                        <h3>{item.name}</h3>
                                        <h5>{item.title}</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Featured;
