import React from 'react';
import Header from '../Header/Header';
import TopRecipes from '../Top Recipes/TopRecipes';
import Blog from '../../Blog/Blog';

const Home = () => {
    return (
        <div>
            <Header />
            <TopRecipes />
            <Blog />
        </div>
    );
};

export default Home;