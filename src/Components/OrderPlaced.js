import React from "react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const OrderPlaced = () => {
  const [guid, setGuid] = useState("");

  const handleTracking = () => {
    if (guid === "") {
      const newGuid = uuidv4();
      setGuid(newGuid);
    }
  };

  const handleShopping = () => {
    setGuid("");
  };
  return (
    <div className="flex items-center justify-center h-screen p-2 m-2">
      <div className="w-1/3 border-2  bg-whiteshadow-lg rounded-md items-center justify-center p-2 m-2 h-2/4">
        <h1 className="text-green-400 text-xl ml-20 p-2 font-bold">
          THANK YOU FOR YOUR ORDER
        </h1>
        <h3 className="p-1">
          Your order has been placed, you will get a email notification soon.
        </h3>
        <div>
          <button
            className="w-40 bg-green-600 text-white py-2 rounded-xl hover:bg-green-800 mt-8 ml-14 "
            onClick={handleTracking}
          >
            Tracking
          </button>
          <Link to={"/"}>
            <button
              className="w-40 bg-red-600 text-white py-2 rounded-xl hover:bg-red-800 mt-8 ml-14 "
              onClick={handleShopping}
            >
              Continue Shopping
            </button>
          </Link>
          {guid ? (
            <div className="m-5">
              <label className="p-2 font-bold text-blue-800">
                Tracking Id:
              </label>
              <label className=" font-bold text-blue-800 ">{guid}</label>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
