import React from "react";
import { DiVim } from "react-icons/di";
import { FaHeadset, FaLock, FaShippingFast, FaTag } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa6";

const InfoSection = () => {
  const info = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      titile: "Free Shipping",
      description: "Get your ordered item delivered with no extra cost",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      titile: "Support 24/7",
      description: "We are here t support you anytime!",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      titile: "100% Money Back",
      description: "Full refund if you are not satisfied with shopping",
    },

    {
      icon: <FaLock className="text-3xl text-red-600" />,
      titile: "Secure Payment",
      description: "Your payment information is safe with us.",
    },
    {
      icon: <FaTag className="text-3xl text-red-600" />,
      titile: "Discount",
      description: "Enjoy the best price on your product",
    },
  ];
  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:gird-cols-2 lg:grid-cols-5 gap-4">
        {info.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            {item.icon}
            <h3 className="mt-4 text-xl font-semibold">{item.titile}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
