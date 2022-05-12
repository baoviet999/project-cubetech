import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';
import './Search.scss';
interface SearchProp {
    active: boolean;
    setActive: (active: boolean) => void;
}

const Search = ({ active, setActive }: SearchProp) => {
    return (
        <div className={`search ${active && 'active'}`}>
            <div className=" grid wide">
                <div className="search__input">
                    <div className="search__input--icon">
                        <BsSearch />
                    </div>
                    <input type="text" placeholder="Type Your Search" />
                    <div className="search__input--icon" onClick={() => setActive(false)}>
                        <MdOutlineClose />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
