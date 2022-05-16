import { BLOG_ITEM } from 'data/BlogData';
import React from 'react';
import BlogItem from '../BlogItem';
import './BlogMain.scss';

const BlogMain = () => {
    return (
        <div className="blog-main">
            {BLOG_ITEM.map((item, indx) => (
                <BlogItem img={item.img} desc={item.desc} name={item.name} />
            ))}
        </div>
    );
};

export default BlogMain;
