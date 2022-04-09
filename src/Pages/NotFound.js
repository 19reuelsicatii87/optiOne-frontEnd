import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';

function NotFound() {
    return (
        <div>
            <Header></Header>
            <section id="404-Not-Found">
                <div className='container'>
                    <div className=" mt-5">
                        <h1 className='text-primary fw-bold mb-1'>Oops! - Error 404</h1>
                        <p className='text-secondary fw-bold'>Requested page not found!</p>
                    </div>
                </div>
                <img src="/Images/404Page.jpg" className="img-fluid" alt="Responsive image"></img>
                <div className='container'>
                    <div className="mt-1">
                        <div className="my-3">
                            <p>Let me help your get back on track.</p>
                            <a href="/" className="btn btn-primary btn-lg mx-1">
                                <i className="bi bi-house mx-1"></i>
                                Take Me Home
                            </a>
                            <a href="/contact-us" className="btn btn-secondary btn-lg mx-1">
                                <i className="bi bi-envelope mx-1"></i>
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default NotFound
