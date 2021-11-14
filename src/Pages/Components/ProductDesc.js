import React from 'react'

function ProductDesc() {
    return (
        <div id="product-desc">
            <section  className="container p-5">
                <div id="desc-image" className="py-1">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/Images/productDesc.jpg" style={{ height: '100%', width: '70%' }}></img>
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="d-flex flex-column">
                                <h2 className="text-primary fw-bold">ONE OPTI</h2>
                                <p>One Opti makes all-natural food and dietary supplement that empowers individuals to
                                    live life to the fullest. This includes herbal drinks, essential oils, and beauty products.
                                    All these products were diligently researched and developed by Optimum Organics, a company
                                    with a vision of providing world class and high quality health and wellness products all over the world.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="desc-video" className="py-1">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="d-flex flex-column">
                                <h2 className="text-primary fw-bold">A powerful herbal drink that can help reduce risks of many diseases.</h2>
                                <p>Herbs have played a major part in medicine for thousands of years. Herbs are widely used today in teas,
                                    vitamins and natural supplements. While the benefits of herbal medicine are vast, it is important to
                                    understand the basis of herbal medicine.One organic product that is gaining popularity in the country
                                    now is called One Opti Juice because of thousands of testimonies from those who have experienced
                                    life-changing effects on numerous kinds of diseases.This video presents the 15 powerful nature wonders
                                    that One Opti Juice is consist of and what they can do to our health.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <iframe width="100%" height="100%"
                                src="https://www.youtube.com/embed/XQVNmgdYRUQ?autoplay=1&controls=1&loop=0&mute=1&rel=0&start=0">
                            </iframe>
                        </div>
                    </div>
                </div>  

            </section>

            <div id="desc-videoOnly" className="container p-5">
                <div className="row" style={{height : "600px"}}>
                    <div className="col-md-6 d-flex align-items-center my-1">
                        <iframe width="100%" height="100%"
                            src="https://www.youtube.com/embed/6rqf8-iEyAM?autoplay=1&controls=1&loop=0&mute=1&rel=0&start=0">
                        </iframe>
                    </div>
                    <div className="col-md-6 d-flex align-items-center my-1">
                        <iframe width="100%" height="100%"
                            src="https://www.youtube.com/embed/2SBkNwgUytU?autoplay=1&controls=1&loop=0&mute=1&rel=0&start=0">
                        </iframe>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDesc
