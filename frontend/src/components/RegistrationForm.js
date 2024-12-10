import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
    const [user, setUser] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/users/register', user);
            alert('User registered successfully');
        } catch (err) {
            console.error(err);
            setError('Failed to register: ' + err.response?.data?.message || err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" value={user.username} onChange={handleChange} placeholder="Username" />
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
            <button type="submit">Register</button>
            {error && <p>{error}</p>}
        </form>
    );
}

export default RegisterForm;
