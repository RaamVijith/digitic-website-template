import React, { useState } from "react";
import { FaHeart, FaEye, FaSyncAlt, FaLock } from "react-icons/fa";

// Define a type for Product
interface Product {
  id: number;
  brand: string;
  name: string;
  price: string;
  rating: number;
  image: string;
  hoverImage: string;
}

const SpecialProduct: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products: Product[] = [
    {
      id: 1,
      brand: "Momax",
      name: "Vybrix Magnetic Power Bank Wireless Charging",
      price: "$32.00",
      rating: 0,
      image:
        "https://demo-digitic2.myshopify.com/cdn/shop/files/22_02.jpg?v=1721459717&width=533",
      hoverImage:
        "https://demo-digitic2.myshopify.com/cdn/shop/files/11_02.jpg?v=1721459614&width=533",
    },
    {
      id: 2,
      brand: "Samsung",
      name: "Samsung R6 Wireless 360° Multiroom Speaker",
      price: "$43.00",
      rating: 3,
      image:
        "https://demo-digitic2.myshopify.com/cdn/shop/files/06_02.jpg?v=1721459568&width=533",
      hoverImage:
        "https://demo-digitic2.myshopify.com/cdn/shop/files/12_02.jpg?v=1721459626&width=533",
    },
    {
      id: 3,
      brand: "Mcdodo",
      name: "Phonokart USB Type C OTG Pendrive Cable",
      price: "$14.00",
      rating: 0,
      image:
        "https://demo-digitic2.myshopify.com/cdn/shop/files/05_02.jpg?v=1721459560&width=533",
      hoverImage:
        "https://demo-digitic2.myshopify.com/cdn/shop/files/16_02.jpg?v=1721459665&width=533",
    },
    {
      id: 4,
      brand: "HP",
      name: "Microwave 9 Cap DualSense Wireless",
      price: "$32.00",
      rating: 1,
      image:
        "https://demo-digitic2.myshopify.com/cdn/shop/files/16_02.jpg?v=1721459665&width=533",
      hoverImage:
        "https://demo-digitic2.myshopify.com/cdn/shop/files/20_02.jpg?v=1721459700&width=533",
    },
    {
      id: 5,
      brand: "Logi",
      name: "Logitech M350 WHITE Optical Wireless Mouse",
      price: "$20.00",
      rating: 2,
      image:
        "https://demo-digitic2.myshopify.com/cdn/shop/files/17_02.jpg?v=1721459675&width=533",
      hoverImage:
        "https://demo-digitic2.myshopify.com/cdn/shop/files/09_02.jpg?v=1721459594&width=533",
    },
    {
      id: 6,
      brand: "Boss",
      name: "J.P.Gold Wireless Stereo Earphones Headphone",
      price: "$24.00",
      rating: 1,
      image:
        "https://demo-digitic2.myshopify.com/cdn/shop/files/09_02.jpg?v=1721459594&width=533",
      hoverImage:
        "https://demo-digitic2.myshopify.com/cdn/shop/files/17_02.jpg?v=1721459675&width=533",
    },
  ];

  const itemsPerPage = 3; // Number of items visible at once

  const handleNext = () => {
    if (currentIndex < products.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className=" py-10 mx-5 ">
      <h2 className="text-4xl text-gray-800 font-bold px-2 mb-6">
        Special Products
      </h2>
      <div className="relative">
        {/* Slider Container */}
        <div className="overflow-hidden">
          <div
            className="flex gap-2 transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              width: `${(products.length / itemsPerPage) * 100}%`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md flex flex-row mx-2 relative group hover:shadow-lg transition-shadow duration-300"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Image */}
                <div className="relative ">
                  <img
                    src={
                      hoveredProduct === product.id
                        ? product.hoverImage
                        : product.image
                    }
                    alt={product.name}
                    className="w-full h-[300px] object-contain"
                  />
                  {/* Hover Options */}
                  {hoveredProduct === product.id && (
                    <div className="absolute top-4 right-4 flex flex-col gap-2 transform translate-x-0 opacity-100 transition-all duration-300">
                      <button className="p-2 rounded-full hover:bg-gray-200">
                        <FaHeart />
                      </button>
                      <button className="p-2 rounded-full hover:bg-gray-200">
                        <FaEye />
                      </button>
                      <button className="p-2  rounded-full hover:bg-gray-200">
                        <FaSyncAlt />
                      </button>
                      <button className="p-2 rounded-full hover:bg-gray-200">
                        <FaLock />
                      </button>
                    </div>
                  )}
                </div>
                {/* Product Details */}
                <div className="p-7 text-left">
                  <h3 className="text-base font-light text-[#bf4800]">
                    {product.brand}
                  </h3>
                  <p className="text-gray-800 pt-2 text-xl font-semibold ">
                    {product.name}
                  </p>
                  {/* Rating */}
                  <div className="flex justify-start items-center my-2">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`w-6 h-6 ${
                          i < product.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="text-xs text-gray-500 ml-2">(0)</span>
                  </div>
                  <p className="text-xl text-gray-900">{product.price}</p>
                  <div className="flex flex-row gap-3 items-center">
                  <p className="text-xl text-gray-900 mt-2">389 Days</p>

                    <p className="text-white bg-red-600 rounded-full text-xl px-1">07</p>
                    <p className="text-white bg-red-600 rounded-full text-xl px-1">07</p>

                    <p className="text-white bg-red-600 rounded-full text-xl px-1">07</p>

                  </div>


                  <p className="py-2 sm:py-2 mt-4 sm:mt-5 px-6 sm:px-10 text-white bg-[#1d2939] hover:bg-[#febd69] text-base sm:text-xl rounded-full w-fit">
                    Choose Options
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Slider Arrows */}
        <div className="absolute top-0 right-0 flex gap-2 p-5">
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-200 rounded-sm hover:bg-gray-300 disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-gray-200 rounded-sm hover:bg-gray-300 disabled:opacity-50"
            disabled={currentIndex >= products.length - itemsPerPage}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
