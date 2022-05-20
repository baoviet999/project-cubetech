import { FEATURED } from 'data/fearturedData';
import React from 'react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import './AboutTeam.scss';
import { motion } from 'framer-motion';
const AboutTeam = () => {
    const variants = {
        open: { opacity: 0, x: -300 },
        closed: { opacity: 1, x: 0 },
    };
    return (
        <div className="about-team">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-12">
                        <motion.div
                            variants={variants}
                            initial="open"
                            whileInView="closed"
                            transition={{ duration: 0.8 }}
                            className="about-team__title"
                        >
                            <h2>Team Member</h2>
                            <h1>Our Proficient Team</h1>
                        </motion.div>
                    </div>
                    <Swiper
                        pagination={true}
                        modules={[Pagination]}
                        spaceBetween={50}
                        slidesPerView={4}
                        grabCursor={true}
                    >
                        {FEATURED.map((item, indx) => (
                            <SwiperSlide key={indx}>
                                <motion.div
                                    
                                    className="featured__item"
                                >
                                    <img src={item.img} alt="" width="100%" height="100%" />
                                    <div className="featured__popup">
                                        <h3>{item.name}</h3>
                                        <h5>{item.title}</h5>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default AboutTeam;
