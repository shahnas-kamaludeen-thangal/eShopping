import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const CheckOut = () => {
  const [showBillingAccordian, setShowBillingAccordian] = useState(false);
  const [showShippingAccordian, setShowShippingAccordian] = useState(false);
  const [showPaymentAccordian, setShowPaymentAccordian] = useState(false);
  const [cashOnDelivery, setCashOnDelivery] = useState("COD");
  const [debit, setDebit] = useState("");
  const handleAccordian = () => {
    setShowBillingAccordian((prev) => !prev);
  };

  const handleShippingAccordian = () => {
    setShowShippingAccordian((prev) => !prev);
  };
  const handlePaymentAccordian = () => {
    setShowPaymentAccordian((prev) => !prev);
  };

  const handleDebit = () => {
    setCashOnDelivery("");
    setDebit("DC");
  };

  const handleCOD = () => {
    setCashOnDelivery("COD");
    setDebit("");
  };
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className="border p-2 mb-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold mb-2">
                Billing Information
              </h3>

              {showBillingAccordian === false ? (
                <FaAngleDown onClick={handleAccordian} />
              ) : (
                <FaAngleUp onClick={handleAccordian} />
              )}
            </div>
            {showBillingAccordian === true ? (
              <>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700">Name</label>
                    <input type="text" className="w-full px-3 py-2 border" />
                  </div>
                </div>
                <div>
                  <div>
                    <label className="block text-gray-700">Email</label>
                    <input type="email" className="w-full px-3 py-2 border" />
                  </div>
                </div>
                <div>
                  <div>
                    <label className="block text-gray-700">Phone No:</label>
                    <input type="number" className="w-full px-3 py-2 border" />
                  </div>
                </div>
              </>
            ) : null}
          </div>
          <div className="border p-2 mb-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold mb-2">
                Shipping Information
              </h3>

              {showShippingAccordian === false ? (
                <FaAngleDown onClick={handleShippingAccordian} />
              ) : (
                <FaAngleUp onClick={handleShippingAccordian} />
              )}
            </div>
            {showShippingAccordian === true ? (
              <>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700">Address</label>
                    <input type="text" className="w-full px-3 py-2 border" />
                  </div>
                </div>
                <div>
                  <div>
                    <label className="block text-gray-700">City</label>
                    <input type="email" className="w-full px-3 py-2 border" />
                  </div>
                </div>
                <div>
                  <div>
                    <label className="block text-gray-700">Zip code</label>
                    <input type="number" className="w-full px-3 py-2 border" />
                  </div>
                </div>
              </>
            ) : null}
          </div>

          <div className="border p-2 mb-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold mb-2">
                Payment Information
              </h3>

              {showPaymentAccordian === false ? (
                <FaAngleDown onClick={handlePaymentAccordian} />
              ) : (
                <FaAngleUp onClick={handlePaymentAccordian} />
              )}
            </div>
            {showPaymentAccordian === true ? (
              <>
                <div className="space-y-4">
                  <div className="flex">
                    <input
                      type="radio"
                      checked={cashOnDelivery === "COD"}
                      onClick={handleCOD}
                    />
                    <label className="block text-gray-700">
                      Cash on Delivery
                    </label>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <input
                      type="radio"
                      checked={debit === "DC"}
                      onClick={handleDebit}
                    />
                    <label className="block text-gray-700">Debit Card</label>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>

      <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
        <h3 className="text-2xl font-semibold mb-2 border-b">Order Summary</h3>
      </div>
    </div>
  );
};
export default CheckOut;
