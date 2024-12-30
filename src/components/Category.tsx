const Category = () => {
  return (
    <div>
      <div className="py-10 ">
        <div className="grid p-[4vh] grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6  mx-10 bg-white rounded-xl shadow-lg  hover:shadow-xl transition-shadow duration-300">
          {[
            {
              title: "Laptops",
              image:
                "https://demo-digitic2.myshopify.com/cdn/shop/collections/cat-02.jpg?v=1721460413", // Replace with the actual image URL
              linkText: "View All",
            },
            {
              title: "Speakers",
              image:
                "https://demo-digitic2.myshopify.com/cdn/shop/collections/cat-09.jpg?v=1721460363", // Replace with the actual image URL
              linkText: "View All",
            },
            {
              title: "Television",
              image:
                "https://demo-digitic2.myshopify.com/cdn/shop/collections/cat-04.jpg?v=1721460436", // Replace with the actual image URL
              linkText: "View All",
            },
            {
              title: "Mini Cameras",
              image:
                "https://demo-digitic2.myshopify.com/cdn/shop/collections/cat-03.jpg?v=1721460111", // Replace with the actual image URL
              linkText: "View All",
            },
            {
              title: "Gaming",
              image:
                "https://demo-digitic2.myshopify.com/cdn/shop/files/16.jpg?v=1721459665&width=1000", // Replace with the actual image URL
              linkText: "View All",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-row gap-10 items-center ">
              <div className="flex flex-col ">
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <a
                  href="#"
                  className="text-gray-600 font-medium text-base hover:underline"
                >
                  {item.linkText}
                </a>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="w-auto h-36 object-contain mb-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
