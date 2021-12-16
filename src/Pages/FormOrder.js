import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import OrderProductForm from './Components/OrderProductForm';

function FormOrder() {
    return (
        <div>
            <Header></Header>
            <OrderProductForm></OrderProductForm>
            <Footer></Footer>
        </div>
    )
}

export default FormOrder
