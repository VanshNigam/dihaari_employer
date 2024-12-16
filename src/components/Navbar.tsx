import React from "react";

const Home = () => {
  return (
    <>
      {/* Apply padding for the entire page */}
      <div className="">
        <nav className="bg-white border-b border-gray-200">
          <div className="flex justify-around items-center h-16 px-4 md:px-8">
            {/* Logo and Brand Name */}
            <div className="flex items-center space-x-2">
              <img src="./logo1.png" alt="Dihaari Logo" className="h-8 w-8" />
              <span className="text-xl font-bold">Dihaari</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
              <a href="#companies" className="text-gray-700 hover:text-blue-600">
                Companies
              </a>
              <a href="#groups" className="text-gray-700 hover:text-blue-600">
                Groups
              </a>
              <a href="#blogs" className="text-gray-700 hover:text-blue-600">
                Blogs
              </a>
            </div>

            {/* Search and Profile */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-3.5 py-2 border border-blue-500 text-blue-600 rounded-full hover:bg-blue-50">
                <img src="./search.png" className="mr-[1vw] h-3" alt="Search" />
                <span>Search</span>
              </button>
              <button className="ml-auto md:ml-0">
                <img
                  src="./profile.png"
                  alt="Profile Icon"
                  className="h-8 w-8 rounded-full"
                />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex flex-col space-y-4 mt-4 md:hidden">
            <a href="#home" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#companies" className="text-gray-700 hover:text-blue-600">
              Companies
            </a>
            <a href="#groups" className="text-gray-700 hover:text-blue-600">
              Groups
            </a>
            <a href="#blogs" className="text-gray-700 hover:text-blue-600">
              Blogs
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Home;
