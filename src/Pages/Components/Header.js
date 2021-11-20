import React from 'react'

function Header() {
    return (
        <section id="header">
            <div id="contact-details" className="d-flex justify-content-center text-primary">
                <div className="row w-75 p-2">
                    <div className="col-sm-3">
                        <p className="mb-0"><b>Call Us:</b></p>
                        <i class="bi bi-phone-fill"> 09354363702 </i>
                    </div>
                    <div className="col-sm-6">
                        <p className="mb-0"><b>Email Us:</b></p>   
                        <i class="bi bi-envelope-fill"> reynaldo.monforte@gmail.com </i>
                    </div>
                    <div className="col-sm-3">
                        <p className="mb-0"><b>Visit Us:</b></p>                        
                        <i class="bi bi-facebook"> Malasakit One Opti </i>
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
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/testd">ORDER</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/teste">ABOUT US</a>
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
