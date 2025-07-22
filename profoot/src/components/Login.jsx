import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect } from 'react';

function Login({ onLogin, onToggleSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(()=>{
    if(sessionStorage.getItem('profoot-token')){
      onLogin();
    }
  },[])
  const handleLogin = async () => {
    setError(''); // Clear previous error

    try {
      const response = await fetch('https://profoot-backend.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Login failed');
        return;
      }
      sessionStorage.setItem("profoot-token",data.data.token)
      onLogin(email); // Pass the username to App.jsx
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-600 to-purple-600 relative">
      <div className="flex flex-col h-screen bg-gray-800 bg-opacity-90">
        <Navbar />
        <div className="flex items-center justify-center flex-1">
          <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-80">
            <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 mb-4 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 mb-6 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={handleLogin} 
              className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition duration-200 ease-in-out shadow-lg"
            >
              Login
            </button>
            <div className="flex justify-center mt-4">
              <button 
                onClick={onToggleSignup} 
                className="text-blue-300 hover:underline transition duration-200 ease-in-out"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
