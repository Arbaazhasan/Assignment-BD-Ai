import ProductListing from "../../components/ProductListing/ProductListing";
import "./productView.scss"


const ProductView = () => {
    return (
        <div className='product-view-page'>
            <div className='product-view-container'>
                <div className="product-images">

                    <div className="product-view">
                        <div className="product-image">
                            <img src="/images/bmw-xm-50e.png" alt="" />
                        </div>

                        <div className="product-view-crousel-controller">

                            <div className="product-controller">

                                <div>
                                    <img src="/images/icon (5).png" alt="" />
                                </div>

                                <div>
                                    <img src="/images/Icon (6).png" alt="" />
                                </div>

                            </div>

                            <div className="product-controller">

                                <div>
                                    <img src="/images/Vector (5).png" alt="" />
                                </div>

                                <div>
                                    <img src="/images/Vector (4).png" alt="" />
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="product-image-array">

                        <div className="product-images">


                            <div>
                                <img src="/images/bmw-xm-50e.png" alt="" />
                            </div>


                            <div>
                                <img src="/images/bmw-xm-50e.png" alt="" />
                            </div>


                            <div>
                                <img src="/images/bmw-xm-50e.png" alt="" />
                            </div>


                            <div>
                                <img src="/images/bmw-xm-50e.png" alt="" />
                            </div>


                            <div>
                                <img src="/images/bmw-xm-50e.png" alt="" />
                            </div>


                            <div>
                                <img src="/images/bmw-xm-50e.png" alt="" />
                            </div>


                            <div>
                                <img src="/images/bmw-xm-50e.png" alt="" />
                            </div>


                            <div>
                                <img src="/images/bmw-xm-50e.png" alt="" />
                            </div>

                        </div>

                    </div>

                </div>


                <div className="product-details-container">

                    <div className="product-title-price">
                        <div className="product-details-left-side">
                            <p>Tata Motors Cars</p>
                            <span>$ 2,50,000</span>

                            <p>$ 2,50,000 <span>$ 2,80,000</span></p>

                            <div><img src="/images/Vector (6).png" alt="" /> July 12, 2024</div>
                        </div>

                        <div className="product-details-right-side">
                            <p><span>ECO:</span> 82/100</p>
                            <p><img src="/images/location_on (1).png" alt="" /> Bengaluru & Nearby Cities</p>
                        </div>
                    </div>

                    <div className="product-description-container">
                        <p>Product Description</p>
                        <p>Tata Motors presents a robust and stylish SUV engineered for power, performance, and comfort. Whether you're navigating city streets or exploring rugged terrains, this car ensures a smooth and safe driving experience. Equipped with modern safety features, spacious interiors, and advanced tech, it’s built for both daily commutes and long-distance travel.</p>
                    </div>

                    <div className="product-description-container">
                        <p>Key Features :</p>
                        <ul>
                            <li>Model: Tata SUV 2024 Edition</li>
                            <li>Model: Tata SUV 2024 Edition</li>
                            <li>Model: Tata SUV 2024 Edition</li>
                            <li>Model: Tata SUV 2024 Edition</li>
                            <li>Model: Tata SUV 2024 Edition</li>
                            <li>Model: Tata SUV 2024 Edition</li>

                        </ul>
                    </div>


                    <div className="seller-details-container">
                        <p>Product Seller</p>

                        <div className="seller-details">
                            <div className="seller-profile-icon">
                                <img src="/images/Ellipse 8.png" alt="" />
                            </div>

                            <div className="seller-name-and-rating">
                                <div className="seller-name">
                                    <p>Geolife Agritech India </p>
                                    <div>
                                        <img src="/images/check (1).png" alt="" />
                                    </div>
                                </div>

                                <div className="seller-rating">
                                    <div>
                                        <img src="/images/Vector (7).png" alt="" />

                                    </div>
                                    <p>4.8</p>
                                </div>
                            </div>

                            <div className="view-seller-btn">
                                <div><img src="/images/Vector (8).png" alt="" /></div>
                                <p>View Seller</p>
                            </div>

                        </div>
                    </div>



                </div>
            </div>


            <ProductListing />

        </div>
    );
}

export default ProductView;
