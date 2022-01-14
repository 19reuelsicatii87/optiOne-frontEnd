import React from 'react'
import DHeader from './Components/DHeader';
import Footer from './Components/Footer';
import DViewProductComp from './Components/DViewProductComp';

function DViewProduct() {
    return (
        <div>
            <DHeader></DHeader>
            <DViewProductComp></DViewProductComp>
            <Footer></Footer>
        </div>
    )
}

export default DViewProduct
