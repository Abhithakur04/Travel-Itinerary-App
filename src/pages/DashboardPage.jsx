import React from "react";
import {  FaMapMarkerAlt,  FaCalendarAlt,FaUser, FaHeart,  FaUsers, FaChild, FaClock, FaRunning,} from "react-icons/fa";
import FlightDetails from "../components/Dashboard/FlightDetails";
import Accommodation from "../components/Dashboard/Accommodation";

// Destination images
const destinationImages = {
  Tokyo: "https://images.unsplash.com/photo-1583541492192-0479df8d2f79?auto=format&fit=crop&w=800&q=80",
  Delhi: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
  Mumbai: "https://images.unsplash.com/photo-1589820296150-ffcbf23e4f08?auto=format&fit=crop&w=800&q=80",
  Goa: "https://images.unsplash.com/photo-1580052614034-c55b0f4a7f61?auto=format&fit=crop&w=800&q=80",
  Paris: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
};

const DashboardPage = ({ formData }) => {
  if (!formData) {
    return (
      <div className="text-center mt-20 text-gray-600 dark:text-gray-300">
        No Trip Selected. Please go back to Home Page.
      </div>
    );
  }

  const groupIcons = {
    Solo: <FaUser className="inline mr-2" />,
    Couple: <FaHeart className="inline mr-2" />,
    Family: <FaChild className="inline mr-2" />,
    Friends: <FaUsers className="inline mr-2" />,
  };

  const imageUrl =
    destinationImages[formData.destination] || destinationImages["Tokyo"];

  return (
    <div className="min-h-screen p-0 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      <div className="mb-4 flex items-center">
  <div className="ml-4">
    <h2 className="text-3xl font-semibold dark:text-white text-black">
      Hello {formData.name || "Traveler"}!
    </h2>
    <p className="text-sm text-gray-500 dark:text-gray-300">Ready for the trip?</p>
  </div>
  <FaUser 
    className="text-4xl ml-auto text-blue-500 dark:text-yellow-400 hover:text-purple-500 transition-colors mr-8" 
  />
</div>
      
      
      {/* Image Header */}
      <div
        className="relative h-96 w-full bg-center bg-cover"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="absolute top-6 left-6 z-10 flex items-center text-white text-2xl font-bold">
          <FaMapMarkerAlt className="mr-3 text-blue-400" />
          Your Trip to {formData.destination}
        </div>
        <div className="absolute bottom-4 left-6 right-6 z-10 flex justify-between text-sm text-white">
          <div className="flex items-center gap-1 bg-black bg-opacity-50 px-2 py-1 rounded">
            <FaClock />
            <span>{formData.duration} Days</span>
          </div>
          <div className="flex items-center gap-1 bg-black bg-opacity-50 px-2 py-1 rounded">
            {groupIcons[formData.groupType] || <FaUsers />}
            <span>{formData.groupType}</span>
          </div>
          <div className="flex items-center gap-1 bg-black bg-opacity-50 px-2 py-1 rounded">
            <FaRunning />
            <span>14 Activities</span>
          </div>
        </div>
      </div>

      {/* Trip Details */}
      <div className="px-8 pt-6 pb-2">
        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md mb-4">
          <h2 className="text-xl font-semibold mb-4">Trip Details</h2>

          <p className="flex items-center mb-2">
            <FaCalendarAlt className="mr-2 text-blue-400" />
            <strong className="mr-1">Duration:</strong> {formData.duration} Days
          </p>

          <p className="flex items-center">
            {groupIcons[formData.groupType] || <FaUsers className="mr-2" />}
            <strong className="mr-1">Group Type:</strong> {formData.groupType}
          </p>
        </div>

        {/* Components */}
        <FlightDetails destination={formData.destination} />
        <Accommodation />
      </div>
    </div>
  );
};

export default DashboardPage;
