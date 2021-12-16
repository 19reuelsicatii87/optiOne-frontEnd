import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom"

function Header() {


    const [orderCode, setOrderCode] = useState();
    const navigate = useNavigate();

    function trackPackage() {

        navigate('/order/summary/' + orderCode)

    }

    return (
        <section id="header">
            <div id="contact-details" className="d-flex justify-content-center text-primary">
                <div className="row w-100 p-2">
                    <div className="col-lg-2 col-md-3">
                        <p className="mb-0"><b>Call Us:</b></p>
                        <i className="bi bi-phone-fill"> 09354363702 </i>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <p className="mb-0"><b>Email Us:</b></p>
                        <i className="bi bi-envelope-fill"> reynaldo.monforte@gmail.com </i>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <p className="mb-0"><b>Visit Us:</b></p>
                        <i className="bi bi-facebook"> Malasakit One Opti </i>
                    </div>
                    <div className="col-lg-3 col-md-12 d-flex flex-row my-2">
                        <input className="form-control" type="text" placeholder="Order Tracking Code"
                        onChange={(e) => setOrderCode(e.target.value)}></input>
                        <button className="btn btn-primary mx-1" type="submit"
                        onClick={trackPackage}>Track</button>
                    </div>
                </div>
            </div>

            <div id="menu">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                        <div>
                            <a className="navbar-brand" href="/testa">
                                <img src="/Images/Logo.jpg" alt="logo" style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                        <div>
                            <div className="collapse navbar-collapse" id="navbarColor03">

                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/">HOME
                                            <span className="visually-hidden">(current)</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/products">PRODUCTS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/membership">MEMBERSHIP</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link active dropdown-toggle"
                                            href="/#" id="navbarDropdown" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            ORDER
                                        </a>
                                        <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item nav-link text-center fw-bold" to="/order/packageform">MEMBERSHIP FORM</Link></li>
                                            <li><Link className="dropdown-item nav-link text-center fw-bold" to="/order/productform">PRODUCT FORM</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/contact-us">CONTACT US</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/blogs">BLOGS</a>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </nav>




            </div>
        </section>
    )
}

export default Header
