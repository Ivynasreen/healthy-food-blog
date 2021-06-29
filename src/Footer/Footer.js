import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer class="footer-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="fs-left">
                            <div class="name">
                                <h3 style = {{color: 'darkred'}}>Healthy Food Blog</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                viverra maecenas accumsan lacus vel facilisis.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 offset-lg-1">
                        <form action="#" class="subscribe-form">
                            <h3>Subscribe to our newsletter</h3>
                            <input type="email" placeholder="Your e-mail" />
                            <button type="submit">Subscribe</button>
                        </form>
                        <div class="social-links">
                            <a href="https://www.instagram.com">< i class = "fa fa-instagram"></i></a>
                            <a href="https://www.pinterest.com">< i class = "fa fa-pinterest"></i></a>
                            <a href="https://www.facebook.com">< i class = "fa fa-facebook"></i></a>
                            <a href="https://www.twitter.com">< i class = "fa fa-twitter"></i></a>
                            <a href="https://www.youtube.com">< i class = "fa fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="copyright-text text-center">
                            <p>Copyright {(new Date()).getFullYear()} | All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;