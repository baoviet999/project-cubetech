import { BLOG_POPULAR } from 'data/BlogPopular';
import React from 'react';
import './BlogPopular.scss';
const BlogPopular = () => {
    return (
        <ul className="blog-popular">
            {BLOG_POPULAR.map((item, indx) => (
                <li key={indx}>
                    <a href={item.link}>{item.name}</a>
                </li>
            ))}
        </ul>
    );
};

export default BlogPopular;
