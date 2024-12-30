const Brands = () => {
  return (
    <div>
      <div className="py-10 mb-[5vw] ">
        <div className="grid py-[1vh] px-[3vh] grid-cols-4 sm:grid-cols-7 lg:grid-cols-7 gap-6  mx-10 bg-white rounded-xl shadow-lg  hover:shadow-xl transition-shadow duration-300">
          {[
            {
              title: "Laptops",
              image:
                "https://demo-digitic2.myshopify.com/cdn/shop/files/brand-01.png?v=1721637050", // Replace with the actual image URL
              linkText: "View All",
            },
            {
              title: "Speakers",
              image:
                "https://demo-digitic2.myshopify.com/cdn/shop/files/brand-03.png?v=1721637049", // Replace with the actual image URL
              linkText: "View All",
            },
            {
              title: "Television",
              image:
                "https://demo-digitic2.myshopify.com/cdn/shop/files/brand-02.png?v=1721637049", // Replace with the actual image URL
              linkText: "View All",
            },
            {
              title: "Mini Cameras",
              image:
                "https://demo-digitic2.myshopify.com/cdn/shop/files/brand-04.png?v=1721637049", // Replace with the actual image URL
              linkText: "View All",
            },
            {
              title: "Gaming",
              image:
                "https://demo-digitic2.myshopify.com/cdn/shop/files/brand-08.png?v=1721637049", // Replace with the actual image URL
              linkText: "View All",
            },
            {
              title: "Gaming",
              image:
                "https://demo-digitic2.myshopify.com/cdn/shop/files/brand-06.png?v=1721637049", // Replace with the actual image URL
              linkText: "View All",
            },
            {
              title: "Gaming",
              image:
                "https://demo-digitic2.myshopify.com/cdn/shop/files/brand-09.png?v=1721637049", // Replace with the actual image URL
              linkText: "View All",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-row  items-center ">
             
              <img
                src={item.image}
                alt={item.title}
                className="w-auto h-44 object-contain mb-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
