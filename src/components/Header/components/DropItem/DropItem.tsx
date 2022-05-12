import { drop } from 'assets/img';
import Menu from 'components/common/Menu/Menu';
import MenuItem from 'components/common/MenuItem/MenuItem';
import React from 'react';
import './DropItem.scss';
type Props = {
    item: any;
    indx: number;
};

const DropItem = ({ item, indx }: Props) => {
    return (
        <li className="header__item" key={indx}>
            <a href="#">
                <h5>{item.name}</h5>
                <img src={drop} alt="" />
            </a>
            {item.active && <Menu />}
            {!item.active && (
                <MenuItem>
                    <ul className="menu-item__list">
                        <li>
                            <a href="">Classic Box</a>
                        </li>
                        <li>
                            <a href="">Boxed Content</a>
                        </li>
                        <li>
                            <a href="">New Member</a>
                        </li>
                    </ul>
                </MenuItem>
            )}
        </li>
    );
};

export default DropItem;
