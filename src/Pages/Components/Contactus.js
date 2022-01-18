import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'

function ContactUs() {

    // Leads States
    // =================================================
    const [modalShowSuccess, setModalShowSuccess] = useState(false);
    const [modalShowError, setModalShowError] = useState(false);
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [message, setMessage] = useState("");

    async function addLead() {

        if (!fullname || !email || !mobile || !message) {

            console.log("One or all fields are empty");
            setModalShowError(true);

        }

        else {

            let formData = new FormData();
            formData.append('fullname', fullname);
            formData.append('email', email);
            formData.append('mobile', mobile);
            formData.append('stage', "Marketing Acquired Lead");
            formData.append('status', "Open");
            formData.append('message', message);

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
            setModalShowSuccess(true);

        }
    }


    return (
        <section id="contact-us" className="container bg-primary my-5 py-5">
            <div className="">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center">
                            <i className="bi bi-envelope text-light" style={{ fontSize: "70px" }}></i>
                        </div>
                        <h1 className="text-center fw-bold text-light">Message Us</h1>
                        <p className="text-center fs-5 text-light">We would love to hear from you</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mb-5">

                    <div className="col-md-9">
                        <div className="mb-3">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Fullname<small style={{ color: "red", paddingLeft: "0.2em" }}>(REQ)</small> </span>
                                <input type="text"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    placeholder="Juan Dela Cruz"
                                    onChange={(e) => setFullname(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Email Address<small style={{ color: "red", paddingLeft: "0.2em" }}>(REQ)</small> </span>
                                <input type="email"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    placeholder="juandelacruz@gmail.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Mobile Number<small style={{ color: "red", paddingLeft: "0.2em" }}>(REQ)</small> </span>
                                <input type="text"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    placeholder="09174676123"
                                    onChange={(e) => setMobile(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Message<small style={{ color: "red", paddingLeft: "0.2em" }}>(REQ)</small> </span>
                                <textarea
                                    className="form-control"
                                    placeholder="Drop your message here and we'll call on your most immediate and available time."
                                    rows="6"
                                    onChange={(e) => setMessage(e.target.value)} required>
                                </textarea>
                            </div>
                        </div>
                        <button type="submit"
                            className="btn btn-success btn-lg w-100"
                            onClick={addLead}>Submit</button>
                    </div>
                </div>
            </div>
            <Modal show={modalShowSuccess} onHide={() => setModalShowSuccess(false)}>
                <Modal.Body style={{ color: "green" }}>
                    <p className="mb-0 fw-bold">Thank you for your message</p>
                    <small>You will here from us soon!</small>
                </Modal.Body>
            </Modal>
            <Modal show={modalShowError} onHide={() => setModalShowError(false)}>
                <Modal.Body style={{ color: "red" }}>
                    <p className="mb-0 fw-bold">One or more fields are invalid or empty</p>
                    <small>Please check the fields and click "Submit" button again!</small>
                </Modal.Body>
            </Modal>
        </section >
    )
}

export default ContactUs
