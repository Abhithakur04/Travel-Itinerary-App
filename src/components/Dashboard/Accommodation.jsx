import React, { useState } from "react";

const Accommodation = () => {
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const fetchHotel = () => {
    setLoading(true);
    setTimeout(() => {
      setHotel({
        name: "Taj Resort & Spa",
        location: "Goa Beachfront",
        nights: 3,
      });
      setLoading(false);
      setShowDetails(true);
    }, 1000);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">Accommodation</h2>
      <button
        onClick={fetchHotel}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Loading..." : "Load Hotel Details"}
      </button>

      {showDetails && hotel && (
        <div className="mt-4">
          <p><strong>Hotel:</strong> {hotel.name}</p>
          <p><strong>Location:</strong> {hotel.location}</p>
          <p><strong>Stay:</strong> {hotel.nights} Nights</p>
        </div>
      )}
    </div>
  );
};

export default Accommodation;
