import React from 'react'

function Footer() {
    return (

        <section id="footer" className="fluid">
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-3 pt-3">
                        <h4 className="text-start mb-1"> Terms & Condition</h4>
                        <p className="text-start mb-0"><a href="/test01">Privacy Policy</a></p>
                        <p className="text-start  mb-0"><a href="/test02">Return and Refund Policy</a></p>
                    </div>
                    <div className="col-md-3 pt-3">
                        <h4 className="text-start mb-1">Customer Support</h4>
                        <p className="text-start mb-0"><a href="/contact-us">Contact Us</a></p>
                        <p className="text-start mb-0"><a href="/membership/online-business-presentation">Online Business Presentation</a></p>
                        <p className="text-start mb-0"><a href="/blogs">Blogs</a></p>
                    </div>
                    <div className="col-md-3 pt-3">
                        <h4 className="text-start mb-1">About Us</h4>
                        <p className="text-start mb-0"><a href="/test011">Learn more about One Opti Lifestyle International, OPC</a></p>
                        <p className="text-start mb-0"><a href="/contact-us">Feedback Form</a></p>
                    </div>
                    <div className="col-md-3 pt-3">
                        <h4 className="text-start mb-1">Contact Us</h4>
                        <div id="footer-contact-details" className="">
                            <p className="text-start mb-1"><i className="bi bi-phone-fill"> 09354363702 </i></p>
                            <p className="text-start mb-1"><i className="bi bi-envelope-fill"> reynaldo.monforte@gmail.com </i></p>
                            <p className="text-start mb-1"><i className="bi bi-facebook"> Malasakit One Opti </i></p>
                        </div>

                    </div>
                </div>

            </div>
        </section>

    )
}

export default Footer
