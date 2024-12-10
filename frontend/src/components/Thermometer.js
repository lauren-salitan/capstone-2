import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Thermometer.css'; // Create CSS for thermometer styling

function Thermometer({ latitude, longitude, temperature }) {
    const [savedLocations, setSavedLocations] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to save the current weather information for logged-in users
    const saveLocation = async () => {
        if (!isLoggedIn) {
            alert('Please log in to save locations.');
            return;
        }
        try {
            await axios.post('/api/saved-locations', {
                name: `Location (${latitude}, ${longitude})`,
                latitude,
                longitude,
                temperature,
            });
            alert('Location saved successfully!');
            fetchSavedLocations();
        } catch (error) {
            console.error('Failed to save location', error);
        }
    };

    // Function to fetch saved locations for the logged-in user
    const fetchSavedLocations = async () => {
        try {
            const response = await axios.get('/api/saved-locations');
            setSavedLocations(response.data.locations);
        } catch (error) {
            console.error('Failed to retrieve saved locations', error);
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            fetchSavedLocations();
        }
    }, [isLoggedIn]);

    return (
        <div className="thermometer">
            {temperature !== null && (
                <>
                    <h2>Temperature: {temperature}°F</h2>
                    <div className="thermometer-container">
                        <div
                            className="thermometer-mercury"
                            style={{ height: `${temperature}%` }}
                        ></div>
                    </div>
                    <button onClick={saveLocation}>Save Location</button>
                </>
            )}
            <div className="saved-locations">
                <h2>Saved Locations</h2>
                <ul>
                    {savedLocations.map((location) => (
                        <li key={location.location_id}>
                            {location.name} - {location.WeatherData.temperature}°F recorded on {new Date(location.WeatherData.date_recorded).toLocaleString()}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Thermometer;
