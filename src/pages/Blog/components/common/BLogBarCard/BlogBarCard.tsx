import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import './BlogBarCard.scss';
const BlogBarCard = () => {
    return (
        <div className="blog-bar__card">
            <div className="blog-bar__card--img">
                <img
                    src="https://softek.radiantthemes.com/wp-content/uploads/2020/10/Team-women.png"
                    alt=""
                />
            </div>
            <h3>Amada Smith</h3>
            <p>Daily someday is not a day of the week.</p>
            <div className="blog-bar__card--icons">
                <div className="blog-bar__card--icon">
                    <FaFacebook />
                </div>
                <div className="blog-bar__card--icon">
                    <FaTwitter />
                </div>
                <div className="blog-bar__card--icon">
                    <FaInstagram />
                </div>
                <div className="blog-bar__card--icon">
                    <FaPinterest />
                </div>
            </div>
        </div>
    );
};

export default BlogBarCard;
