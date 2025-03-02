import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const Shop = () => {
  const allProducts = useSelector((store) => store.product.products);
  return (
    <div className=" mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {allProducts?.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
