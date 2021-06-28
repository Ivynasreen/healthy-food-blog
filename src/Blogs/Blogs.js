import React from 'react';

const Blogs = (props) => {
    const {image, title, content} = props.blog;
    return (
        <div className="col-md-4 text-center service">
            {/* <img style={{height: '300px'}} src={require(`../../images/${event.pic}`)} alt=""/> */}
            <img style={{ height: '200px'}} src={image} alt="" />
            <h5 className="mt-3 mb-3 text-brand text-uppercase">{title}</h5>
            <p className="text-secondary">{content}</p>
        </div>
    );
};

export default Blogs;