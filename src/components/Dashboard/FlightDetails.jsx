import React, { useState } from "react";

const FlightDetails = () => {
  const [flight, setFlight] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFlight = () => {
    setLoading(true);
    setError(null);
    // Mock API call
    setTimeout(() => {
      const shouldFail = false; // Change to true to simulate an error

      if (shouldFail) {
        setError("Failed to fetch flight details");
      } else {
        setFlight({
          airline: "IndiGo Airlines",
          departure: "Delhi",
          arrival: "Goa",
          time: "10:00 AM - 12:30 PM",
        });
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">Flight Details</h2>
      <button
        onClick={fetchFlight}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Loading..." : "Load Flight Details"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {flight && !error && (
        <div className="mt-4">
          <p><strong>Airline:</strong> {flight.airline}</p>
          <p><strong>From:</strong> {flight.departure}</p>
          <p><strong>To:</strong> {flight.arrival}</p>
          <p><strong>Time:</strong> {flight.time}</p>
        </div>
      )}
    </div>
  );
};

export default FlightDetails;
