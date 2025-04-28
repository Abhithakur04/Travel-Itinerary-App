import React from "react";
import FlightDetails from "../components/Dashboard/FlightDetails";
import Accommodation from "../components/Dashboard/Accommodation";

const DashboardPage = ({ formData }) => {
  if (!formData) {
    return (
      <div className="text-center mt-20">
        No Trip Selected. Please go back to Home Page.
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Your Trip to {formData.destination}</h1>

      <div className="bg-white p-6 rounded shadow-md mb-4">
        <h2 className="text-xl font-semibold mb-2">Trip Details</h2>
        <p><strong>Duration:</strong> {formData.duration} Days</p>
        <p><strong>Group Type:</strong> {formData.groupType}</p>
      </div>

      {/* Third Pane sections */}
      <FlightDetails />
      <Accommodation />
    </div>
  );
};

export default DashboardPage;
