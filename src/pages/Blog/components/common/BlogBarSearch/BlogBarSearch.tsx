import React from 'react';
import './BlogBarSearch.scss';
import { BiSearch } from 'react-icons/bi';
const BlogBarSearch = () => {
    return (
        <div className="blog-bar__search">
            <input type="text" placeholder="Search Site" />
            <div className="blog-bar__search--icon">
                <BiSearch />
            </div>
        </div>
    );
};

export default BlogBarSearch;
