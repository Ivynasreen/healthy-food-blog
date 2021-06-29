import React from 'react';
import Header from '../Header/Header';
import TopRecipes from '../Top Recipes/TopRecipes';
import Blog from '../../Blog/Blog';
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <TopRecipes />
            <Blog />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;