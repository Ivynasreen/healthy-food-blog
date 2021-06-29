import React from 'react';
import './Blogs.css';
import { Link } from 'react-router-dom';

const Blogs = (props) => {
    const {name, description, imageURL} = props.blog;
    return (
        <div className="col-md-4 text-center blogs">
            <img style={{ height: '200px'}} src={imageURL} alt="" />
            <h5 className="mt-3 mb-3 text-brand text-uppercase">{name}</h5>
            <p className="text-secondary">{description}</p>
        </div>
    );
};

export default Blogs;