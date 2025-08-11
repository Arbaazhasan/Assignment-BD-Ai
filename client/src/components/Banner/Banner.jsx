import './banner.scss'
import { IoMdSearch } from "react-icons/io";
import { IoMdMic } from "react-icons/io";
import { FiCamera } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
import { IoIosClose } from "react-icons/io";

const Banner = () => {
    return (
        <div className='Banner'>

            <div className='banner-bg-image'>
                <img src="/images/Group 1000005763.png" alt="" />
            </div>

            <div className="banner-details">
                <p>The Smartest Way to Sell Anything, Instantly.</p>

                <div className="banner-input-container">

                    <div>
                        <img className='banner-input-icons' src="/images/ic_sharp-search.svg" alt="" />
                        <input type='text' placeholder="Search for products and Categories" />
                    </div>

                    <div className="input-icons">
                        <img className='banner-input-icons' src="/images/material-symbols_mic-rounded.svg" alt="" />
                        <img className='banner-input-icons' src="/images/Vector.svg" alt="" />
                        <img className='banner-input-icons' src="/images/Vector (1).svg" alt="" />
                    </div>
                </div>


                <div className="banner-recent-container">
                    <p>Recent Searches</p>


                    <div className="recent-search-words">

                        <div className="search-word">
                            <p>i phone</p>
                            <img src="/images/Icon (2).png" alt="" />
                        </div>

                        <div className="search-word">
                            <p>i phone</p>
                            <img src="/images/Icon (2).png" alt="" />
                        </div>

                        <div className="search-word">
                            <p>i phone</p>
                            <img src="/images/Icon (2).png" alt="" />
                        </div>

                        <div className="search-word">
                            <p>i phone</p>
                            <img src="/images/Icon (2).png" alt="" />
                        </div>

                        <div className="search-word">
                            <p>i phone</p>
                            <img src="/images/Icon (2).png" alt="" />
                        </div>

                    </div>


                </div>

            </div>

        </div>
    );
}

export default Banner;