import React from "react";
import { FaHotel } from "react-icons/fa";

const Accommodation = () => {
  const hotels = [
    {
      name: "Shinagawa Prince Hotel",
      location: "Tokyo",
      checkIn: "26.01.2025, 11:15 pm",
      checkOut: "28.01.2025, 11:15 am",
      nights: 2,
      status: "Confirmed",
      rating: 4.0,
      image: "https://q-xx.bstatic.com/xdata/images/hotel/max1200/13800549.jpg?k=ff50353d2dd34d4addadf1d09d633282e0a42eac9b6bb4a4930354832bc4d847&o=", 
    },
    {
      name: "Mercure Tokyo Hotel",
      location: "Tokyo",
      checkIn: "28.01.2025, 6:00 pm",
      checkOut: "30.01.2025, 11:15 am",
      nights: 2,
      status: "Pending",
      rating: 4.2,
      image: "https://images.pexels.com/photos/4223678/pexels-photo-4223678.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", 
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 rounded-lg shadow-md mb-4 transition-colors duration-300 w-full">
      <div className="p-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold flex items-center">
          <FaHotel className="mr-2 text-green-500" />
          Accommodation
        </h2>
        <button className="text-sm text-blue-500 hover:underline">See all</button>
      </div>

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {hotels.map((hotel, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            {hotel.image && (
              <div className="mb-4">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
            )}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1">★</span>
                <span className="text-sm font-medium">{hotel.rating} Very Good</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold">{hotel.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              Check In: {hotel.checkIn}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              Check Out: {hotel.checkOut}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {hotel.nights} Nights
            </p>
            <div className="mt-2">
              {hotel.status === "Confirmed" ? (
                <span className="text-green-500 font-medium">Confirmed</span>
              ) : (
                <span className="text-yellow-500 font-medium">Pending</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accommodation;
