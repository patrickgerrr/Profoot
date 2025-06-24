import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(''); // Track username state

  const handleLogin = (username) => {
    setUsername(username); // Set the username on login
    setIsLoggedIn(true); // Mark the user as logged in
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername(''); // Reset the username on logout
  };

  const [showSignup, setShowSignup] = useState(false);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard username={username} onLogout={handleLogout} />
      ) : showSignup ? (
        <Signup onLogin={handleLogin} onToggleLogin={toggleSignup} />
      ) : (
        <Login onLogin={handleLogin} onToggleSignup={toggleSignup} />
      )}
    </div>
  );
}

export default App;
