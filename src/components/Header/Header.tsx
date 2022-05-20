import { logo } from 'assets/img';
import { MenuToggle } from 'components/common/MenuToggle/MenuToggle';
import { HEADER_ITEM } from 'data/headerList';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import DropItem from './components/DropItem/DropItem';
import { HiMenu } from 'react-icons/hi';
import './Header.scss';
import Search from 'components/common/Search/Search';
const Header = () => {
    const [shink, setShrink] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    useEffect(() => {
        const shrinkHeader = () => {
            if (window.scrollY >= 100) setShrink(true);
            else setShrink(false);
        };
        window.addEventListener('scroll', shrinkHeader);
        return () => window.removeEventListener('scroll', shrinkHeader);
    });

    return (
        <motion.div
            initial={{ y: '0', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ease: 'easeInOut', duration: 0.8 }}
            className={`header ${shink && 'active'} `}
        >
            <div className="grid wide">
                <div className="header-wrap">
                    <div className="header__logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="header__right">
                        <ul className={`header__list ${activeMenu ? 'height' : ''}`}>
                            {HEADER_ITEM.map((item, indx) => (
                                <DropItem item={item} indx={indx} />
                            ))}
                        </ul>
                        <div className="header__icon">
                            <div className="header__cart">
                                <AiOutlineShoppingCart />
                                <div className="header__cart--badge">0</div>
                            </div>
                            <div className="header__search" onClick={() => setOpenSearch(true)}>
                                <BsSearch />
                            </div>
                            <div className="header__menu" onClick={() => setActiveMenu(!activeMenu)}>
                                <HiMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Search active={openSearch} setActive={setOpenSearch} />
        </motion.div>
    );
};

export default Header;
