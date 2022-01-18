import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'

function ContactusPopUp() {

    useEffect(() => {
        setModalPopUp(true);
    }, []);

    // Leads States
    // =================================================
    const [ShowError, setShowError] = useState(false);
    const [modalPopUp, setModalPopUp] = useState(false);
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    async function addLead() {

        if (!fullname || !email || !mobile) {

            console.log("One or all fields are empty");
            setShowError(true);

        }

        else {

            setModalPopUp(false);

            let formData = new FormData();
            formData.append('fullname', fullname);
            formData.append('email', email);
            formData.append('mobile', mobile);
            formData.append('stage', "Marketing Acquired Lead");
            formData.append('status', "Open");


            let requestAddLead = {
                method: 'POST',
                url: process.env.REACT_APP_BACKENDURL + '/api/addLead',
                headers: {
                    "Content-Type": 'multipart/form-data',
                    "Accept": 'application/json'
                },
                data: formData
            }

            await axios(requestAddLead);



        }
    }


    return (
        <section id="contact-us-popup">
            <Modal
                show={modalPopUp}
                onHide={() => setModalPopUp(false)}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton style={{borderBottomWidth: "0px"}}></Modal.Header>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-9">
                        <div className="d-flex justify-content-center">
                            <i className="bi bi-gift text-primary" style={{ fontSize: "70px" }}></i>
                        </div>
                        <h1 className="text-center fw-bold text-primary">Get Gifts and Discount</h1>
                        <p className="text-center text-primary">Provide details below and receive promotional mails just for you. Hurry and subscribe now!</p>
                    </div>
                </div>
                <Modal.Body>
                    <div className="">
                        <div className="row d-flex justify-content-center mb-5">
                            <div className="col-md-9">
                                <div className="mb-3">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Fullname</span>
                                        <input type="text"
                                            className="form-control"
                                            aria-describedby="emailHelp"
                                            placeholder="Juan Dela Cruz"
                                            onChange={(e) => setFullname(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Email Address</span>
                                        <input type="email"
                                            className="form-control"
                                            aria-describedby="emailHelp"
                                            placeholder="juandelacruz@gmail.com"
                                            onChange={(e) => setEmail(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Mobile Number</span>
                                        <input type="text"
                                            className="form-control"
                                            aria-describedby="emailHelp"
                                            placeholder="09174676123"
                                            onChange={(e) => setMobile(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                </div>
                                <p style={{ color: 'red' }} className='mb-0'> {ShowError && 'One or all fields are empty'} </p>
                                <button type="submit"
                                    className="btn btn-success btn-lg w-100 mb-1"
                                    onClick={addLead}
                                >Subscribe</button>
                                <button type="submit"
                                    className="btn btn-primary btn-lg w-100"
                                    onClick={() => setModalPopUp(false)}
                                >Close</button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </section >
    )
}

export default ContactusPopUp
