import "./planExpireyBanner.scss"

const PlanExpireyBanner = () => {
    return (
        <div className="plan-expirey-banner">
            <div className='plan-expirey-banner-container'>

                <div className="short-pitch">
                    <p>Your Plan is About to Expire</p>
                    <p>Renew now to keep listing and boosting your products without interruption.</p>
                    <button>Renew Plan <img src="/images/click-icon.png" alt="" /></button>
                </div>

                <div className="banner-bg-image">
                    <img src="/images/sand-watch.png" alt="" />
                </div>

            </div>

            <div className="bannerImage">
                <img src="/images/1 1.svg" alt="" />
            </div>
        </div>
    );
}

export default PlanExpireyBanner;
