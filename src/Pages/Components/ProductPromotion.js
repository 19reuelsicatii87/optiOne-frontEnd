import React from 'react'

function ProductPromotion() {
    return (
        <section id="product-promotion" className="container p-5">
            <div className="row">
                <div className="col-md-5 d-flex align-items-center py-5">
                    <div className="d-flex flex-column">
                        <img src="/Images/productFeedback.png" style={{ height: '300px', width: '300px' }} alt="productFeedback"></img>
                        <h2 className="text-primary fw-bold">ONE OPTI PRODUCTS.</h2>
                        <p>Miracles of nature that you deserve!.</p>
                        <p>We put together licensed advancements, hand picked ingredients,
                            and a huge amount of research to make products that are intended to bring
                            genuine health into your life. We believe that well-being begins from the inside,
                            and each and every product is curated to assist you with being and feel your best.</p>
                        <p>Here at One Opti, we believe that having access to high-quality ingredients derived from pure
                            sources is a fundamental right, not a privilege. Discover the beauty of nature decoded by science.
                            Our innovative, affordable line of health and wellness products can enhance your well-being with
                            the best that nature has to offer.</p>

                        <a href="/learn-more">Learn More</a>
                    </div>
                </div>
                <div className="col-md-7 d-flex align-items-center">

                    <div className="d-flex flex-column">

                        <div id="promotion-card">
                            <div id="promotion-card-header" style={{ borderBottom: "5px solid #eb6666" }}>
                                <div className="d-flex flex-row">
                                    <i className="bi bi-people px-3"
                                        style={{
                                            fontSize: "50px",
                                            color: "#eb6666"
                                        }}></i>
                                    <h5 className="d-flex align-items-center px-3"
                                        style={{ color: "#eb6666" }}>LIVE A LIFE OF WELLNESS & SHARE IT</h5>
                                </div>
                            </div>
                            <div id="promotion-card-body">
                                <p className="text-start">We know that our mission and our wellness products require a conversation,
                                    and a community committed to creating a world where wellness really does mean more!
                                    We want you to take ownership of your wellness journey so that it doesn’t stop with you.
                                    We provide avenues for you to build a business around our products and our mission,
                                    so that true wellness can mean more in this modern world.</p>
                            </div>
                        </div>


                        <div id="promotion-card">
                            <div id="promotion-card-header" style={{ borderBottom: "5px solid #eb6666" }}>
                                <div className="d-flex flex-row">
                                    <i className="bi bi-hand-thumbs-up px-3"
                                        style={{
                                            fontSize: "50px",
                                            color: "#eb6666"
                                        }}></i>
                                    <h5 className="d-flex align-items-center px-3"
                                        style={{ color: "#eb6666" }}>PATENTED AND VALIDATED</h5>
                                </div>
                            </div>
                            <div id="promotion-card-body">
                                <p className="text-start">One Opti wellness products are powered by multiple patented and proprietary technologies.
                                    These breakthrough innovations have been thoroughly researched and validated, plus they have
                                    been featured at scientific conferences, congresses, third-party publications, etc..</p>
                            </div>
                        </div>


                        <div id="promotion-card">
                            <div id="promotion-card-header" style={{ borderBottom: "5px solid #eb6666" }}>
                                <div className="d-flex flex-row">
                                    <i className="bi bi-suit-heart px-3"
                                        style={{
                                            fontSize: "50px",
                                            color: "#eb6666"
                                        }}></i>
                                    <h5 className="d-flex align-items-center px-3"
                                        style={{ color: "#eb6666" }}>EMBRACED BY HEALTHCARE PRACTITIONERS</h5>
                                </div>
                            </div>
                            <div id="promotion-card-body">
                                <p className="text-start">One Opti wellness products/solutions have been embraced by Healthcare Practitioners
                                    from all areas of specialty/expertise. Not only has One Opti made a positive impact
                                    on each practitioners’ clients, it has also made a difference on the practitioners’
                                    own health, wellness, and life balance..</p>
                            </div>
                        </div>

                        <div id="promotion-card">
                            <div id="promotion-card-header" style={{ borderBottom: "5px solid #eb6666" }}>
                                <div className="d-flex flex-row">
                                    <i className="bi bi-emoji-heart-eyes px-3"
                                        style={{
                                            fontSize: "50px",
                                            color: "#eb6666"
                                        }}></i>
                                    <h5 className="d-flex align-items-center px-3"
                                        style={{ color: "#eb6666" }}>FAMOUS ONE OPTI SIGHTINGS</h5>
                                </div>
                            </div>
                            <div id="promotion-card-body">
                                <p className="text-start">Many award-winning actors, entertainers and professional athletes have fallen
                                    in love with One Opti wellness products. One Opti does not advertise or pay for
                                    endorsements, so next time you see One Opti products on the red carpet, a movie set,
                                    or the Olympics, you know it’s the real deal.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default ProductPromotion
