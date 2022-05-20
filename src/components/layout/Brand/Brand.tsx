import { motion } from 'framer-motion';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { variants } from 'utils/variants';
import './Brand.scss';
const Brand = () => {
    const BRAND_DATA = [
        {
            img1: 'https://softek.radiantthemes.com/wp-content/uploads/2020/09/logo03-1-7.png',
            img2: 'https://softek.radiantthemes.com/wp-content/uploads/2020/09/logo03_Black-7.png',
        },
        {
            img1: 'https://softek.radiantthemes.com/wp-content/uploads/2020/09/logo05-7.png',
            img2: 'https://softek.radiantthemes.com/wp-content/uploads/2020/09/logo05_Black-7.png',
        },
        {
            img1: 'https://softek.radiantthemes.com/wp-content/uploads/2020/09/logo04-7.png',
            img2: 'https://softek.radiantthemes.com/wp-content/uploads/2020/09/logo04_Black-7.png',
        },
        {
            img1: 'https://softek.radiantthemes.com/wp-content/uploads/2020/09/logo03-1-7.png',
            img2: 'https://softek.radiantthemes.com/wp-content/uploads/2020/09/logo03_Black-7.png',
        },
        {
            img1: 'https://softek.radiantthemes.com/wp-content/uploads/2020/09/logo02-7.png',
            img2: 'https://softek.radiantthemes.com/wp-content/uploads/2020/09/logo02_Black-7.png',
        },
        {
            img1: 'https://softek.radiantthemes.com/wp-content/uploads/2020/09/logo01-7.png',
            img2: 'https://softek.radiantthemes.com/wp-content/uploads/2020/09/logo01_black-7.png',
        },
    ];
    const variants = {
        open: { opacity: 0, x: -300 },
        closed: { opacity: 1, x: 0 },
    };

    return (
        <div className="brand">
            <motion.div
                variants={variants}
                initial="open"
                whileInView="closed"
                transition={{ duration: 0.8 }}
                className="grid wide"
            >
                <Swiper pagination={true} spaceBetween={50} slidesPerView={5} grabCursor={true} loop={true}>
                    {BRAND_DATA.map((item, indx) => (
                        <SwiperSlide key={indx}>
                            <motion.div className="brand__item">
                                <div className="brand__img">
                                    <img src={item.img2} alt="" />
                                    <img src={item.img1} alt="" />
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </div>
    );
};

export default Brand;
