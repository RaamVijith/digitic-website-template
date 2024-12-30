import BlogGrid from "./components/BlogGrid";
import Brands from "./components/Brands";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Highlight from "./components/Highlight";
import HomeImagesComponent from "./components/HomeImagesComponent";
import Navbar from "./components/Navbar";
import NavigationMenu from "./components/NavbarBottom";
import PopularProduct from "./components/PopularProduct";
import ProductCard from "./components/ProductCard";
import ProductSlider from "./components/ProductSlider";
import SpecialProduct from "./components/SpecialProduct";
import SubscribeSection from "./components/SubscribeSection";

function App() {
  return (
    <div className="bg-[#f5f5f7]">
      <Navbar />
      <NavigationMenu />
      <HomeImagesComponent />
      <Highlight />
      <Category />
      <PopularProduct />
      <ProductCard />
      <SpecialProduct />
      <h2 className="text-4xl mx-5 mt-[4vw] text-gray-800 font-bold px-2 ">
        
Our Popular Products
      </h2>
      <ProductSlider />
      <Brands />
      <h2 className="text-4xl mx-5 text-gray-800 font-bold px-2 ">
        Our Latest News
      </h2>
      <BlogGrid />
      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default App;
