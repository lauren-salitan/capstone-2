import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegistrationForm';
import WeatherForm from './components/WeatherForm';
import Thermometer from './components/Thermometer';
import axios from 'axios';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        // Check if user is logged in by verifying the token in localStorage
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/register" element={<RegisterForm setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/weather" element={<WeatherForm />} />
                    <Route path="/thermometer" element={<Thermometer />} />
                    <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
                </Routes>
            </div>
        </Router>
    );
}

function Home({ isLoggedIn }) {
    return (
        <div>
            <h1>Welcome to the Weather App</h1>
            {isLoggedIn ? (
                <>
                    <WeatherForm />
                    <Thermometer />
                </>
            ) : (
                <p>Please log in to access all features.</p>
            )}
        </div>
    );
}

export default App;

function LoginForm({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/login', { username: 'test', password: 'test' });
            localStorage.setItem('token', response.data.token);
            setIsLoggedIn(true);
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

function RegisterForm({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/register', { username: 'test', password: 'test' });
            localStorage.setItem('token', response.data.token);
            setIsLoggedIn(true);
            navigate('/');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}