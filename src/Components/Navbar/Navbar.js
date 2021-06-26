import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="https://www.charity.com"><img src="https://cdn.dribbble.com/users/947358/screenshots/14161822/media/048fe25c31735da93ef9b1614a37fac0.png?compress=1&resize=400x300" alt="" width="120" /><strong className ="ms-3">Healthy Food Blog</strong></a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link me-5 text-brand" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" class="nav-link me-5 text-brand" style={{ textDecoration: 'none'}}>About</Link>
                        </li>
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} to="/blog" class="nav-link me-5 text-brand">Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact" class="nav-link me-5 text-brand" style={{ textDecoration: 'none' }}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;