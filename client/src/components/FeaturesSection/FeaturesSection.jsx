import React from 'react';
import "./featuresSection.scss"

const FeaturesSection = () => {
    return (
        <div className='features-section'>

            <p>Sell and buy every thing with BID.AI</p>

            <div className="highlights">
                <div className="feature">
                    <img src="./images/people.svg" alt="" />
                    <p>More then 13+ Categories are in Bid.ai</p>
                </div>

                <div className="feature">
                    <img src="./images/arrow.svg" alt="" />
                    <p>More then 13+ Categories are in Bid.ai</p>
                </div>

                <div className="feature">
                    <img src="./images/shapes.svg" alt="" />
                    <p>More then 13+ Categories are in Bid.ai</p>
                </div>

            </div>
        </div>
    );
}

export default FeaturesSection;
