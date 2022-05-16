import Button from 'components/common/Button/Button';
import React from 'react';
import './BlogItem.scss';

interface BlogItemProps {
    img: string;
    name: string;
    desc: string;
}

const BlogItem = ({ img, name, desc }: BlogItemProps) => {
    return (
        <div className="blog-item">
            <div
                className="blog-item__img"
                style={{
                    backgroundImage: `url(${img})`,
                }}
            ></div>
            <div className="blog-item__content">
                <h1>{name}</h1>
                <div className="blog-item__info">
                    <img
                        className="blog-item__info--avt"
                        alt=""
                        src="https://secure.gravatar.com/avatar/73b4139debef2ee43e62b9af56059117?s=150&d=mm&r=g"
                    />
                    <span>November 20, 2020</span>
                </div>
                <p>{desc}</p>
                <Button title="Read more" />
            </div>
        </div>
    );
};

export default BlogItem;
