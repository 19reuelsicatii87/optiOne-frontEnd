import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import OrderPaymentSuccess from './Components/OrderPaymentSuccess';

function PaymentSuccess() {
    return (
        <div>
            <Header></Header>
            <OrderPaymentSuccess></OrderPaymentSuccess>
            <Footer></Footer>
        </div>
    )
}

export default PaymentSuccess
