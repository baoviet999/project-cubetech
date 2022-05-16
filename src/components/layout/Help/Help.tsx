import Button from 'components/common/Button/Button';
import React from 'react';
import './Help.scss';
const Help = () => {
    return (
        <div className="help">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-6">
                        <div className="help__right">
                            <div
                                className="help__img"
                                style={{
                                    backgroundImage: `url(https://softek.radiantthemes.com/wp-content/uploads/2020/10/About03-7.png)`,
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="col l-6">
                        <div className="help__content">
                            <h3>Get In Touch</h3>
                            <h1>We Provide Best Services.NNeed Help?</h1>
                            <form action="" className="help__form">
                                <input type="text" className="help__input" placeholder="Your Name* " />
                                <input type="text" className="help__input" placeholder="Your Email*" />
                                <textarea
                                    className="help__input help__input--lg"
                                    placeholder="Message*"
                                />
                                <Button title="Send Message" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
