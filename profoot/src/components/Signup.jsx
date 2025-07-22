import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Signup({ onLogin, onToggleLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = async () => {
    setError('');
    setSuccess('');

    // Basic password matching validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch('https://profoot-backend.vercel.app/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const { error ,data} = await response.json();
      if (!response.ok) {
        setError(error || "An error occurred during signup.");
        return;
      }
      sessionStorage.setItem("profoot-token",data.token)
      setSuccess("Signup successful!");
      setTimeout(() => onToggleLogin(), 2000); // Redirects to login after a brief delay
    } catch (err) {
      setError("Failed to sign up. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-600 to-purple-600 relative">
      <div className="flex flex-col h-screen bg-gray-800 bg-opacity-90">
        <Navbar />
        <div className="flex items-center justify-center flex-1">
          <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-80">
            <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 mb-4 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type='email'
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 mb-4 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 mb-4 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 mb-6 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={handleSignup} 
              className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition duration-200 ease-in-out shadow-lg"
            >
              Sign Up
            </button>
            <div className="flex justify-center mt-4">
              <button 
                onClick={onToggleLogin} 
                className="text-blue-300 hover:underline transition duration-200 ease-in-out"
              >
                Already have an account? Login
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Signup;
