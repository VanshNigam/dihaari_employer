import React from "react";

const JobCard = ({ title, company, location, time, salary, date, type }) => {
  return (
    <div className="border border-gray-200 p-4 rounded-lg mb-4 bg-white">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600">{company}</p>
      <div className="flex items-center text-sm text-gray-500 mt-2">
        <span>{location}</span>
        <span className="mx-2">|</span>
        <span>{time}</span>
        <span className="mx-2">|</span>
        <span>{salary}</span>
      </div>
      <p className="text-sm text-green-500 mt-2">{date}</p>
      <p className="text-sm text-gray-600">{type}</p>
      <div className="flex space-x-2 mt-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Apply Now
        </button>
        <button className="px-4 py-2 bg-gray-100 text-blue-600 rounded-lg">
          Read More
        </button>
      </div>
    </div>
  );
};

export default JobCard;
