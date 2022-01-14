import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'
import withRouter from './WithRouter'

function DViewLeadComp(props) {

    useEffect(() => {

        retrieveLead();

    }, []);

    // Leads States
    // =================================================
    const leadStatusOptions = ["Open", "Contacted", "Qualified", "Unqualified", "Closed"];
    const leadStageOptions = ["Need More Info", "Will Purchase", "Likely Purchase", "Will Not Purchase", "Purchased"];

    // Leads States
    // =================================================
    const [modalShowSuccess, setModalShowSuccess] = useState(false);
    const [modalShowError, setModalShowError] = useState(false);
    const [id, setID] = useState("");
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [status, setStatus] = useState("");
    const [stage, setStage] = useState("");
    const [message, setMessage] = useState("");

    async function retrieveLead() {
        let requestLead = {
            method: 'GET',
            url: process.env.REACT_APP_BACKENDURL + '/api/getLead/' + props.router.params.id,
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }

        let responseLead = await axios(requestLead);
        setID(responseLead.data.id);
        setFullname(responseLead.data.fullname);
        setEmail(responseLead.data.email);
        setMobile(responseLead.data.mobile);
        setStage(responseLead.data.stage);
        setStatus(responseLead.data.status);
        setMessage(responseLead.data.message);
        console.log(responseLead);
    }

    async function updateLead() {

        if (!fullname || !email || !mobile || !message) {

            console.log("One or all fields are empty");
            setModalShowError(true);

        }

        else {


            let formData = new FormData();
            formData.append('id', id);
            formData.append('fullname', fullname);
            formData.append('email', email);
            formData.append('mobile', mobile);
            formData.append('stage', stage);
            formData.append('status', status);
            formData.append('message', message);



            let requestUpdateLead = {
                method: 'POST',
                url: process.env.REACT_APP_BACKENDURL + '/api/updateLead',
                headers: {
                    "Content-Type": 'multipart/form-data',
                    "Accept": 'application/json'
                },
                data: formData
            }

            let responseUpdateLead = await axios(requestUpdateLead);
            setID(responseUpdateLead.data.id);
            setFullname(responseUpdateLead.data.fullname);
            setEmail(responseUpdateLead.data.email);
            setMobile(responseUpdateLead.data.mobile);
            setStage(responseUpdateLead.data.stage);
            setStatus(responseUpdateLead.data.status);
            setMessage(responseUpdateLead.data.message);
            setModalShowSuccess(true);
        }


    }


    return (
        <section id="contact-us" className="container my-5">
            <div className="">

                <div className="row d-flex justify-content-center mb-5">

                    <div className="col-md-9">
                        <div className="mb-3">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Fullname<small style={{ color: "red", paddingLeft: "0.2em" }}>(REQ)</small> </span>
                                <input type="text"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    placeholder={fullname}
                                    onChange={(e) => setFullname(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Email Address<small style={{ color: "red", paddingLeft: "0.2em" }}>(REQ)</small> </span>
                                <input type="email"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    placeholder={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Mobile Number<small style={{ color: "red", paddingLeft: "0.2em" }}>(REQ)</small> </span>
                                <input type="text"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    placeholder={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Status<small style={{ color: "red", paddingLeft: "0.2em" }}>(REQ)</small> </span>
                                <select className="form-control" onChange={(e) => setStatus(e.target.value)}>
                                    <option defaultValue={status}>{status != null ? status : 'Select Status'}</option>
                                    {leadStatusOptions.map((leadStatusOption) =>
                                        leadStatusOption != status
                                        && <option Value={leadStatusOption}>{leadStatusOption}</option>
                                    )}
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Stage<small style={{ color: "red", paddingLeft: "0.2em" }}>(REQ)</small> </span>
                                <select className="form-control" onChange={(e) => setStage(e.target.value)}>
                                    <option defaultValue={stage}>{stage != null ? stage : 'Select Stage'}</option>
                                    {leadStageOptions.map((leadStageOption) =>
                                        leadStageOption != stage
                                        && <option Value={leadStageOption}>{leadStageOption}</option>
                                    )}
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Message<small style={{ color: "red", paddingLeft: "0.2em" }}>(REQ)</small> </span>
                                <textarea
                                    className="form-control"
                                    placeholder={message}
                                    rows="6"
                                    onChange={(e) => setMessage(e.target.value)} required>
                                </textarea>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-success btn-lg w-100 mb-1"
                            onClick={updateLead}
                        >Update</button>
                        <a className='btn btn-info btn-lg w-100'
                            href='/dashboard/listLead'
                        >Back</a>

                    </div>
                </div>
            </div>
            <Modal show={modalShowSuccess} onHide={() => setModalShowSuccess(false)}>
                <Modal.Body style={{ color: "green" }}>
                    <p className="mb-0 fw-bold">Lead Successfully Update</p>
                    <small>Good job.. Well done!!</small>
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

export default withRouter(DViewLeadComp)
