import React from 'react'
import "../../Assets/css/Landing.css"

function Banner() {

    return (
        <section id="Banner" className=" d-flex justify-content-center heroStyling"
            style={{ backgroundImage: `url(/Images/Banner.jpg)`}}>
            <div className="d-flex align-items-center">
                <div className="d-flex flex-column">
                    <h1 className="display-5 fw-bold text-primary" style={{fontSize: "50px"}}>MALASAKIT ONE OPTI</h1>
                    <p className="fw-light text-primary">Welcome to Malasakit One Opti, Independent Distributor at One Opti Lifestyle International.</p>
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-primary w-25">PRODUCTS</button>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Banner
