import React from 'react'
import DHeader from './Components/DHeader';
import Footer from './Components/Footer';
import DListProductComp from './Components/DListProductComp';

function DListProduct() {
    return (
        <div>
            <DHeader></DHeader>
            <DListProductComp></DListProductComp>
            <Footer></Footer>
        </div>
    )
}

export default DListProduct
