import React from 'react';
import './TopRecipes.css';


const TopRecipes = () => {
    return (
        <div className="top-recipe">
            <div className="row">
                <h2>Top Recipes this Week</h2>
                <div className="col-lg-6">
                    <div className="top-recipe-item left">
                        <div className="top-recipe-image">
                            <img src="https://www.iheartnaptime.net/wp-content/uploads/2017/08/easy-lasagna-soup-i-heart-naptime-4-857x1200.jpg" alt="" />
                        </div>
                        <div className="top-recipe-text">
                            <h3>Lasagna Soup Recipes</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit deleniti sapiente voluptates nesciunt hic illum reprehenderit! Esse officia architecto reiciendis excepturi ullam culpa, dignissimos porro delectus. Totam, voluptates, corrupti repellendus temporibus necessitatibus dolorum libero quas possimus sunt magnam dolore excepturi.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="top-recipe-item mushroom">
                        <div className="row m-0">
                            <div className="col-sm-4">
                                <img src="http://3.bp.blogspot.com/-lxkVRbvXsFU/UMjSH4Owq6I/AAAAAAAACPA/I59PNux4LfE/s1600/030%20vitamin%20vegetable%20soup.jpg" width="220px" alt="" />
                            </div>
                            <div className="col-sm-8">
                                <div className="top-recipe-text">
                                    <h4>Veggie Soup With Mushroom</h4>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus pariatur ullam ratione doloribus facere debitis eaque expedita illum iure repellat!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-recipe-item mushroom">
                        <div className="row m-0">
                            <div className="col-sm-4">
                                <img src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/3599e9c7-4ad7-4860-a9a5-ffb0b5c55877/57aa438a-29c2-4236-91bc-6c3d57d446b1/1280x720/match/image.jpg" width="220px" alt="" />
                            </div>
                            <div className="col-sm-8">
                                <div className="top-recipe-text">
                                    <h4>Onion Soup Gratine</h4>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus pariatur ullam ratione doloribus facere debitis eaque expedita illum iure repellat!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-recipe-item mushroom">
                        <div className="row m-0">
                            <div className="col-sm-4">
                                <img src="https://i.pinimg.com/originals/3f/1a/b4/3f1ab474c89f1718a91a8ea9a61d5c3c.jpg" width="220px" alt="" />
                            </div>
                            <div className="col-sm-8">
                                <div className="top-recipe-text">
                                    <h4>Caramel Ice-cream with Berries</h4>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus pariatur ullam ratione doloribus facere debitis eaque expedita illum iure repellat!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-recipe-item mushroom">
                        <div className="row m-0">
                            <div className="col-sm-4">
                                <img src="https://ca-times.brightspotcdn.com/dims4/default/d9d0ead/2147483647/strip/true/crop/2000x1050+0+38/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8a%2F72%2F4a2dd59f4a8fb00d388fc4c88306%2Fburger-juniper-ivy-sized.jpg" width="220px" alt="" />
                            </div>
                            <div className="col-sm-8">
                                <div className="top-recipe-text">
                                    <h4>Feta Cheese Burgers</h4>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus pariatur ullam ratione doloribus facere debitis eaque expedita illum iure repellat!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopRecipes;