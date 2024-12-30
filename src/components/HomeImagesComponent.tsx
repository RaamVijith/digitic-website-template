import React from "react";

interface Product {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  highlight?: string;
}

const products: Product[] = [
  {
    title: "iPad S13+ Pro.",
    description: "From $999.00 or $41.62/mo. for 24 mo. Footnote*",
    price: "$999.00",
    imageUrl: "/home-slider-01_004.webp", // Replace with the large image path
    highlight: "SUPERCHARGED FOR PROS.",
  },
  {
    title: "Laptops Max",
    description: "From $1699.00 or $64.62/mo.",
    price: "$1699.00",
    imageUrl: "https://demo-digitic2.myshopify.com/cdn/shop/files/top-banner-01.jpg?v=1721645249", // Replace with the correct image path
    highlight: "BEST SALE",
  },
  {
    title: "Buy iPad Air",
    description: "From $599 or $49.91/mo. for 12 mo.*",
    price: "$599.00",
    imageUrl: "https://demo-digitic2.myshopify.com/cdn/shop/files/top-banner-03.jpg?v=1721645249",
    highlight: "NEW ARRIVAL",
  },
  {
    title: "Smartwatch 7",
    description: "Shop the latest band styles and colors.",
    price: "",
    imageUrl: "https://demo-digitic2.myshopify.com/cdn/shop/files/top-banner-02.jpg?v=1721645249",
    highlight: "15% OFF",
  },
  {
    title: "AirPods Max",
    description: "High-fidelity playback & ultra-low distortion",
    price: "",
    imageUrl: "https://demo-digitic2.myshopify.com/cdn/shop/files/top-banner-04.jpg?v=1721645249",
    highlight: "FREE ENGRAVING",
  },
];

const HomeImagesComponent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-5 py-[8vh] bg-white">
    {/* Large Image on the Left */}
    <div className="relative group overflow-hidden rounded-lg shadow-md bg-white lg:row-span-2">
      <img
        src={products[0].imageUrl}
        alt={products[0].title}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-start justify-start p-[10%]">
        <div className="text-left gap-8 flex flex-col">
          <p className="text-lg sm:text-xl uppercase text-[#bf4800]">
            {products[0].highlight}
          </p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1c1b1b] font-bold">
            {products[0].title}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-[#1c1b1b] max-w-[80%] md:max-w-[60%]">
            {products[0].description}
          </p>
          <p className="py-2 sm:py-3 mt-4 sm:mt-5 px-6 sm:px-10 text-white bg-[#1c1b1b] text-base sm:text-xl rounded-full w-fit">
            BUY NOW
          </p>
        </div>
      </div>
    </div>
  
    {/* Grid of Four Images on the Right */}
    <div className="grid grid-cols-2 gap-4 h-full pt-2">
      {products.slice(1).map((product, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-lg shadow-md bg-white"
        >
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-start justify-start p-[10%]">
            <div className="text-left gap-4 flex flex-col">
              <p className="text-sm sm:text-base md:text-lg uppercase text-[#bf4800]">
                {product.highlight}
              </p>
              <h3 className="text-lg sm:text-xl md:text-2xl text-[#1c1b1b] font-bold">
                {product.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#1c1b1b] max-w-[80%] md:max-w-[60%]">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default HomeImagesComponent;
