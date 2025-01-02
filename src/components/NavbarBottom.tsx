import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { FaEye, FaHeart, FaLock, FaSyncAlt } from "react-icons/fa";

interface Product {
  id: number;
  brand: string;
  name: string;
  price: string;
  rating: number;
  image: string;
  hoverImage: string;
}

interface MenuItem {
  title: string;
  isHeader?: boolean;
  hasSubmenu?: boolean;
  items?: { label: string }[];
}

const menuItems: MenuItem[] = [
  {
    title: "Our Store",
    isHeader: true,
  },
  {
    title: "Appliances",
    hasSubmenu: true,
  },
  {
    title: "Watches",
    hasSubmenu: true,
  },
  {
    title: "Ear Buds",
  },
  {
    title: "Headphones",
  },
  {
    title: "Laptops",
    hasSubmenu: true,
  },
  {
    title: "Tablets",
  },
  {
    title: "Smart Phones",
  },
  {
    title: "Television",
    hasSubmenu: true,
  },
  {
    title: "Chargers",
  },
  {
    title: "Mini Cameras",
  },
];

const NavigationMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (category: string) => {
    setActiveDropdown(category);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

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
        "https://demo-digitic2.myshopify.com/cdn/shop/files/12_02.jpg?v=1721459626&width=533",
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
        "https://demo-digitic2.myshopify.com/cdn/shop/files/11_02.jpg?v=1721459614&width=533",
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
        "https://demo-digitic2.myshopify.com/cdn/shop/files/20_02.jpg?v=1721459700&width=533",
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
    <nav className="bg-gray-800 w-[100vw] text-white relative hidden lg:flex">
      <div className="mx-auto w-full px-4">
        <div className="flex items-center justify-start h-16">
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-start w-full justify-start space-x-4 text-lg">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("SHOP")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="px-3 py-2 flex items-center justify-between w-[18vw] space-x-1 hover:text-gray-300">
                <div className="flex flex-row gap-5 items-center">
                  <PiDotsSixVerticalBold size={22} />
                  <span>SHOP CATEGORIES</span>
                </div>

                <ChevronDown size={16} />
              </button>

              {activeDropdown === "SHOP" && (
                <div className="absolute left-0 mt-4 transform -translate-x-4 z-10">
                  <div className="bg-white shadow-lg w-80">
                    <div className="py-2">
                      {menuItems.map((item, index) => (
                        <div
                          key={index}
                          className="border-b border-gray-100 last:border-b-0"
                        >
                          {item.isHeader ? (
                            <div className="px-6 py-3 text-lg text-gray-900">
                              {item.title}
                            </div>
                          ) : (
                            <div className="px-6 py-2.5 flex items-center justify-between hover:bg-gray-50">
                              <a
                                href="#"
                                className="text-gray-700 hover:text-gray-900"
                              >
                                {item.title}
                              </a>
                              {item.hasSubmenu && (
                                <span className="text-gray-400">+</span>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#"
              className="px-3 py-2 flex items-center hover:text-gray-300"
            >
              HOME
            </a>
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("STORE")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="px-3 py-2 flex items-center hover:text-gray-300"
              >
                OUR STORE <ChevronDown size={16} className="ml-1" />
              </a>
              {activeDropdown === "STORE" && (
                <div className="absolute -left-[30vw] z-10 border-t-2 w-[110vw] px-[10vw] py-[3vw] bg-white shadow-xl grid grid-cols-4 gap-6 animate-fade-slide">
                  {/* Categories Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Appliances
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Scan Printers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Mini Cameras
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Chargers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Tablets
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Wireless Mouse
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Phones
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Apple Phones
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Ear Buds
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Android Phones
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Smart Phones
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Wired Earbuds
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Promotional Cards */}
                  <div className="col-span-2 flex flex-row gap-10 space-y-4">
                    {/* First Offer Card */}
                    <div className="bg-gray-100 rounded-lg p-4 flex items-center">
                        <img
                          src="https://demo-digitic2.myshopify.com/cdn/shop/files/shop-banner-01.jpg?v=1721619578"
                          alt="Offer Image 1"
                          className=" object-contain"
                        />
                     
                    </div>

                    {/* Second Offer Card */}
                    <div className="bg-gray-100 rounded-lg p-4 flex items-center">
                        <img
                          src="https://demo-digitic2.myshopify.com/cdn/shop/files/shop-banner-02.jpg?v=1721619578"
                          alt="Offer Image 2"
                          className="object-contain"
                        />
                   
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("SPECIAL")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="px-3 py-2 flex items-center hover:text-gray-300"
              >
                SPECIAL
                <span className="ml-1 text-xs bg-emerald-500 px-1.5 py-0.5 rounded">
                  SALE
                </span>{" "}
                <ChevronDown size={16} className="ml-1" />
              </a>

              {activeDropdown === "SPECIAL" && (
                <div className="absolute -left-[40vw] z-10 border-t-2 w-[110vw] px-[10vw] py-[3vw] bg-white shadow-xl animate-fade-slide">
                  <div className="  ">
                    <div className="relative">
                      {/* Slider Container */}
                      <div className="">
                        <div
                          className="flex gap-2 transition-transform duration-300"
                          style={{
                            transform: `translateX(-${
                              currentIndex * (100 / itemsPerPage)
                            }%)`,
                            width: `${(products.length / itemsPerPage) * 100}%`,
                          }}
                        >
                          {products.map((product) => (
                            <div
                              key={product.id}
                              className="bg-white w-72 rounded-lg shadow-md flex-shrink-0 mx-2 relative group hover:shadow-lg transition-shadow duration-300"
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
                                  <span className="text-xs text-gray-500 ml-2">
                                    (0)
                                  </span>
                                </div>
                                <p className="text-xl text-gray-900">
                                  {product.price}
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
                          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50"
                          disabled={currentIndex === 0}
                        >
                          &lt;
                        </button>
                        <button
                          onClick={handleNext}
                          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50"
                          disabled={
                            currentIndex >= products.length - itemsPerPage
                          }
                        >
                          &gt;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("CATEGORIES")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="px-3 py-2 flex items-center hover:text-gray-300"
              >
                CATEGORIES{" "}
                <span className="ml-1 text-xs bg-red-500 px-1.5 py-0.5 rounded">
                  HOT
                </span>
                <ChevronDown size={16} className="ml-1" />
              </a>
              {activeDropdown === "CATEGORIES" && (
                <div className="absolute -left-[50vw] z-10 border-t-2 w-[110vw] px-[10vw] py-[3vw] bg-white shadow-xl flex flex-row justify-between gap-10 animate-fade-slide">
                  {/* Watches Section */}
                  <div className="space-y-4 flex flex-1 flex-col w-[20vw]">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Watches
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Smart Watches
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Rolex Watches
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Omega Watches
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Cartier Watches
                        </a>
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 mt-8">
                      Television
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Panasonic TV
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Samsung TV
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Sony TV
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Hisense TV
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Speakers & Electronics Section */}
                  <div className="space-y-4 flex flex-1 flex-col w-[20vw]">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Speakers
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Yamaha Speakers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Sonos Speakers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          RCF Speakers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Party Speakers
                        </a>
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 mt-8">
                      Electronics
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Appliances
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Watches
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Laptops
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Laptops & Gaming Section */}
                  <div className="space-y-4 flex flex-1 flex-col w-[20vw]">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Laptops
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Apple Laptops
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Dell Laptops
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          HP Laptops
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Lenovo Laptops
                        </a>
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 mt-8">
                      Gaming
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Headphones
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Gaming Boards
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Gaming Mice
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Video Games
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Featured Products Section */}
                  <div className="col-span-1  w-[50vw] grid grid-cols-2 space-y-4 gap-4">
                    <div className="bg-gray-100 rounded-lg p-4">
                      <img
                        src="/api/placeholder/80/80"
                        alt="Vybrix Power Bank"
                        className="w-20 h-20 object-contain mb-4"
                      />
                      <h4 className="font-semibold text-gray-900">
                        Vybrix Magnetic Power Bank Wireless Charging
                      </h4>
                      <p className="text-lg font-bold text-gray-900 mt-2">
                        $32.00
                      </p>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-4">
                      <img
                        src="/api/placeholder/80/80"
                        alt="LG Refrigerator"
                        className="w-20 h-20 object-contain mb-4"
                      />
                      <h4 className="font-semibold text-gray-900">
                        LG 674 litres Side by Side Refrigerator
                      </h4>
                      <div className="flex items-center mt-2">
                        <p className="text-lg font-bold text-gray-900">
                          $60.00
                        </p>
                        <p className="text-sm text-gray-500 line-through ml-2">
                          $68.00
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <img
                        src="/api/placeholder/80/80"
                        alt="Vybrix Power Bank"
                        className="w-20 h-20 object-contain mb-4"
                      />
                      <h4 className="font-semibold text-gray-900">
                        Vybrix Magnetic Power Bank Wireless Charging
                      </h4>
                      <p className="text-lg font-bold text-gray-900 mt-2">
                        $32.00
                      </p>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-4">
                      <img
                        src="/api/placeholder/80/80"
                        alt="LG Refrigerator"
                        className="w-20 h-20 object-contain mb-4"
                      />
                      <h4 className="font-semibold text-gray-900">
                        LG 674 litres Side by Side Refrigerator
                      </h4>
                      <div className="flex items-center mt-2">
                        <p className="text-lg font-bold text-gray-900">
                          $60.00
                        </p>
                        <p className="text-sm text-gray-500 line-through ml-2">
                          $68.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("TOP")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="px-3 py-2 flex items-center hover:text-gray-300"
              >
                TOP DEALS <ChevronDown size={16} className="ml-1" />
              </a>
              {activeDropdown === "TOP" && (
                <div className="absolute left-0 z-10 border-t-2 w-[10vw] p-[1vw] mt-2 rounded-sm bg-white shadow-xl flex animate-fade-slide">
                  <div>
                    <ul className="space-y-3 text-gray-800 text-lg">
                      <li>About</li>
                      <li>Services</li>
                      <li>Team</li>
                      <li>Contact</li>
                      <li>Compare</li>
                      <li>Services</li>
                      <li>Team</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <a
              href="#"
              className="px-3 py-2 flex items-center hover:text-gray-300"
            >
              ELEMENTS <ChevronDown size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
