import Button from 'components/common/Button/Button';
import React from 'react';
import './BlogSubcrice.scss';
const BlogSubcrice = () => {
    return (
        <div className="blog-subcrice">
            <h5>Subscribe To Our Newsletter</h5>
            <p>Daily. Someday is not a day of the week. Class aptent.</p>
            <input type="text" placeholder="Email" />
            <Button title="Submit" />
        </div>
    );
};

export default BlogSubcrice;
