import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoggedInUserNavbar from '../../components/LoggedInUserNavbar';

export default function AllRestaurant() {
    const [businesses, setBusinesses] = useState([]); // Use an array to store multiple businesses
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBusiness = async () => {
            const token = localStorage.getItem('token');  // Ensure the token exists

            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}business/getallbusiness`, {
                    headers: {
                        Authorization: `Bearer ${token}`,  // Send token with the request
                    },
                });

                console.log('API Response:', response.data);  // Log the full API response

                // Access the 'data' key from the response to get the businesses array
                if (response.data && Array.isArray(response.data.data)) {
                    setBusinesses(response.data.data);  // Set the array of businesses
                } else {
                    setBusinesses([]);  // If no valid data is present, set as empty array
                }
            } catch (err) {
                console.error('Error fetching business:', err);
                setError('Failed to fetch business details');
            } finally {
                setLoading(false);  // Set loading to false after data is fetched
            }
        };

        fetchBusiness();
    }, []);  // Empty dependency array to call this effect once on mount

    if (loading) {
        return <p>Loading...</p>;  // Show loading message while data is being fetched
    }

    if (error) {
        return <p>{error}</p>;  // Show error message if API call fails
    }

    return (
        <>
        <LoggedInUserNavbar/>
        <div className="container mt-2">
            <h1 className="text-center mb-5">All Restaurants</h1>

            {/* Render each business using map */}
            {businesses.length > 0 ? (
                businesses.map((business) => (
                    <div key={business._id} className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title"><strong>Business Name:</strong> {business.businessName || 'N/A'}</h5>
                            <p className="card-text"><strong>Business Type:</strong> {business.businessType || 'N/A'}</p>
                            <p className="card-text"><strong>Location:</strong> {business.businessAddress || 'Not provided'}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No business data available</p>  // Message when there are no businesses
            )}
        </div>
        </>
    );
}
