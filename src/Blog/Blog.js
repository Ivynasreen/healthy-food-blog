import React from 'react';
import './Blog.css';
import Blogs from '../Blogs/Blogs';
import image from '../images/cake.jpg';
import image1 from '../images/fries.jpg';
import image2 from '../images/noodles.jpg';
import image3 from '../images/pasta.jpg';
import image4 from '../images/pastry.jpg';
import image5 from '../images/pizza.jpg';

const Blog = () => {
    const blogs = [
        {
            image: { image5 },
            title: "Mozarella Chese Pizza",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit"
        },
        {
            image: { image3 },
            title: "Italian Chicken Pasta",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit"

        },
        {
            image: { image },
            title: "Cheese Cake Tart",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit"
        },
        {
            image: { image2 },
            title: "Spaghetti Bolognese",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit"
        },
        {
            image: { image4 },
            title: "Italian Cream Cake",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit"
        },
        {
            image: { image1 },
            title: "Crispy Chicken Fries",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit"
        },
    ]

    return (
        <div className="blog">
            <h2>Latest Blogs</h2>
            <div className="row">
                {
                    blogs.map(blog => <Blogs blog={blog}></Blogs>)
                }
            </div>

        </div>
    );
};

export default Blog;