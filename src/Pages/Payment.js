import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import OrderPaymentForm from './Components/OrderPaymentForm';

function Payment() {
    return (
        <div>
            <Header></Header>
            <OrderPaymentForm></OrderPaymentForm>
            <Footer></Footer>
        </div>
    )
}

export default Payment
