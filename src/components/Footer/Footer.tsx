import { logoFooter } from 'assets/img';
import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import { GrNext } from 'react-icons/gr';
import './Footer.scss';
const Footer = () => {
    return (
        <div className="footer">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-4 c-12 m-12">
                        <div className="footer__logo">
                            <img src={logoFooter} alt="" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                            <div className="footer__logo-icons">
                                <div className="footer__logo-icon">
                                    <FaFacebook />
                                </div>
                                <div className="footer__logo-icon">
                                    <FaTwitter />
                                </div>
                                <div className="footer__logo-icon">
                                    <FaInstagram />
                                </div>
                                <div className="footer__logo-icon">
                                    <FaPinterest />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-2 c-12 m-12">
                        <div className="footer__section">
                            <h3>Quick Links</h3>
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Ablut Us</a>
                                </li>
                                <li>
                                    <a href="#">Sevices</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col l-3 c-12 m-12">
                        <div className="footer__section">
                            <h3>Contact Us</h3>
                            <ul>
                                <li>
                                    <a href="#">121 King St, Melbourne VIC 3000, Australia</a>
                                </li>
                                <li>
                                    <a href="#">Info@example.com</a>
                                </li>
                                <li>
                                    <a href="#">+1 (888) 123-5678</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col l-3 m-12 c-12">
                        <div className="footer__section">
                            <h3>Subscribe</h3>
                            <ul>
                                <li>
                                    <a href="#">Follow our newsletter to stay updated about us.</a>
                                </li>
                                <li>
                                    <div className="footer__input">
                                        <input type="text" placeholder="Email Address" />
                                        <div className="footer__input--img"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__bt">
                    <span>2021 Copyright. All Rights menma.</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
