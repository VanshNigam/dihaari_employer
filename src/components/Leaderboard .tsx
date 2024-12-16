import React from "react";

const Leaderboard = () => {
  const users = [
    { name: "Sudhir Patel", rank: 1, score: 10621 },
    { name: "Ramesh S.", rank: 2, score: 8756 },
    { name: "Sudhir Patel", rank: 1, score: 10621 },
    { name: "Ramesh S.", rank: 2, score: 8756 },
    { name: "Sudhir Patel", rank: 1, score: 10621 },
    { name: "Ramesh S.", rank: 2, score: 8756 },
  ];

  return (
    <div className="w-full md:w-1/4 bg-white border border-gray-200 p-4 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Leaderboard</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{user.name}</span>
            <span className="text-gray-500">#{user.rank}</span>
            <span className="text-blue-600 font-bold">{user.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
