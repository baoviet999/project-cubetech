import React from 'react';
import BlogBarCard from '../common/BLogBarCard/BlogBarCard';
import BlogBarSearch from '../common/BlogBarSearch/BlogBarSearch';
import BlogList from '../common/BlogList/BlogList';
import BlogPopular from '../common/BlogPopular/BlogPopular';
import BlogSubcrice from '../common/BlogSubcrice/BlogSubcrice';
import './BlogBar.scss';
const BlogBar = () => {
    return (
        <div className="blog-bar">
            <BlogBarCard />
            <BlogBarSearch />
            <BlogList />
            <BlogPopular />
            <BlogSubcrice />
        </div>
    );
};

export default BlogBar;
