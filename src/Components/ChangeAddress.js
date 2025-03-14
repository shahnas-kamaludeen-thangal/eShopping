import React, { useState } from "react";

const ChangeAddress = ({ setAddress, setISModelOpen }) => {
  const [newAddress, setNewAddress] = useState("");

  const handleSave = () => {
    setAddress(newAddress);
    setISModelOpen(false);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter address"
        className="border p-2 w-full mb-4"
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
          onClick={() => setISModelOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleSave}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
