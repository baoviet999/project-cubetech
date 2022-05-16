import { BLOG_ITEM } from 'data/BlogData';
import React from 'react';
import './BlogList.scss';
const BlogList = () => {
    return (
        <ul className="blog-list">
            <h2>Lastest Blogs</h2>
            {BLOG_ITEM.map((item, indx) => (
                <li className="blog-list__item">
                    <div
                        className="blog-list__img"
                        style={{
                            backgroundImage: `url(${item.img})`,
                        }}
                    ></div>
                    <div className="blog-list__content">
                        <p>{item.name}</p>
                        <span>20 Nov, 2020</span>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default BlogList;
