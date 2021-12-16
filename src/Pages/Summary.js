import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import OrderSummaryForm from './Components/OrderSummaryForm';

function Payment() {
    return (
        <div>
            <Header></Header>
            <OrderSummaryForm></OrderSummaryForm>
            <Footer></Footer>
        </div>
    )
}

export default Payment
