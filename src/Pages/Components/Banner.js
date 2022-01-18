import React from 'react'
import "../../Assets/css/Landing.css"

function Banner() {

    return (
        <section id="Banner" className=" d-flex justify-content-center heroStyling"
            style={{ backgroundImage: `url(/Images/Banner.jpg)`}}>
            <div className="d-flex align-items-center">
                <div className="d-flex flex-column" style={{color: "darkgreen"}}>
                    <h1 className="display-5 fw-bold" style={{fontSize: "50px"}}>MALASAKIT ONE OPTI</h1>
                    <p className="">Welcome to Malasakit One Opti, Independent Distributor at One Opti Lifestyle International.</p>
                    <div className="d-flex justify-content-center">
                        <a
                        className="btn text-white"
                        style={{backgroundColor: "darkgreen"}}
                        href='/products'
                        >PRODUCTS</a>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Banner
