import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Thermometer.css';

function Thermometer({ latitude, longitude, temperature, isLoggedIn }) {
    const [savedLocations, setSavedLocations] = useState([]);

    const saveLocation = async () => {
        if (!isLoggedIn) {
            alert('Please log in to save locations.');
            return;
        }
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('Authentication token not found. Please log in again.');
                return;
            }

            await axios.post('/api/saved-locations', {
                name: `Location (${latitude}, ${longitude})`,
                latitude,
                longitude,
                temperature,
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            alert('Location saved successfully!');
            fetchSavedLocations();
        } catch (error) {
            if (error.response?.status === 401) {
                alert('Your session has expired. Please log in again.');
            } else {
                alert('Failed to save location. Please try again.');
            }
            console.error('Failed to save location', error);
        }
    };

    const fetchSavedLocations = async () => {
        if (!isLoggedIn) return;
        
        try {
            const token = localStorage.getItem('token');
            if (!token) return;

            const response = await axios.get('/api/saved-locations', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setSavedLocations(response.data.locations);
        } catch (error) {
            console.error('Failed to retrieve saved locations', error);
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            fetchSavedLocations();
        } else {
            setSavedLocations([]);
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
                    {isLoggedIn && <button onClick={saveLocation}>Save Location</button>}
                </>
            )}
            {isLoggedIn && (
                <div className="saved-locations">
                    <h2>Saved Locations</h2>
                    {savedLocations.length > 0 ? (
                        <ul>
                            {savedLocations.map((location) => (
                                <li key={location.location_id}>
                                    {location.name} - {location.WeatherData.temperature}°F recorded on{' '}
                                    {new Date(location.WeatherData.date_recorded).toLocaleString()}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No saved locations yet.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Thermometer;
