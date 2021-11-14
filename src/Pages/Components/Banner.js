import React from 'react'
import "../../Assets/css/Landing.css"

function Banner() {

    return (
        <section id="Banner" className=" d-flex justify-content-center heroStyling"
            style={{ backgroundImage: `url(/Images/Veggies.jpg)`, opacity: "0.9" }}>
            <div className="d-flex align-items-center">
                <div className="d-flex flex-column">
                    <h1 className="display-5 fw-bold text-light">MALASAKIT ONE OPTI</h1>
                    <p className="fw-light text-light">Welcome to Malasakit One Opti, Independent Distributor at One Opti Lifestyle International.</p>
                    <div className="d-flex justify-content-center">
                        <button type="button" class="btn btn-success w-25">PRODUCTS</button>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Banner
