import Navbar from '../components/Main';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useState, useEffect } from 'react';

const HomePage = () => {
    const { user, error, isLoading } = useUser();
    const [Data, setData] = useState<any>([]);
    const [loadingData, setLoadingData] = useState<boolean>(false);

    useEffect(() => {
        // If user is logged in, fetch the Data
        if (user) {
            const fetchData = async () => {
                setLoadingData(true);
                try {
                    const response = await fetch('/api/data'); // Call the server-side API
                    if (response.ok) {
                        const data = await response.json();
                        setData(data);
                    } else {
                        console.error('Failed to fetch Data');
                    }
                } catch (error) {
                    console.error('Error fetching Data:', error);
                } finally {
                    setLoadingData(false);
                }
            };

            fetchData(); // Call the function to fetch Data
        }
    }, [user]); // Trigger the fetch when the user logs in

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>

    if (user) {
        return (
            <div className="p-4">
                <Navbar />
                <div>
                    Welcome {user.name}! <a href='/api/auth/logout'>Logout</a>
                </div>
                {/* Display the fetched Data */}
                {loadingData ? (
                    <div>Loading Data...</div>
                ) : (
                    <ul>
                        {Data.length > 0 ? (
                            Data.map((show: any) => <li key={show.id}>{show.name}</li>)
                        ) : (
                            <div>No Data found</div>
                        )}
                    </ul>
                )}
            </div>
        );
    }

    return (
        <a href='/api/auth/login'>Login</a>
    );
};

export default HomePage;