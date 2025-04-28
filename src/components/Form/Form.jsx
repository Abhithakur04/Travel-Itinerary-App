import React, { useState } from "react";

const Form = ({ onContinue }) => {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [groupType, setGroupType] = useState("");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-purple-100 p-4">
      <h1 className="text-2xl font-bold mb-2">Plan Your Journey, Your Way!</h1>
      <p className="mb-6 text-gray-600">Let's create your personalised travel experience</p>

      <input
        type="text"
        placeholder="Enter Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="w-full max-w-md p-3 border rounded mb-4"
      />

      <select
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        className="w-full max-w-md p-3 border rounded mb-4"
      >
        <option value="">Select Duration</option>
        <option value="3">3 Days</option>
        <option value="5">5 Days</option>
        <option value="7">7 Days</option>
      </select>

      <div className="grid grid-cols-2 gap-4 mb-4 max-w-md w-full">
        {["Solo", "Couple", "Family", "Friends"].map((type) => (
          <button
            key={type}
            onClick={() => setGroupType(type)}
            className={`p-4 border rounded ${groupType === type ? "bg-blue-500 text-white" : "bg-gray-100"}`}
          >
            {type}
          </button>
        ))}
      </div>

      <button
        onClick={() => onContinue({ destination, duration, groupType })}
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Continue
      </button>
    </div>
  );
};

export default Form;
