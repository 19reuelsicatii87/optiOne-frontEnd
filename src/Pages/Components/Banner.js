import React from 'react'
import "../../Assets/css/Landing.css"

function Banner() {

    return (
        <section id="Banner" className=" d-flex justify-content-center heroStyling"
            style={{ backgroundImage: `url(/Images/Banner.jpg)`}}>
            <div className="d-flex align-items-center">
                <div className="d-flex flex-column text-success">
                    <h1 className="display-5 fw-bold" style={{fontSize: "50px"}}>MALASAKIT</h1>
                    <h1 className="display-5 fw-bold" style={{fontSize: "50px"}}>ONE OPTI</h1>
                    <p className="mb-0">Welcome to Malasakit One Opti, Independent</p>
                    <p className="">Distributor at One Opti Lifestyle International.</p>
                    <div className="d-flex justify-content-center">
                        <a
                        className="btn btn-lg btn-success"
                        href='/products'
                        >PRODUCTS</a>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Banner
