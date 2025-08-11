import React from 'react';
import "./header.scss"

import { IoLocationOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { LuMousePointerClick } from "react-icons/lu";

import { AiOutlineShopping } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoIosPaper } from "react-icons/io";
import { MdBusinessCenter } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";


const Header = () => {
    return (

        <div className="header">

            <div className="header-container">

                <div className="logo-container">
                    <img className='logo-image' src="/images/logo.jpg" alt="Logo" />
                    <p>Buy. Inspect. Deal</p>
                </div>

                <div className="location-input-container">
                    <div className='location-icon'>
                        <img src="/images/location_on (1).png" alt="" />
                    </div>
                    <input
                        type="text"
                        placeholder="Taj Garden Retreat, Bengaluru"
                        className="location-input"
                    />
                </div>

                <div className='sell-buttons'>
                    <div className="sell-btn">
                        <img src="/images/Icon (1).png" alt="" />
                        Sell
                    </div>

                    <div className="sell-btn">
                        <img src="/images/arrow-click.png" alt="" />
                        One Click sell
                    </div>
                </div>

                <div className='menu-links'>

                    <a href="" className='menu-link'>
                        <img src="/images/cart.png" alt="" className='menu-icon' />
                        <p>Your Items</p>
                    </a>

                    <a href="" className='menu-link'>
                        <img src="/images/icon (3).png" alt="" className='menu-icon' />
                        <p>Favourites</p>
                    </a>

                    <a href="" className='menu-link'>
                        <img src="/images/Icon.png" alt="" className='menu-icon' />

                        <p>Chat</p>
                    </a>

                    <a href="" className='menu-link'>
                        <img src="/images/image 75 (2).png" alt="" className='menu-icon' />
                        <p>Blogs</p>
                    </a>

                    <a href="" className='menu-link'>
                        <img src="/images/promotion_1589131 1 (1).png" alt="" className='menu-icon' />
                        <p>Career</p>
                    </a>

                </div>

                <div className='notification-profile'>
                    <div>
                        <img src="/images/icon (4).png" alt="" className='notification-icon' />
                    </div>

                    <div className='profile-container'>
                        <img src="/images/profile-icon.png" alt="" />
                    </div>
                </div>

            </div>

        </div>

    );
}

export default Header;
