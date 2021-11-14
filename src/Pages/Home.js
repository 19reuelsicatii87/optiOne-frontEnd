import React from 'react'
import Header from './Components/Header';
import Banner from './Components/Banner';
import ProductDesc from './Components/ProductDesc';
import ProductPromotion from './Components/ProductPromotion';
import Undertake from './Components/Undertake';
import Footer from './Components/Footer';

function Home() {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <ProductDesc></ProductDesc>
            <ProductPromotion></ProductPromotion>
            <Undertake></Undertake>
            <Footer></Footer>
        </div>
    )
}

export default Home
