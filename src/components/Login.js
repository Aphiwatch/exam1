import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('https://run.mocky.io/v3/a79bd395-a54b-4c44-9feb-0638dfd8988a');
            const users = response.data;

            const user = users.find((u) => u.email === email && u.username === username);
            if (user) {
                setUser(user);
                navigate('/user');
            } else {
                setError('Invalid email or username');
            }
        } catch (error) {
            setError('Failed to fetch users');
        }
    };

    return (
        <div className='bg-gray-100 min-h-screen flex flex-col items-center justify-center py-6 px-4'>
            <div className="max-w-md w-full p-8 rounded-2xl bg-white shadow-md">
                <h2 className='text-gray-800 text-2xl font-bold pb-4'>Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border border-gray-300 rounded p-2 mb-4 w-full"
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="border border-gray-300 rounded p-2 mb-4 w-full"
                    />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white rounded p-2 w-full">Login</button>
                </form>
                {error && <p className="error">{error}</p>}
            </div>
        </div>

    );
};

export default Login;
