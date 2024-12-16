import React from "react";
import Home from "./Navbar";
import JobCard from "./JobCard ";
import Leaderboard from "./Leaderboard ";
import ChatButton from "./ChatButton ";
import FilterOptions from "./FilterOptions ";

const HomePage = () => {
  const jobs = [
    {
      title: "Digital Marketing",
      company: "Tiyana Corporation",
      location: "Mumbai",
      time: "3 months",
      salary: "₹15,000 - ₹20,000/month",
      date: "Just now",
      type: "Internship with job offer",
    },
    {
      title: "Digital Marketing",
      company: "Tiyana Corporation",
      location: "Mumbai",
      time: "3 months",
      salary: "₹15,000 - ₹20,000/month",
      date: "Just now",
      type: "Internship with job offer",
    },
    {
      title: "Digital Marketing",
      company: "Tiyana Corporation",
      location: "Mumbai",
      time: "3 months",
      salary: "₹15,000 - ₹20,000/month",
      date: "Just now",
      type: "Internship with job offer",
    },
    // Add more job objects here...
  ];

  return (
    <div className="">
      <Home />
      <div className="flex flex-wrap mt-8 space-y-4 md:space-y-0">
        <FilterOptions />
        <div className="w-full md:w-1/2 p-4">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
          {/* // <LoadMoreButton /> */}
        </div>
        <Leaderboard />
      </div>
      <ChatButton />
    </div>
  );
};

export default HomePage;
