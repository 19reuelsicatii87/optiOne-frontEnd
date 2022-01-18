import React from 'react'
import Header from './Components/Header';
import Banner from './Components/Banner';
import ProductDesc from './Components/ProductDesc';
import ProductPromotion from './Components/ProductPromotion';
import Contactus from './Components/Contactus';
import Undertake from './Components/Undertake';
import Footer from './Components/Footer';
import ContactusPopUp from './Components/ContactusPopUp';

function Home() {

    return (
        <div>
            <Header></Header>
            <ContactusPopUp></ContactusPopUp>
            <Banner></Banner>
            <ProductDesc></ProductDesc>
            <Contactus></Contactus>
            <ProductPromotion></ProductPromotion>
            <Undertake></Undertake>
            <Footer></Footer>
        </div>
    )
}

export default Home
