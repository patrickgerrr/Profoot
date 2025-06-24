import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEdit } from '@fortawesome/free-solid-svg-icons';

function UserProfile({ username }) {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: username,
    email: `${username}${Math.floor(10 + Math.random() * 90)}@gmail.com`, // Generate email with random digits
    bio: 'Fitness enthusiast and avid hiker.',
    team: 'PROFOOT Warriors',
  });

  const [tempUser, setTempUser] = useState({ ...user });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setTempUser({ ...user });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSave = () => {
    setUser(tempUser);
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-8">
      <div className="flex items-center justify-center mb-6">
        <FontAwesomeIcon icon={faUserCircle} size="5x" className="text-blue-500" />
      </div>
      <div className="text-center mb-4">
        <h1 className="text-lg font-semibold">Welcome, {username}!</h1>
      </div>
      {!isEditing ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
          <p className="text-sm text-gray-400">{user.email}</p>
          <p className="text-sm text-gray-400">{user.team}</p>
          <p className="mt-4">{user.bio}</p>
          <button
            onClick={handleEditToggle}
            className="mt-6 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
            Edit Profile
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={tempUser.name}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={tempUser.email}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm mb-1">Team</label>
              <input
                type="text"
                name="team"
                value={tempUser.team}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm mb-1">Bio</label>
              <textarea
                name="bio"
                value={tempUser.bio}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-700 text-white h-20"
              />
            </div>
          </form>
          <div className="flex justify-between mt-6">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
            >
              Save
            </button>
            <button
              onClick={handleEditToggle}
              className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
