import React from 'react';

const Contact = () => {
    const buttonStyle = {
        backgroundColor: 'darkred' ,
        color: 'white',
        padding: '5px 20px',
        borderRadius: '5px',
        border: 'none'

    }
    return (
        <section className = "contact my-5 py-5">
            <div className="container">
                <div>
                    <h5 className = "text-center" style = {{color: 'darkred', fontWeight: 'bold'}}>Contact Us</h5>
                    <h1 className = "text-brand text-center">Always Connect With Us</h1>
                </div>
                <div  className="col-md-9 mx-auto">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Full Name"/>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email Address"/>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <textarea name ="" className="form-control" cols = "30" rows="10" placeholder="Your Message*"></textarea>
                        </div>
                        <br></br>
                        <div className="form-group text-center">
                           <button type="button" style = {buttonStyle}> Submit </button>
                       </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;