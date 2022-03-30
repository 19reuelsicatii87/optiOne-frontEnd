import React from 'react'

function OrderPaymentSuccess() {
    return (
        <section id='order-payment-success'>
            <div className='container'>
                <div className='row d-flex align-items-center'>
                    <div className='col-lg-4'>
                        <div className="col-lg-6 offset-lg-3">
                            <img src="/Images/Success.jpg" className="img-fluid" alt="Responsive image"></img>
                        </div>
                        <h1 className='text-success'>Payment Successful</h1>
                        <small>Thank You for trusting Malasakit One Opti. We're happy and
                            excited to share this journey with you.
                        </small>
                        <div className="mt-5">
                            <div className="my-3">
                                <p>Continue exploring and know us more.</p>
                                <a href="/" className="btn btn-success btn-lg mx-1 mb-1">
                                    <i className="bi bi-house mx-1"></i>
                                    Take Me Home
                                </a>
                                <a href="/blogs" className="btn btn-secondary btn-lg mx-1">
                                    <i className="bi bi-journal mx-1"></i>
                                    Blogs
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <img src="/Images/SuccessPayment.jpg" className="img-fluid" alt="Responsive image"></img>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default OrderPaymentSuccess