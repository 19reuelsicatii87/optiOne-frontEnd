import React from 'react'

function Undertake() {
    return (
        <section id="undertake">
            <div className="container p-5 mb-5">

                <div className="py-3">
                    <h1 className="d-flex align-contents-start text-primary">WHAT WE DO BEST</h1>
                    <p className="text-start">Affiliate marketing is a type of performance-based marketing in
                        which we reward one or more affiliates for each visitor or customer
                        brought by the affiliate's own marketing efforts. Our affiliates are
                        making a real source of living by referring our all-natural One Opti products.</p>
                </div>

                <div className="">
                    <div className="row">
                        <div className="col-md-6 py-5">
                            <img className="py-3" src="/Images/undertake01.jpg" style={{ height: '75%', width: '100%' }} alt="undertake01"></img>
                            <h3 className="d-flex align-contents-start text-primary">DIRECT SELLING</h3>
                            <p className="text-start">Looking for a way to start a hassle-free business? Direct Selling is an easy way to
                                start a business on the internet. You eliminate the risk of investing in inventory.
                                All you need is time. Learn more about becoming a One Opti distributor by selling
                                our high-quality health and wellness products!</p>
                            <a className="d-flex align-contents-start" href="/membership/online-business-presentation">Learn More</a>

                        </div>
                        <div className="col-md-6 py-5">
                            <img className="py-3" src="/Images/undertake02.jpg" style={{ height: '75%', width: '100%' }} alt="undertake02"></img>
                            <h3 className="d-flex align-contents-start text-primary">MEMBERSHIP PROGRAM</h3>
                            <p className="text-start">Natural and effective remedies are a major passion for many of us.
                                By joining our affiliate program, you can share and recommend the all-natural
                                products that you trust and are proud to represent. In return, you can earn
                                commissions for every successful sale made while sharing natural health
                                and wellness with the world!</p>
                            <p>
                                <a className="d-flex align-contents-start" href="/membership/online-business-presentation">Learn More</a>
                            </p>
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
                        <a
                            type="button"
                            className="btn btn-success btn-lg w-50"
                            href="/membership"
                        >HOW TO BECOME A MEMBER</a>
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

            <div className="fluid bg-primary py-5">
                <div className="row ">
                    <div className="col-md-12 d-flex justify-content-center">
                        <h1 className="text-light fw-light">Like us on Facebook!</h1>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center">
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMalasakit-One-Opti-107544508404985&tabs=timeline&width=350&height=600&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
                            title="facebookpage" width="350" height="600" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Undertake
