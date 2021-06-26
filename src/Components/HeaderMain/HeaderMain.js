import React from 'react';
import './HeaderMain.css';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="http://myhealthydish.com/wp-content/uploads/2015/07/healthy-foods-1024x768.jpg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption">
                        <h2 className ="h2-title-1">Healthy Recipes</h2>
                        <h2 className ="h2-title-2">for the food lovers</h2><br />
                        <h2 className ="h2-title-3">from the popular chefs</h2>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://www.grapevinetownecenter.com/WCMW/wp-content/uploads/2020/04/GettyImages-1083417790.jpg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption">
                        <h2 className ="h2-title-1">Healthy Recipes</h2>
                        <h2 className ="h2-title-2">for the food lovers</h2><br />
                        <h2 className ="h2-title-3">from the popular chefs</h2>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://i1.wp.com/www.eatthis.com/wp-content/uploads/2021/03/healthy-breakfast.jpg?resize=640%2C360&ssl=1" class="d-block w-100" alt="..." />
                    <div class="carousel-caption">
                        <h2 className ="h2-title-1">Healthy Recipes</h2>
                        <h2 className ="h2-title-2">for the food lovers</h2><br />
                        <h2 className ="h2-title-3">from the popular chefs</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;