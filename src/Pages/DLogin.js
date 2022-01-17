import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'
import Footer from './Components/Footer';
import DHeader from './Components/DHeader';

function DLogin() {



    // Leads States
    // =================================================
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [modalShowErrorMissingField, setModalShowErrorMissingField] = useState(false);
    const [modalShowErrorIncorrectField, setModalShowErrorIncorrectField] = useState(false);
    const navigate = useNavigate();

    async function login() {

        if (!emailAddress || !password) {

            console.log("One or all fields are empty");
            setModalShowErrorMissingField(true);

        }

        else {

            let requestUser = {
                method: 'POST',
                url: 'http://localhost:8000/api/login',
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                },
                data: {
                    "emailAddress": emailAddress,
                    "password": password
                }
            }

            let responseUser = await axios(requestUser);
            console.log(responseUser.data.email)


            if (emailAddress === responseUser.data.emailAddress && "1" === responseUser.data.is_emailconfirmed) {
                localStorage.setItem("user-info", JSON.stringify(responseUser.data));
                navigate('/dashboard/listProduct');
            }
            else {

                setModalShowErrorIncorrectField(true);
            }


        }
    }

    return (
        <>
            <DHeader></DHeader>
            <section id="dashboard-login">
                <div id="registration" className="fluid"
                    style={{
                        backgroundImage: `url(/Images/RegistrationBackGround7.jpg)`,
                        opacity: "0.8", height: "100%", backgroundRepeat: "no-repeat",
                        backgroundSize: "cover", backgroundPosition: "center"
                    }}>
                    <div className="container">

                        <div className="row py-5">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="col-md-9">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">EmailAddress</span>
                                        <input type="email"
                                            className="form-control"
                                            aria-describedby="emailHelp"
                                            placeholder="Juan Dela Cruz"
                                            onChange={(e) => setEmailAddress(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Password</span>
                                        <input type="password"
                                            className="form-control"
                                            aria-describedby="emailHelp"
                                            placeholder="Juan Dela Cruz"
                                            onChange={(e) => setPassword(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <button type="submit"
                                        className="btn btn-success btn-lg w-100"
                                        onClick={login}>Login</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={modalShowErrorMissingField} onHide={() => setModalShowErrorMissingField(false)}>
                    <Modal.Body style={{ color: "red" }}>
                        <p className="mb-0 fw-bold">One or more fields are invalid or empty</p>
                        <small>Please check the fields and click "Submit" button again!</small>
                    </Modal.Body>
                </Modal>
                <Modal show={modalShowErrorIncorrectField} onHide={() => setModalShowErrorIncorrectField(false)}>
                    <Modal.Body style={{ color: "red" }}>
                        <p className="mb-0 fw-bold">Incorrect Username or Password</p>
                        <small>Please check the fields and click "Submit" button again!</small>
                    </Modal.Body>
                </Modal>
            </section>
            <Footer></Footer>
        </>
    )
}

export default DLogin
