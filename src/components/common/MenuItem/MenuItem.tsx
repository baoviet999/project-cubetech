import React, { ReactNode, useEffect, useRef } from 'react';
import './MenuItem.scss';
interface MenuItemProp {
    children: ReactNode;
}

const MenuItem = ({ children }: MenuItemProp) => {
    // const menuRef = useRef<HTMLDivElement>(null);
    // const content = document.querySelectorAll('menu-item');
    // useEffect(() => {
    //     console.log(content);
    // }, []);
    return <div className="menu-item">{children}</div>;
};

export default MenuItem;
