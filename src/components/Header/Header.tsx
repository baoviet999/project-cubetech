import { logo } from 'assets/img';
import { HEADER_ITEM } from 'data/headerList';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import DropItem from './components/DropItem/DropItem';
import './Header.scss';
const Header = () => {
    const [shink, setShrink] = useState(false);
    useEffect(() => {
        const shrinkHeader = () => {
            if (window.scrollY >= 100) setShrink(true);
            else setShrink(false);
        };
        window.addEventListener('scroll', shrinkHeader);
        return () => window.removeEventListener('scroll', shrinkHeader);
    });
    console.log(shink);
    return (
        <motion.div
            initial={{ y: '0', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ease: 'easeInOut', duration: 0.8 }}
            className={`header ${shink && 'active'}`}
        >
            <div className="grid wide">
                <div className="header-wrap">
                    <div className="header__logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="header__right">
                        <ul className="header__list">
                            {HEADER_ITEM.map((item, indx) => (
                                <DropItem item={item} indx={indx} />
                            ))}
                        </ul>
                        <div className="header__icon">
                            <div className="header__cart">
                                <AiOutlineShoppingCart />
                                <div className="header__cart--badge">0</div>
                            </div>
                            <div className="header__search">
                                <BsSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Header;
