import { CATEGORIES } from "../assets/mockdata";
import { HERO_IMG } from "../assets/Images/images";
import InfoSection from "./InfoSection";
import CategorySection from "./CategorySection";
import appStore from "../utils/appStore";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addproduct } from "../utils/productSlice";
import { ProductData } from "../assets/mockdata";
import ProductCard from "../Components/ProductCard";
import Shop from "./Shop";

const Home = () => {
  const allProducts = useSelector((store) => store.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addproduct(ProductData));
  }, []);
  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 px-2 py-2.5 text-xs font-bold text-white">
            SHOP BY CATEGORIES
          </div>
          <ul className="bg-gray-100 space-y-4 border p-3">
            {CATEGORIES.map((category, index) => (
              <li className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative  w-full md:w-9/12 mt-8 md:mt-0 h-96">
          <img src={HERO_IMG} className="h-full w-9/12" />
          <div className="absolute top-16 left-8">
            <p className="text-gray-600 mb-4">shoppify | online</p>
            <h2 className="text-3xl font-bold">WELCOME TO E-SHOP</h2>
            <p className="text-xl mt-2.5 font-bold text-gray-800">
              MILLION PLUS PRODUCTS
            </p>
            <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />
      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {allProducts?.slice(0, 5).map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
      <Shop />
    </div>
  );
};

export default Home;
