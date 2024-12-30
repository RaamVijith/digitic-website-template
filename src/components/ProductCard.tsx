import React from "react";

const ProductCard: React.FC = () => {
  const products = [
    {
      title: "Smart Watch Series 7",
      description: "From $399 or $16.62/mo. for 24 mo.*",
      image:
        "https://demo-digitic2.myshopify.com/cdn/shop/files/cms-banner-01.jpg?v=1721632338", // Replace with your image URL
    },
    {
      title: "600 nits of brightness.",
      description: "27-inch 5K Retina display",
      image:
        "https://demo-digitic2.myshopify.com/cdn/shop/files/cms-banner-02.jpg?v=1721632338", // Replace with your image URL
    },
    {
      title: "Smartphone 13 Pro.",
      description: "Now in Green. From $999.00 or $41.62/mo. for 24 mo.",
      image:
        "https://demo-digitic2.myshopify.com/cdn/shop/files/cms-banner-03.jpg?v=1721632338", // Replace with your image URL
    },
    {
      title: "Room-filling sound.",
      description: "From $699 or $116.58/mo. for 12 mo.*",
      image:
        "https://demo-digitic2.myshopify.com/cdn/shop/files/cms-banner-04.jpg?v=1721632338", // Replace with your image URL
    },
  ];

  return (
    <div className="w-full overflow-x-auto scrollbar-hide px-5 py-[4vw]">
      <div className="flex flex-row space-x-4 md:grid md:grid-cols-4 md:gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="min-w-[250px] md:min-w-0 md:w-full h-[400px] lg:h-[550px] p-4 rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300 bg-cover bg-center"
            style={{ backgroundImage: `url(${product.image})` }}
          >
            <div className=" p-4 rounded-lg  h-full flex flex-col justify-start pt-16 gap-3">
              <p className="text-xl text-gray-500">SMART PHONE</p>
              <h3 className="text-3xl font-bold text-gray-700">
                {product.title}
              </h3>
              <p className="text-xl text-gray-500">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
