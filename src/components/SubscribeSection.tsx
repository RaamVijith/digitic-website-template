import React from "react";

const SubscribeSection: React.FC = () => {
  return (
    <div className="bg-[#232f3e] gap-20 text-white py-[4vw] px-4 flex flex-col md:flex-row items-center justify-center border-b-[1px] border-b-gray-600">
      <div className="flex items-center mb-4 md:mb-0 md:mr-4">
        <img src="https://demo-digitic2.myshopify.com/cdn/shop/files/send_244x244@2x.png?v=1721477596" className="h-10"/>
        <span className="text-3xl font-semibold whitespace-nowrap pl-5">Sign Up For Our Discounts</span>
      </div>
      <form
        className="flex w-full max-w-4xl relative"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Enter Address"
          className="flex-1 px-4 py-4 pr-32 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 m-1 bg-[#232f3e] hover:bg-blue-900 text-white px-6 py-3 rounded-r-md"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeSection;
