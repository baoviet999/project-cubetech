import AboutBanner from 'components/layout/AboutBanner/AboutBanner';
import React from 'react';
import './Blog.scss';
import BlogMain from './components/BlockMain/BlogMain';
import BlogBar from './components/BlogBar/BlogBar';
const Blog = () => {
    return (
        <div className="blog">
            <AboutBanner data={{ name: 'Our Blog', title: 'Home  Blog' }} />
            <div className="grid wide">
                <div className="row ">
                    <div className="col l-9">
                        <BlogMain />
                    </div>
                    <div className="col l-3">
                        <BlogBar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
