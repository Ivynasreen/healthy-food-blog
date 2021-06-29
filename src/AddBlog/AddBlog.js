import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddBlog = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const blogData = {
            name: data.name,
            description: data.description,
            imageURL: imageURL,

        }
        console.log(data)
        const url = `http://localhost:5500/addBlog`;
        console.log(blogData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleImageUpload = blog => {
        console.log(blog.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '8049a7bec90db17809ced82f236506a4')
        imageData.append('image', blog.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                console.log(response.data.data.display_url);
                setImageURL(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    // console.log(data)
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div style={{ position: "absolute", right: 0 }} className="col-md-10 p-5 ms-5">
                <h5 className="text-danger">Add Blog</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-group">
                        <label>Blog Title</label>
                        <input type="text" class="form-control" name="name" defaultValue="Blog Title" ref={register} />
                    </div>
                    <br />
                    <div class="form-group">
                        <label>Description</label>
                        <input type="text" class="form-control" name="description" defaultValue="Description" ref={register} />
                    </div>
                    <br />
                    <div class="form-group">
                        <label for="upload">Upload Image</label>
                        <input type="file" class="form-control" name="exampleRequired" placeholder="Upload" onChange={handleImageUpload} />
                    </div>
                    <br />
                    <button type="submit" style={{ backgroundColor: 'darkred', color: 'white', padding: '5px 20px', border: 'none' }}>Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddBlog;