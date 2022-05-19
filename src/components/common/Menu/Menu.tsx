import { logo } from 'assets/img';
import { MENU_DROP } from 'data/MenuDrop';
import React, { useEffect, useRef } from 'react';
import { setMenuHeight } from 'utils/setMenuHeight';
import './Menu.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Menu = () => {
    const menuLeft = MENU_DROP.slice(0, 8);
    const menuRight = MENU_DROP.slice(8);

    const listItemRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMenuHeight(menuRef.current, listItemRef.current);
    }, []);

    return (
        <div className={`menu`} ref={menuRef}>
            <div className="row">
                <div className="col l-3">
                    <div className="menu-drop" ref={listItemRef}>
                        <ul className="menu-drop__list">
                            {menuLeft.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.link}>{item.name}</Link>
                                    {item.active && <div className="menu-badge">{item.active.title}</div>}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col l-3">
                    <div className="menu-drop__left">
                        <ul className="menu-drop__list">
                            {menuRight.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col l-6">
                    <div className="menu-drop__logo">
                        <motion.img src={logo} alt="" />
                        <p>Software and IT ServicenWordPress Theme</p>
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="menu-drop__logo--btn"
                        >
                            Purchase Now
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
