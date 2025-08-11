import React from 'react';
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
        <div className="h-20 p-19 px-15 flex gap-8 items-center justify-between">

            <div className=" h-23 flex items-center justify-center">
                <img src="/images/logo.png" alt="Logo" />
            </div>

            <div className="border-2 border-solid border-gray-500 h-10 min-w-[300px] px-2.5 rounded-xl flex gap-1.5 items-center ">
                <IoLocationOutline className="text-lg" />
                <input
                    type="text"
                    placeholder="Taj Garden Retreat, Bengaluru"
                    className="text-lg outline-none text-black w-full"
                />
            </div>

            <div className='flex gap-8'>
                <button className=" min-w-17 rounded-3xl p-1 bg-gradient-to-r from-blue-600 to-blue-950">
                    <div className='h-8 px-3 bg-white rounded-3xl flex items-center justify-center  gap-1.5'>
                        <FaPlus />
                        Sell
                    </div>
                </button>

                <button className=" min-w-17 rounded-3xl p-1 bg-gradient-to-r from-blue-600 to-blue-950">
                    <div className='h-8 px-3 bg-white rounded-3xl flex items-center justify-center  gap-1.5'>
                        <LuMousePointerClick />
                        One Click sell
                    </div>
                </button>
            </div>

            <div className=' min-w-100 flex justify-between'>

                <a href=""
                    className='flex flex-col items-center gap-0.5 '
                >

                    <AiOutlineShopping className='text-2xl text-gray-600' />
                    <p className='text-[10px] text-gray-500'>Your Items</p>
                </a>

                <a href=""
                    className='flex flex-col items-center gap-0.5 '
                >

                    <CiHeart className='text-2xl text-gray-600' />
                    <p className='text-xs text-gray-500'>Favourites</p>
                </a>

                <a href=""
                    className='flex flex-col items-center gap-0.5 '
                >

                    <IoChatboxEllipsesOutline className='text-2xl text-gray-600' />
                    <p className='text-xs text-gray-500'>Chat</p>
                </a>

                <a href=""
                    className='flex flex-col items-center gap-0.5 '
                >

                    <IoIosPaper className='text-2xl text-gray-600' />
                    <p className='text-xs text-gray-500'>Blogs</p>
                </a>

                <a href=""
                    className='flex flex-col items-center gap-0.5 '
                >

                    <MdBusinessCenter className='text-2xl text-gray-600' />
                    <p className='text-xs text-gray-500'>Career</p>
                </a>

            </div>

            <div className='flex gap-5 items-center'>
                <div>
                    <FaRegBell className='text-3xl' />
                </div>

                <div className='border-gray-300 border-solid border-2  w-12 h-12  flex justify-center items-center rounded-full overflow-hidden cursor-pointer'>
                    <img src="/images/profile-icon.jpg" alt="" />
                </div>
            </div>



        </div>

    );
}

export default Header;
