import Button from 'components/common/Button/Button';
import React from 'react';
import './NotFound.scss';
const NotFound = () => {
    return (
        <div className="notfound__wrap">
            <div className="notfound">
                <h1>404</h1>
                <p>
                    Oops! It could be you or us, there is no page here. It might have been moved or deleted.
                </p>
                <div className="notfound__btn">
                    <Button title="Back To Home" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;
