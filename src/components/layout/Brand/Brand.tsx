import React from 'react';
import './Brand.scss';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FEATURED } from 'data/fearturedData';
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

    return (
        <div className="brand">
            <div className="grid wide">
                <Swiper pagination={true} spaceBetween={50} slidesPerView={5} grabCursor={true} loop={true}>
                    {BRAND_DATA.map((item, indx) => (
                        <SwiperSlide key={indx}>
                            <div className="brand__item">
                                <div className="brand__img">
                                    <img src={item.img2} alt="" />
                                    <img src={item.img1} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Brand;
