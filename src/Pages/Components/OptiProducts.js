import React from 'react'

function OptiProducts() {
    return (
        <section id="products" >

            <div className="fluid bg-primary p-5">
                <div className="row my-2">
                    <h2 className="text-light fw-bold text-start">OUR PRODUCTS</h2>
                    <p className="text-light text-start">One Opti is one of the health and wellness industry's quickest developing
                        organizations, and not for reasons unknown! Our promise to finding naturally
                        sourced ingredients and extracts from around the globe is only the start.
                        We utilize those ingredients to handcraft well-being, all-natural products
                        for your health and body.</p>
                </div>

                <div className="row" >
                    <div className="col-md-7">
                        <img className="m-2" src="/Images/OneOptiJuice.jpg" style={{ height: '97%', width: '100%', borderRadius: "10%" }} alt="productDesc"></img>
                    </div>
                    <div className="col-md-5 d-flex flex-column">
                        <img className="m-2" src="/Images/OneOptiCoffee.jpg" style={{ height: '100%', width: '100%', borderRadius: "5%" }} alt="productDesc"></img>
                        <img className="m-2" src="/Images/OneOptiSlimCoffee.jpg" style={{ height: '100%', width: '100%', borderRadius: "5%" }} alt="productDesc"></img>
                    </div>
                </div>

                <div className="row" >
                    <div className="col-md-5 d-flex flex-column">
                        <img className="m-2" src="/Images/OneOptiLinimentOil.jpg" style={{ height: '100%', width: '100%', borderRadius: "5%" }} alt="productDesc"></img>
                        <img className="m-2" src="/Images/OneOptiMiracleOil.jpg" style={{ height: '100%', width: '100%', borderRadius: "5%" }} alt="productDesc"></img>
                    </div>
                    <div className="col-md-7">
                        <img className="m-2" src="/Images/OneOptiStemCellSoap.jpg" style={{ height: '97%', width: '100%', borderRadius: "10%" }} alt="productDesc"></img>
                    </div>
                </div>

                <div className="row" >
                    <div className="col-md-7">
                        <img className="m-2" src="/Images/OneOptiPapayaSoap.jpg" style={{ height: '97%', width: '100%', borderRadius: "10%" }} alt="productDesc"></img>
                    </div>
                    <div className="col-md-5 d-flex flex-column">
                        <img className="m-2" src="/Images/OneOptiGlutaCapsule.jpg" style={{ height: '100%', width: '100%', borderRadius: "5%" }} alt="productDesc"></img>
                        <img className="m-2" src="/Images/OneOptiChoco.jpg" style={{ height: '100%', width: '100%', borderRadius: "5%" }} alt="productDesc"></img>
                    </div>
                </div>

                <div className="row" >
                    <p className="text-light">You can buy these products at our Lazada Shop for exciting promos and discounts!</p>
                    <div className="d-flex justify-content-center">
                        <button type="button" class="btn btn-success btn-lg w-50">SHOP AT LAZADA</button>
                    </div>
                </div>
            </div>






            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="py-3" src="/Images/undertake03.jpg" style={{ height: '100%', width: '100%' }} alt="undertake03"></img>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="d-flex flex-column">
                            <h1 className="text-start fw-bold mb-3" style={{ color: "#ef4943" }}>FREE! FREE! FREE!</h1>
                            <p className="text-start mb-0">Sign up now and get a</p>
                            <p className="text-start mb-0"><b>FREE</b> PDF Member Handbook</p>
                            <p className="text-start mb-0"><b>FREE</b>  Delivery anywhere in the Philippines</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="fluid my-5 py-5">
                <div className="bg-primary py-5">
                    <h1 className="fw-bold mb-3 text-light">MEMBERSHIP</h1>
                    <h3 className="fw-light">Get up to 42.8% discount on all products!</h3>
                    <h3 className="fw-light">Great for Resellers or Personal Use!</h3>
                    <div className="d-flex justify-content-center mt-5">
                        <button type="button" class="btn btn-success btn-lg w-50">HOW TO BECOME A MEMBER</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default OptiProducts
