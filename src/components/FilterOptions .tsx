import React from "react";

const FilterOptions = () => {
  return (
    <div className="w-full md:w-1/4 bg-white border border-gray-200 p-4 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Filter Options</h3>
      <div className="mb-4">
        <label className="block font-medium mb-2">Profile</label>
        <select className="w-full p-2 border rounded-md">
          <option>Engineering</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Job Category</label>
        <div>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Full-time
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Part-time
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Internships
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Location</label>
        <input
          type="text"
          placeholder="e.g. Delhi"
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Salary Range (₹)</label>
        <input type="range" min="0" max="10000" className="w-full" />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Duration</label>
        <label className="block">
          <input type="checkbox" className="mr-2" /> 1 month
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" /> 6 months
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" /> More
        </label>
      </div>
      <button className="text-blue-600 underline">Clear All</button>
    </div>
  );
};

export default FilterOptions;
