import { drop } from 'assets/img';
import Menu from 'components/common/Menu/Menu';
import MenuItem from 'components/common/MenuItem/MenuItem';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './DropItem.scss';
type Props = {
    item: {
        name: string;
        active?: boolean;
        data: { name: string; link: string }[];
    };
    indx: number;
};

const DropItem = ({ item, indx }: Props) => {
    const [height, setHeight] = useState(0);
    useEffect(() => {
        const menuItem = document.querySelector('.menu-item__list > li') as HTMLElement;
        if (menuItem) setHeight(menuItem.clientHeight);
    }, []);

    return (
        <li className="header__item" key={indx}>
            <a href="#1">
                <h5>{item.name}</h5>
                <img src={drop} alt="" />
            </a>
            {item.active && <Menu />}
            {!item.active && (
                <MenuItem height={height * item.data.length - 3}>
                    <ul className="menu-item__list">
                        {item.data.map((link, indx) => (
                            <li key={indx}>
                                <Link to={link.link}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </MenuItem>
            )}
        </li>
    );
};

export default DropItem;
