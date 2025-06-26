import React from "react";
import { FaUser, FaSuitcase, FaTshirt, FaTag } from 'react-icons/fa';

export default function PackageBanner() {
  return (
    <div className="bg-gray-100 py-6 px-4">
      <div className="bg-white rounded-md overflow-hidden shadow-md">

        {/* Heading */}
        <h1 className="text-center font-extrabold text-2xl md:text-3xl text-gray-900 py-6">
          Our packages at a glance
        </h1>

        {/* Row: Features + Price */}
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Features */}
          <div className="flex-1 flex flex-col md:flex-row items-center justify-between px-6 py-6 gap-6">
            <div className="flex items-center gap-3">
              <FaUser className="text-blue-500 text-xl bg-blue-100 rounded-full p-1" />
              <span className="text-sm text-gray-800 font-medium">
                From 10 application photos
              </span>
            </div>

            <div className="hidden md:block h-6 w-px bg-gray-300"></div>

            <div className="flex items-center gap-3">
              <FaSuitcase className="text-blue-500 text-xl bg-blue-100 rounded-full p-1" />
              <span className="text-sm text-gray-800 font-medium">
                Various background packages to choose from
              </span>
            </div>

            <div className="hidden md:block h-6 w-px bg-gray-300"></div>

            <div className="flex items-center gap-3">
              <FaTshirt className="text-blue-500 text-xl bg-blue-100 rounded-full p-1" />
              <span className="text-sm text-gray-800 font-medium">
                Professional clothing for the perfect look
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="bg-blue-500 text-white text-center px-6 py-6 flex flex-col justify-center items-center w-full md:w-52 rounded-none md:rounded-l-none md:rounded-r-md">
            <FaTag className="text-xl mb-2" />
            <span className="text-xl font-bold">From €24.90</span>
            <span className="text-sm">/Per person</span>
          </div>
        </div>
      </div>
    </div>
  );
}
