import React from 'react'

function OptiProductsCarousel() {
    return (
        <section id="OptiProducts-carousel">
            <div className="fluid p-3 bg-primary">
                <div className="container">
                    <h1 className="text-start text-light pb-3" >OUR PRODUCTS</h1>
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="/Images/OneOptiJuice.jpg" class="d-block w-100" alt="OptiOneJuice"></img>
                            </div>
                            <div class="carousel-item">
                                <img src="/Images/OneOptiChoco.jpg" class="d-block w-100" alt="OptiOneChoco"></img>
                            </div>
                            <div class="carousel-item">
                                <img src="/Images/OneOptiCoffee.jpg" class="d-block w-100" alt="OptiOneCoffee"></img>
                            </div>
                            <div class="carousel-item">
                                <img src="/Images/OneOptiSlimCoffee.jpg" class="d-block w-100" alt="OptiOneCoffee"></img>
                            </div>
                            <div class="carousel-item">
                                <img src="/Images/OneOptiGlutaCapsule.jpg" class="d-block w-100" alt="OptiOneGlutaCapsule"></img>
                            </div>
                            <div class="carousel-item">
                                <img src="/Images/OneOptiLinimentOil.jpg" class="d-block w-100" alt="OptiOneLinimentOil"></img>
                            </div>
                            <div class="carousel-item">
                                <img src="/Images/OneOptiMiracleOil.jpg" class="d-block w-100" alt="OptiOneMiracleOil"></img>
                            </div>
                            <div class="carousel-item">
                                <img src="/Images/OneOptiPapayaSoap.jpg" class="d-block w-100" alt="OptiOnePapayaSoap"></img>
                            </div>
                            <div class="carousel-item">
                                <img src="/Images/OneOptiStemCellSoap.jpg" class="d-block w-100" alt="OptiOneCoffee"></img>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default OptiProductsCarousel
