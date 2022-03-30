import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import OrderPaymentFailed from './Components/OrderPaymentFailed';

function PaymentFailed() {
    return (
        <div>
            <Header></Header>
            <OrderPaymentFailed></OrderPaymentFailed>
            <Footer></Footer>
        </div>
    )
}

export default PaymentFailed
