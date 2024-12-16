import React from "react";
import Navbar from "../components/Navbar";
import { useNotificationData } from "../hooks/useNotificationData";

const Notifications = () => {
  const { notifications, loading, error } = useNotificationData();

  return (
    <>
      <Navbar />
      <div className="p-6 font-sans bg-gradient-to-b from-blue-100 via-white to-gray-100 min-h-screen">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Notifications</h1>

        {loading && (
          <div className="flex justify-center items-center h-32">
            <p className="animate-pulse text-lg font-medium text-gray-600">Loading...</p>
          </div>
        )}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <strong className="font-bold">Error:</strong> <span>{error.message}</span>
          </div>
        )}

        {!loading && notifications.length > 0 && (
          <div className="bg-white shadow-lg rounded-xl p-6 space-y-4">
            {notifications.map((notif: any) => (
              <div
                key={notif.id}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm transition hover:shadow-md hover:bg-gray-100"
              >
                <div>
                  <p className="font-semibold text-gray-800">{notif.user}</p>
                  <p className="text-sm text-gray-500">{notif.message}</p>
                </div>
                <div className="text-sm text-gray-400 font-medium">{notif.date}</div>
              </div>
            ))}
          </div>
        )}
        {!loading && notifications.length === 0 && (
          <div className="flex justify-center items-center h-32">
            <p className="text-gray-600 text-lg">No notifications available.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Notifications;
