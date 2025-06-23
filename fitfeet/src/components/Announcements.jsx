// Announcements.jsx
import React from 'react';

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: 'New Training Program Launch',
      date: '2024-11-01',
      description: 'We are excited to announce the launch of our new training program designed to enhance your skills.',
    },
    {
      id: 2,
      title: 'Upcoming Workshop',
      date: '2024-11-15',
      description: 'Join us for a workshop on injury prevention and recovery strategies.',
    },
    {
      id: 3,
      title: 'Health Advisory',
      date: '2024-10-28',
      description: 'Please follow the updated health guidelines during training sessions.',
    },
  ];

  // Important announcements from the coach
  const coachAnnouncements = [
    {
      id: 1,
      title: 'Important: Training Schedule Changes',
      date: '2024-11-02',
      description: 'All athletes must be aware of the new training times. Please check the schedule carefully.',
    },
    {
      id: 2,
      title: 'Reminder: Bring Water and Hydrate',
      date: '2024-11-03',
      description: 'It is essential to stay hydrated during training sessions. Bring plenty of water.',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Announcements</h2>

      {/* Important Announcements from Coach */}
      <div className="bg-red-600 text-white p-4 rounded-lg mb-6">
        <h3 className="font-semibold text-lg">Coach's Important Announcements</h3>
        {coachAnnouncements.length > 0 ? (
          coachAnnouncements.map((announcement) => (
            <div key={announcement.id} className="mb-4 border-b border-white pb-2">
              <h4 className="font-semibold">{announcement.title}</h4>
              <p className="text-white">{announcement.date}</p>
              <p>{announcement.description}</p>
            </div>
          ))
        ) : (
          <p>No important announcements from the coach at the moment.</p>
        )}
      </div>

      {/* General Announcements */}
      <div className="bg-gray-800 p-4 rounded-lg border border-white mb-6">
        {announcements.length > 0 ? (
          announcements.map((announcement) => (
            <div key={announcement.id} className="mb-4 border-b border-gray-700 pb-2">
              <h3 className="font-semibold">{announcement.title}</h3>
              <p className="text-gray-400">{announcement.date}</p>
              <p>{announcement.description}</p>
            </div>
          ))
        ) : (
          <p>No announcements at the moment.</p>
        )}
      </div>

      {/* Upcoming Events Section */}
      <h3 className="font-semibold text-xl mb-4">Upcoming Events</h3>
      <ul className="bg-gray-800 p-4 rounded-lg border border-white mb-6">
        <li>Nov 15: Injury Prevention Workshop</li>
        <li>Dec 1: End-of-Year Fitness Challenge</li>
        <li>Nov 17: Match vs Maverics</li>
        <li>Dec 1: Match vs Bulls</li>
        <li>Nov 28:Mental Health imporovemnet session </li>
        <li>Dec 12: Block and Ground opening</li>
      </ul>

      {/* Feedback Section */}
      <h3 className="font-semibold text-xl mb-4">Feedback</h3>
      <form className="bg-gray-800 p-4 rounded-lg border border-white mb-6">
        <textarea placeholder="Leave your feedback here..." className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white" rows="3"></textarea>
        <button className="mt-2 w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500 transition">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Announcements;
