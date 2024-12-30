import React from "react";
import { CiHeart, CiUser } from "react-icons/ci";
import { SlRefresh } from "react-icons/sl";
import { TiShoppingCart } from "react-icons/ti";

const Navbar: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="flex-col mx-auto  flex items-center justify-between">
        {/* Top Bar */}
        <div className="text-[17px]  px-5 py-3 hidden md:flex justify-between w-full border-gray-600 border-b-[0.1px]">
          <span className="hidden lg:flex">
            Free Shipping Over $100 & Free Returns
          </span>
          <div className="space-x-10">
            <span>Hotline: (888) 4344 6000 - (888) 1338 8193</span>
            <div className="inline-flex space-x-10">
              <select
                className="bg-gray-900 text-white border-none outline-none cursor-pointer"
                aria-label="Select country"
              >
                <option value="usd">United States (USD $)</option>
                <option value="eur">Europe (EUR €)</option>
              </select>
              <select
                className="bg-gray-900 text-white border-none outline-none cursor-pointer"
                aria-label="Select language"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex px-5 text-[17px]  py-6 items-center justify-between w-full  md:mt-0">
          <div className="flex items-center">
            <img
              src="https://demo-digitic2.myshopify.com/cdn/shop/files/header-logo.png?v=1721466080&width=206"
              className="h-10"
            />
          </div>
          <div className="relative flex-grow mr-10 ml-36 hidden lg:flex">
            <input
              type="text"
              placeholder="Search"
              className=" w-full px-10 py-3 rounded-xl text-gray-900"
            />
          </div>
          <div className="flex gap-16 items-center">
            <div className="flex flex-row gap-2 items-center">
              <SlRefresh className="text-4xl font-extralight" />
              <button className="hover:text-yellow-500 text-start">
                Compare <br /> Products
              </button>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <CiHeart className="text-5xl font-extralight" />
              <button className="hover:text-yellow-500 text-start">
                Favourite <br />
                Wishlist
              </button>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <CiUser className="text-4xl font-extralight" />

              <button className="hover:text-yellow-500 text-start">
                Log In
                <br /> My Account
              </button>
            </div>
            <div className="relative">
              <span className="absolute -top-3 -right-2 bg-yellow-500 text-black text-xs rounded-full px-2">
                0
              </span>
              <button className="hover:text-yellow-500 flex flex-row gap-1 text-xl "><TiShoppingCart className="text-4xl text-[#febd69] font-extralight" /> $0.00</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
