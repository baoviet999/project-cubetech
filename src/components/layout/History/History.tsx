import React from 'react';
import './History.scss';
const History = () => {
    return (
        <div className="history">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-6">
                        <div
                            className="history__img"
                            style={{
                                backgroundImage: `url(https://softek.radiantthemes.com/wp-content/uploads/2020/10/About-02-7.png)`,
                            }}
                        ></div>
                    </div>
                    <div className="col l-6">
                        <div className="history__left">
                            <h3>Our History</h3>
                            <h1>Better Website Means A BetternUser Experience</h1>
                            <ul className="history__list">
                                <li className="history__item">
                                    <div className="history__item--img">
                                        <img
                                            src="https://softek.radiantthemes.com/wp-content/uploads/2020/10/Ban14-7.png"
                                            alt=""
                                        />
                                        <img
                                            className="history__item--sub"
                                            src="https://softek.radiantthemes.com/wp-content/uploads/2020/10/dashed-7.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="history__item--content">
                                        <h1>Digital Consultancy</h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                                            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                        </p>
                                    </div>
                                </li>
                                <li className="history__item">
                                    <div className="history__item--img">
                                        <img
                                            src="https://softek.radiantthemes.com/wp-content/uploads/2020/10/Ban14-7.png"
                                            alt=""
                                        />
                                        <img
                                            className="history__item--sub"
                                            src="https://softek.radiantthemes.com/wp-content/uploads/2020/10/dashed-7.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="history__item--content">
                                        <h1>Digital Consultancy</h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                                            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                        </p>
                                    </div>
                                </li>
                                <li className="history__item">
                                    <div className="history__item--img">
                                        <img
                                            src="https://softek.radiantthemes.com/wp-content/uploads/2020/10/Ban14-7.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="history__item--content">
                                        <h1>Digital Consultancy</h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                                            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;
