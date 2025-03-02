import React from "react";
import { MEN_IMG, WOMEN_IMG, KIDS_IMG } from "../assets/Images/images";
const CategorySection = () => {
  const categories = [
    {
      title: "Men",
      imgUrl: MEN_IMG,
    },
    {
      title: "Women",
      imgUrl: WOMEN_IMG,
    },
    {
      title: "Kids",
      imgUrl: KIDS_IMG,
    },
  ];
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 ">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src={category.imgUrl}
            className="w-full h-full rounded-lg object-cover shadow-md"
          />

          <div className="absolute top-20 left-12">
            <p className="text-xl font-bold">{category.title}</p>
            <p className="text-gray-600">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
