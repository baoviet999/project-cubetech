import { FEATURED } from 'data/fearturedData';
import React from 'react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import OfferCard from '../Offer/components/OfferCard';
import './Test.scss';

export const TEST_DATA = [
    {
        img: 'https://softek.radiantthemes.com/wp-content/uploads/2020/09/test-1-7.png',
        desc: '"Morbi molestie blandit libero et tempus.Praesent eget metus pulvinar, eleifend dolor sed, tempus nibh. Lorem ipsum dolor sit amet Fusce vel scelerisque erat facilisis. Donec hendrerit diam sapien, vel scelerisque erat facilisis lorem ipsum dolor sit amet Fusce."',
        name: 'Julia Miller',
        position: 'Web Designer',
    },
    {
        img: 'https://softek.radiantthemes.com/wp-content/uploads/2020/09/testimonials-7.png',
        desc: '"Fusce at nisi sed sapien volutpat malesuada. All the Lorem Ipsum genchunks as dolor sit amet consectetur lorem ipsum dolor sit amet Fusce at nisi sed sapien volutpat malesuada. Lorem ipsum dolor sit amet Fusce vel scelerisque erat facilisis."',
        name: 'Anie Gomez',
        position: 'Graphic Designer',
    },
    {
        img: 'https://softek.radiantthemes.com/wp-content/uploads/2020/10/testi-lady-7.png',
        desc: '"Praesent eget metus pulvinar, eleifend dolor sed, tempus nibh. Lorem ipsum dolor sit amet Fusce vel scelerisque erat facilisis. Donec hendrerit diam sapien, vel scelerisque erat facilisis ut. Fusce sit amet leo ac eros dignissim porta in vel metus."',
        name: 'Anie Gomez',
        position: 'Web Developer',
    },
];

const Test = () => {
    return (
        <div className="test">
            <h3>Service Testimonials</h3>
            <h1>What People Say About Us</h1>
            <p>
                Maecenas varius sem dui. Vestibulum semper ante a viverra posuere. Maecenas eleifend fermentum
                eros, et tristique eros.
            </p>
            <div className="grid wide">
                <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    grabCursor={true}
                >
                    {TEST_DATA.map((item, indx) => (
                        <SwiperSlide key={indx}>
                            <OfferCard item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Test;
