const BlogGrid = () => {
  // Static blog posts data
  const posts = [
    {
      id: 1,
      image:
        "https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2023/01/blog-18.jpg", // Replace with your image URL
      date: "February 9, 2024",
      author: "Editor",
      title: "How to Write a Blog Post Your Readers Will Love in 5 Steps",
      excerpt:
        "Why the world would end without travel coupons. The 16 worst songs about spa...",
    },
    {
      id: 2,
      image:
        "https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2023/01/blog-17.jpg", // Replace with your image URL
      date: "February 7, 2024",
      author: "Editor",
      title: "9 Content Marketing Trends and Ideas to Increase Traffic",
      excerpt:
        "Why do people think wholesale accessories are a good idea? Unbelievable cool tech gadget...",
    },
    {
      id: 3,
      image:
        "https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2023/01/blog-16.jpg", // Replace with your image URL
      date: "February 5, 2024",
      author: "Editor",
      title: "The Ultimate Guide to Marketing Strategies to Improve Sales",
      excerpt:
        "Many things about electronic devices your kids don't want you to know How storage...",
    },
    {
      id: 4,
      image:
        "https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2023/01/blog-16.jpg", // Replace with your image URL
      date: "February 5, 2024",
      author: "Editor",
      title: "The Ultimate Guide to Marketing Strategies to Improve Sales",
      excerpt:
        "Many things about electronic devices your kids don't want you to know How storage...",
    },
  ];

  return (
    <div className="mx-auto px-5 pb-[15vh] pt-10">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group cursor-pointer bg-white rounded-xl shadow-xl"
          >
            {/* Image Container with Zoom Effect */}
            <div className="overflow-hidden rounded-sm mb-4 aspect-[16/10]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full rounded-t-xl object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="px-[8%] py-[4%] flex flex-col gap-1">
              {/* Post Meta */}
              <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                <time className="text-gray-400 text-xl">{post.date}</time>
                
              </div>

              {/* Post Title */}
              <h2 className="text-2xl text-gray-800 truncate font-semibold mb-3 transition-colors">
                {post.title}
              </h2>

              {/* Post Excerpt */}
              <p className="text-gray-400 line-clamp-2">{post.excerpt}</p>
              <p className="py-2 sm:py-3 mt-4 sm:mt-5 px-3 mb-4 sm:px-10 text-white bg-[#1d2939] hover:bg-[#febd69] text-base sm:text-xl rounded-full w-fit">
                    Read More
                  </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
