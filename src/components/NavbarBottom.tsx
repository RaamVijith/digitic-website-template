import  { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { PiDotsSixVerticalBold } from "react-icons/pi";

interface MenuItem {
  title: string;
  items?: {
    label: string;
    price?: number;
    rating?: number;
    image?: string;
  }[];
}

const menuData: MenuItem[] = [
  {
    title: "Watches",
    items: [
      { label: "Smart Watches" },
      { label: "Rolex Watches" },
      { label: "Omega Watches" },
      { label: "Cartier Watches" },
    ],
  },
  {
    title: "Speakers",
    items: [
      { label: "Yamaha Speakers" },
      { label: "Sonos Speakers" },
      { label: "RCF Speakers" },
      { label: "Party Speakers" },
    ],
  },
  {
    title: "Laptops",
    items: [
      { label: "Apple Laptops" },
      { label: "Dell Laptops" },
      { label: "HP Laptops" },
      { label: "Lenovo Laptops" },
    ],
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
                <div className="absolute left-0 w-screen transform -translate-x-4">
                  <div className="bg-white shadow-lg">
                    <div className="max-w-7xl mx-auto p-6">
                      <div className="grid grid-cols-4 gap-8">
                        {menuData.map((category) => (
                          <div key={category.title} className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {category.title}
                            </h3>
                            <ul className="space-y-2">
                              {category.items?.map((item) => (
                                <li key={item.label}>
                                  <a
                                    href="#"
                                    className="text-gray-600 hover:text-gray-900"
                                  >
                                    {item.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#"
              className="px-3 py-2 flex items-center hover:text-gray-300"
            >
              HOME <ChevronDown size={16} className="ml-1" />
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
                <div className="absolute left-0 w-screen transform -translate-x-24">
                  <div className="bg-white shadow-lg">
                    <div className="max-w-7xl mx-auto p-6">
                      <div className="grid grid-cols-4 gap-8">
                        {/* Add your store dropdown content here */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-900">
                            Store Options
                          </h3>
                          <ul className="space-y-2">
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-gray-900"
                              >
                                Find a Store
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-gray-900"
                              >
                                Today's Deals
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
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
                SPECIAL<span className="ml-1 text-xs bg-emerald-500 px-1.5 py-0.5 rounded">SALE</span> <ChevronDown size={16} className="ml-1" />
              </a>
              {activeDropdown === "SPECIAL" && (
                <div className="absolute left-0 w-screen transform -translate-x-40">
                  <div className="bg-white shadow-lg">
                    <div className="max-w-7xl mx-auto p-6">
                      <div className="grid grid-cols-4 gap-8">
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-900">
                            Special Offers
                          </h3>
                          <ul className="space-y-2">
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-gray-900"
                              >
                                Clearance
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-gray-900"
                              >
                                Deals of the Day
                              </a>
                            </li>
                          </ul>
                        </div>
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
                CATEGORIES <span className="ml-1 text-xs bg-red-500 px-1.5 py-0.5 rounded">HOT</span><ChevronDown size={16} className="ml-1" />
              </a>
            
            </div>

            <a
              href="#"
              className="px-3 py-2 flex items-center hover:text-gray-300"
            >
              TOP DEALS <ChevronDown size={16} className="ml-1" />
            </a>
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
