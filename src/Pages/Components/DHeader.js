import React from 'react'
import { Link, useNavigate } from "react-router-dom"

function Header() {

    let user = JSON.parse(localStorage.getItem("user-info"));
    const history = useNavigate();


    function logout() {
        localStorage.clear();
        history.navigate("/dashboard/login");
    }

    return (
        <section id="navbar" className="container-fluid bg-primary px-5 py-4">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand fw-bold" href="/">Dashboard</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end w-100">
                        {
                            localStorage.getItem("user-info")
                                ?
                                <>
                                    <li className="nav-item dropdown d-flex justify-content-end">
                                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Product
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end bg-dark" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item nav-link text-center" to="/dashboard/addProduct">Add Product</Link></li>
                                            <li><Link className="dropdown-item nav-link text-center" to="/dashboard/listProduct">List Product</Link></li>
                                            <li><Link className="dropdown-item nav-link text-center" to="/dashboard/searchProduct">Search Product</Link></li>
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown d-flex justify-content-end">
                                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Lead
                                        </a>
                                        <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item nav-link text-center" to="/dashboard/addLead">Add Lead</Link></li>
                                            <li><Link className="dropdown-item nav-link text-center" to="/dashboard/listLead">List Lead</Link></li>
                                            <li><Link className="dropdown-item nav-link text-center" to="/dashboard/searchLead">Search Lead</Link></li>
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown d-flex justify-content-end">
                                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {user.email}
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
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/dashboard/register">Register</Link>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </nav>
        </section>

    )
}

export default Header
