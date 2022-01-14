import React from 'react'
import { Link, useNavigate } from "react-router-dom"

function Header() {

    let user = JSON.parse(localStorage.getItem("user-info"));
    const navigate = useNavigate();


    function logout() {
        localStorage.clear();
        navigate("/dashboard/login");
    }

    return (
        <section id="navbar" className="container-fluid bg-primary py-4">
            <div id="menu">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                        <div>
                            <a className="navbar-brand" href="/dashboard/listProduct">
                                <img src="/Images/Logo.jpg" alt="logo" style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                        <div>
                            <div className="collapse navbar-collapse" id="navbarColor03">

                                <ul className="navbar-nav me-auto">
                                    {
                                        localStorage.getItem("user-info")
                                            ?
                                            <>
                                                <li className="nav-item dropdown d-flex justify-content-end">
                                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Packages
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-end bg-dark" aria-labelledby="navbarDropdown">
                                                        <li><Link className="dropdown-item nav-link text-center" to="/dashboard/listPackage">List Package</Link></li>
                                                        <li><Link className="dropdown-item nav-link text-center" to="/dashboard/searchProduct">Search Package</Link></li>
                                                    </ul>
                                                </li>

                                                <li className="nav-item dropdown d-flex justify-content-end">
                                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Product
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-end bg-dark" aria-labelledby="navbarDropdown">
                                                        <li><Link className="dropdown-item nav-link text-center" to="/dashboard/listProduct">List Product</Link></li>
                                                        <li><Link className="dropdown-item nav-link text-center" to="/dashboard/searchProduct">Search Product</Link></li>
                                                    </ul>
                                                </li>

                                                <li className="nav-item dropdown d-flex justify-content-end">
                                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Lead
                                                    </a>
                                                    <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                                                        <li><Link className="dropdown-item nav-link text-center" to="/dashboard/listLead">List Lead</Link></li>
                                                        <li><Link className="dropdown-item nav-link text-center" to="/dashboard/searchLead">Search Lead</Link></li>
                                                    </ul>
                                                </li>

                                                <li className="nav-item dropdown d-flex justify-content-end">
                                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        {user.emailAddress}
                                                    </a>
                                                    <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                                                        <li><Link className="dropdown-item nav-link text-center" to="/dashboard/profile/setting">Setting</Link></li>
                                                        <li><hr className="dropdown-divider"></hr></li>
                                                        <li className="dropdown-item nav-link text-center" onClick={logout}>Logout</li>
                                                    </ul>
                                                </li>
                                            </>

                                            :
                                            <>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/dashboard/login">Login</Link>
                                                </li>
                                                {/* <li className="nav-item">
                                                    <Link className="nav-link" to="/dashboard/register">Register</Link>
                                                </li> */}
                                            </>
                                    }
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
