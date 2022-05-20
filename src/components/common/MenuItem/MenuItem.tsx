import React, { ReactNode, useEffect, useRef } from 'react';
import './MenuItem.scss';
interface MenuItemProp {
    children: ReactNode;
    height: number;
}

const MenuItem = ({ children, height }: MenuItemProp) => {
    // const menuRef = useRef<HTMLDivElement>(null);
    // const content = document.querySelectorAll('menu-item');
    // useEffect(() => {
    // }, []);
    return (
        <div style={{ bottom: `-${height + 45}px` }} className="menu-item">
            {children}
        </div>
    );
};

export default MenuItem;
