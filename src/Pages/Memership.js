import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import DistributorMember from './Components/DistributorMember';
import OptiProductsCarousel from './Components/OptiProductsCarousel';
import MembershipPackages from './Components/MembershipPackages';
import BusinessStrategy from './Components/BusinessStrategy';
import Contactus from './Components/Contactus';

function Memership() {
    return (
        <div>
            <Header></Header>
            <DistributorMember></DistributorMember>
            <OptiProductsCarousel></OptiProductsCarousel>
            <MembershipPackages></MembershipPackages>
            <BusinessStrategy></BusinessStrategy>
            <Contactus></Contactus>
            <Footer></Footer>
        </div>
    )
}

export default Memership
