import React, { useState } from 'react';

const FlightDetails = ({ destination }) => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const aeroplaneImageUrl =
    'https://www.pngplay.com/wp-content/uploads/6/White-Aeroplane-PNG.png';

  const flightList = [
    {
      departureDate: '26.01.2025',
      departureTime: '10:50 am',
      originCode: 'MUM',
      originCity: 'Mumbai, India',
      destinationCode: destination || 'NRT',
      destinationCity: destination || 'Narita, Tokyo',
    },
    {
      departureDate: '27.01.2025',
      departureTime: '8:20 am',
      originCode: 'DEL',
      originCity: 'Delhi, India',
      destinationCode: destination || 'HND',
      destinationCity: destination || 'Haneda, Tokyo',
    },
    {
      departureDate: '28.01.2025',
      departureTime: '2:30 pm',
      originCode: 'DEL',
      originCity: 'Delhi, India',
      destinationCode: destination || 'KIX',
      destinationCity: destination || 'Osaka, Japan',
    },
  ];

  const handleSeeAll = () => {
    setShowMoreDetails((prev) => !prev);
  };

  const renderFlight = (flight, index) => (
    <div key={index} className="mb-6 border-b border-blue-700 pb-4">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-left mt-[-100px]">
          {flight.departureDate}, {flight.departureTime}
        </p>
        <img
          src={aeroplaneImageUrl}
          alt="Aeroplane"
          className="w-[33rem] h-40 object-contain ml-auto"
        />
      </div>

      <div className="flex items-center">
        <div className="text-center">
          <p className="text-2xl font-bold">{flight.originCode}</p>
          <p className="text-xs">{flight.originCity}</p>
        </div>
        <span className="mx-4 text-lg">→</span>
        <div className="text-center">
          <p className="text-2xl font-bold">{flight.destinationCode}</p>
          <p className="text-xs">{flight.destinationCity}</p>
        </div>
      </div>

     
    </div>
  );

  return (
    <div className="bg-blue-900 text-white p-6 rounded-md mb-4 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Flight Details</h2>
        <button
          onClick={handleSeeAll}
          className="text-blue-300 hover:text-blue-200 text-sm"
        >
          {showMoreDetails ? 'See less' : 'See all'}
        </button>
      </div>


      {showMoreDetails
        ? flightList.map((flight, index) => renderFlight(flight, index))
        : renderFlight(flightList[0], 0)}
    </div>
  );
};

export default FlightDetails;
