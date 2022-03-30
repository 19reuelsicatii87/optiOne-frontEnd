import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

function OrderPaymentFailed() {

    const [orderCode, setOrderCode] = useState();
    const navigate = useNavigate();

    function trackPackage() {
        navigate('/order/payment/' + orderCode)
    }

    return (
        <section id='order-payment-success'>
            <div className='container'>
                <div className='row d-flex align-items-center'>
                    <div className='col-lg-4'>
                        <div className="col-lg-6 offset-lg-3">
                            <img src="/Images/Failed.jpg" className="img-fluid" alt="Responsive image"></img>
                        </div>
                        <h1 className='' style={{ color: 'red' }}>Payment Unsuccessful</h1>
                        <small>
                            We're unable to receive and process your payment.
                            Dont worry, you're not charge for this transaction.
                        </small>
                        <div className="mt-5">
                            <div className="my-3">
                                <p>Provide the details below to try again.</p>
                                <div className="d-flex flex-row justify-content-center">
                                    <div className='col-lg-9'>
                                        <input className="form-control" type="text" placeholder="Order Tracking Code"
                                            onChange={(e) => setOrderCode(e.target.value)}></input>
                                    </div>
                                    <div className='col-lg-3'>
                                        <button className="btn btn-primary mx-1" type="submit"
                                            style={{ backgroundColor: '' }}
                                            onClick={trackPackage}>Try Again!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <img src="/Images/FailedPayment.jpg" className="img-fluid" alt="Responsive image"></img>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default OrderPaymentFailed