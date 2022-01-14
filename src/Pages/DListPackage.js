import React from 'react'
import DHeader from './Components/DHeader';
import Footer from './Components/Footer';
import DListPackageComp from './Components/DListPackageComp';

function DListProduct() {
    return (
        <div>
            <DHeader></DHeader>
            <DListPackageComp></DListPackageComp>
            <Footer></Footer>
        </div>
    )
}

export default DListProduct
