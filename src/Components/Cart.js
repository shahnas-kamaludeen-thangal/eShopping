import React from "react";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";
import Model from "./Model";
import ChangeAddress from "./ChangeAddress";
import { removeItem, increaseItem, decreaseItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const [address, setAddress] = useState("Austin,Texas");
  const [isModelOpen, setISModelOpen] = useState(false);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleIncreaseItem = (id) => {
    dispatch(increaseItem(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseItem(id));
  };
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.cartItems.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p>PRODUCTS</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              <div>
                {cart?.cartItems?.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-3 border-b"
                  >
                    <div className="md:flex items-center space-x-4">
                      <img
                        src={product.image}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold">
                          {product.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center space-x-12">
                      <p>${product.price.toFixed(2)}</p>
                      <div className="flex items-center justify-center border">
                        <button
                          className="text-xl font-bold px-1.5 border-r"
                          onClick={() => handleDecrease(product.id)}
                        >
                          -
                        </button>
                        <p className="text-xl px-2">{product.quantity}</p>
                        <button
                          className="text-xl font-bold px-1.5 border-l"
                          onClick={() => handleIncreaseItem(product.id)}
                        >
                          +
                        </button>
                      </div>
                      <p>${(product.quantity * product.price).toFixed(2)}</p>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleRemove(product.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-2xl font-semibold mb-2 border-b">
                CART TOTAL
              </h3>
              <div className="m-2 border-b">
                <span className="text-sm mb-3 mt-2 ">TOTAL ITEMS: {""}</span>
                <span className="font-semibold ">{cart.productQuantity}</span>
              </div>
              <div>
                <p>SHIPPING</p>
                <p className="ml-2">Shipping to:{""}</p>
                <span className="text-xs font-bold ml-3">{address}</span>
                <button
                  className="text-blue-500 hover:underline mt-1 ml-2"
                  onClick={() => setISModelOpen(true)}
                >
                  Change Address
                </button>
              </div>
              <div className="flex justify-between mb-8 mt-3">
                <span>Total Price:</span>
                <span>{cart.totalPrice.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
          <Model isModelOpen={isModelOpen} setISModelOpen={setISModelOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setISModelOpen={setISModelOpen}
            />
          </Model>
        </div>
      ) : (
        "No products in the cart."
      )}
    </div>
  );
};

export default Cart;
