
const Highlight = () => {
  return (
    <div>
      <div className="relative px-5 lg:px-16 py-14 w-full">
        {/* Feature Container */}
        <div className="flex flex-row justify-between gap-6 overflow-x-auto px-5 scrollbar-hide">
          {/* Feature Item */}
          {[
            {
              icon: "https://demo-digitic2.myshopify.com/cdn/shop/files/ser-01.svg?v=1721646955", // Replace with your image/icon
              title: "Free Shipping",
              description: "From all orders over $100",
            },
            {
              icon: "https://demo-digitic2.myshopify.com/cdn/shop/files/ser-02.svg?v=1721646954",
              title: "Daily Surprise Offers",
              description: "Save up to 25% off",
            },
            {
              icon: "https://demo-digitic2.myshopify.com/cdn/shop/files/ser-03.svg?v=1721646955",
              title: "Support 24/7",
              description: "Shop with an expert",
            },
            {
              icon: "https://demo-digitic2.myshopify.com/cdn/shop/files/ser-04.svg?v=1721646955",
              title: "Affordable Prices",
              description: "Get Factory direct price",
            },
            {
              icon: "https://demo-digitic2.myshopify.com/cdn/shop/files/ser-05.svg?v=1721646954",
              title: "Secure Payments",
              description: "100% Protected Payments",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-row gap-4 items-center text-centerp-6 flex-shrink-0 group"
            >
              {/* Icon with Rotate X Effect */}
              <div className="text-4xl mb-3 group-hover:animate-rotateX">
                <img src={feature.icon} />
                
              </div>
              <div className="flex flex-col text-left">
              <h3 className="font-semibold text-xl text-[#1c1b1b]">{feature.title}</h3>
              <p className="text-gray-600 text-base">{feature.description}</p>
              </div>
   
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlight;
