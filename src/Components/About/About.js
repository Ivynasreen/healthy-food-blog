import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css';

const About = () => {
    return (
        <div>
            <Navbar />
            <section class="about-section set-bg">
                <div class="container">
                    <h2>About us</h2>
                </div>
            </section>
            <section class="about spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 about-text">
                            <h3 style = {{fontSize: '30px', color: '#474747'}}>About our great team</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magni. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magni.</p>
                            <div class="site-btn">Read more</div>
                        </div>
                        <div class="col-lg-6">
                            <img src="https://blog.hubspot.com/hubfs/How-to-Be-A-Better-Blogger.jpg" alt = ""/>
                        </div>
                    </div>
                </div>
        </section>
       </div>
            );
};

            export default About;