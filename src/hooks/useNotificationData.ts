import { useState, useEffect } from "react";

export const useNotificationData = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true);
        
        // Placeholder for GraphQL API call (replace this with actual GraphQL query)
        // Example: const response = await fetchGraphQL(query, variables);
        
        const response = await fetch("/api/notifications"); // Replace with your API endpoint
        const data = await response.json();

        if (data && data.notifications) {
          setNotifications(data.notifications);
        } else {
          setNotifications([]);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return { notifications, loading, error };
};
