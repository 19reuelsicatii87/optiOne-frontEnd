import React, { useState, useEffect } from 'react';
import Footer from './Components/Footer';
import DHeader from './Components/DHeader';

function DRegistration() {

    const [sponsorCodeStatus, setsponsorCodeStatus] = useState(false);


    const SponsorCode = () => {
        return (

            sponsorCodeStatus
                ?
                <div className="mb-1">
                    <p for="exampleInputEmail1" className="text-start mb-0">Sponsor Code</p>
                    <input type="password" className="form-control" id="exampleInputPassword1"></input>
                </div >
                :
                <div className="mb-1" hidden>
                    <p for="exampleInputEmail1" className="text-start mb-0">Sponsor Code</p>
                    <input type="password" className="form-control" id="exampleInputPassword1"></input>
                </div >
        )
    }

    return (
        <section>
            <DHeader></DHeader>

            <div id="registration" className="fluid"
                style={{
                    backgroundImage: `url(/Images/RegistrationBackGround7.jpg)`,
                    opacity: "0.8", height: "100%", backgroundRepeat: "no-repeat",
                    backgroundSize: "cover", backgroundPosition: "center"
                }}>
                <div className="container">

                    <div className="row py-5">
                        <div className="d-flex justify-content-center align-items-center">
                            <form>
                                <div className="mb-2">
                                    <p for="exampleInputEmail" className="text-start mb-0">Email address</p>
                                    <input type="email" className="form-control"></input>
                                </div>
                                <div className="mb-2">
                                    <p for="exampleInputEmail" className="text-start mb-0">Password</p>
                                    <input type="password" className="form-control"></input>
                                </div>
                                <div className="mb-2">
                                    <p for="exampleInputEmail" className="text-start mb-0">Confirm Password</p>
                                    <input type="password" className="form-control"></input>
                                </div>
                                {SponsorCode()}
                                <div className="mb-3 form-check">
                                    <input type="checkbox"
                                        className="form-check-input"
                                        id="exampleCheck1"
                                        onChange={() => setsponsorCodeStatus(!sponsorCodeStatus)}></input>
                                    <p for="exampleInputEmail" className="text-start mb-0"><small>Register with Sponsor?</small></p>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>

                    </div>


                </div>

            </div>

            <Footer></Footer>


        </section>
    )
}

export default DRegistration
