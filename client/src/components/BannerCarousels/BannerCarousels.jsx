import "./BannerCarousels.scss"

const BannerCarousels = () => {
    return (
        <div className="banner-carousel-container">


            {/* <div className="banner-carousel-details">
                <p>Turn Your Electronics into Earnings - Sell in Just One Click!</p>
            </div> */}


            <div className="banner-carousel-bg-img">
                <img src="/images/banner-crousel-bg.png" alt="" />
            </div>

            <div className="start-sell-btn">
                <button>Start Sell Now <img src="/images/Frame 1261154315.png" alt="" /></button>
            </div>


            <div className="banner-carousel-index">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="carousel-controller-controller">
                <div>
                    <img src="/images/Vector (1).png" alt="" />
                </div>
                <div>
                    <img src="/images/Vector (2).png" alt="" />
                </div>


            </div>

        </div>
    );
}

export default BannerCarousels;
