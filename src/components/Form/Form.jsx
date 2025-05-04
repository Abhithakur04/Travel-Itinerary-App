import React, { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaUsers, FaHeart, FaChild } from "react-icons/fa";

const Form = ({ onContinue }) => {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [groupType, setGroupType] = useState("");
  const [name, setName] = useState("");

  const groupIcons = {
    Solo: <FaUser className="inline mr-2" />,
    Couple: <FaHeart className="inline mr-2" />,
    Family: <FaChild className="inline mr-2" />,
    Friends: <FaUsers className="inline mr-2" />,
  };

  return (
    <div className="min-h-screen mt-[-43px] flex flex-col justify-center items-center bg-gradient-to-b from-white to-purple-100 dark:from-gray-900 dark:to-gray-800 p-4 transition-colors duration-300">
      <h1 className="text-2xl font-bold mb-2 dark:text-white">Plan Your Journey, Your Way!</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300">Let's create your personalised travel experience</p>

      {/* Destination input with icon */}
    
      <div className="w-full max-w-md mb-4">
  <p className="text-lg font-semibold mb-2 dark:text-white">
    Where would you like to go?
  </p>

  <div className="flex items-center border border-black rounded bg-white dark:bg-gray-700">
    <span className="p-3 text-gray-700 dark:text-gray-200">
      <FaMapMarkerAlt />
    </span>
    <input
      type="text"
      placeholder="Enter Destination"
      value={destination}
      onChange={(e) => setDestination(e.target.value)}
      className="w-full p-3 outline-none bg-transparent text-black dark:text-white"
    />
  </div>
</div>



      {/* Duration select with icon */}
    
      <div className="w-full max-w-md mb-4">
  <p className="text-lg font-semibold mb-2 dark:text-white">
    How long will you stay?
  </p>

  <div className="flex items-center border border-black rounded bg-white dark:bg-gray-700">
    <span className="p-3 text-gray-700 dark:text-gray-200">
      <FaCalendarAlt />
    </span>
    <select
      value={duration}
      onChange={(e) => setDuration(e.target.value)}
      className="w-full p-3 bg-transparent text-black dark:text-white outline-none"
    >
      <option value="">Select Duration</option>
      <option value="3">3 Days</option>
      <option value="5">5 Days</option>
      <option value="7">7 Days</option>
    </select>
  </div>
</div>


      {/* Group type buttons with icons */}
     
      <div className="w-full max-w-md mb-4">
  <p className="text-lg font-semibold mb-2 dark:text-white">
    Who are you traveling with?
  </p>

  <div className="grid grid-cols-2 gap-4">
    {["Solo", "Couple", "Family", "Friends"].map((type) => (
      <button
        key={type}
        onClick={() => setGroupType(type)}
        className={`flex items-center justify-center gap-2 p-4 border border-black rounded transition-colors duration-200
          ${
            groupType === type
              ? "bg-blue-500 text-white"
              : "bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
          }`}
      >
        <span className="text-xl">{groupIcons[type]}</span>
        <span className="font-medium">{type}</span>
      </button>
    ))}
  </div>
</div>
<div className="w-full max-w-md mb-4">
        <p className="text-lg font-semibold mb-2 dark:text-white">
          Your Name
        </p>
        <div className="flex items-center border border-black rounded bg-white dark:bg-gray-700">
          <span className="p-3 text-gray-700 dark:text-gray-200">
            <FaUser />
          </span>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 outline-none bg-transparent text-black dark:text-white"
          />
        </div>
      </div>


      <button
        onClick={() => onContinue({ destination, duration, groupType,name })}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition"
      >
        Continue
      </button>
    </div>
  );
};

export default Form;
