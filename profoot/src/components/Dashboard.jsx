import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, faAppleAlt, faDumbbell, faHistory, faBullhorn, 
  faInfoCircle, faPlus, faTimes, faSignOutAlt, faUser, faComments, faChartBar 
} from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import Footer from './Footer';
import Diet from './Diet';
import TrainingSchedule from './TrainingSchedule';
import InjuryHistory from './InjuryHistory';
import Announcements from './Announcements';
import Home from './Home';
import About from './About';
import UserProfile from '../components/UserProfile';
import CommunityForum from '../components/CommunityForum';
import AnalyticsReports from '../components/AnalyticsReports';

function Dashboard({ onLogout }) {
  const [activeSection, setActiveSection] = useState('Home');
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const sections = [
    { name: 'Home', label: 'Home', icon: faHome },
    { name: 'Diet', label: 'Diet', icon: faAppleAlt },
    { name: 'TrainingSchedule', label: 'Training Schedule', icon: faDumbbell },
    { name: 'InjuryHistory', label: 'Injury History', icon: faHistory },
    { name: 'Announcements', label: 'Announcements', icon: faBullhorn },
    { name: 'UserProfile', label: 'User Profile', icon: faUser },
    { name: 'CommunityForum', label: 'Community Forum', icon: faComments },
    { name: 'AnalyticsReports', label: 'Analytics & Reports', icon: faChartBar },
    { name: 'About', label: 'About Us', icon: faInfoCircle },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'Home':
        return <Home />;
      case 'Diet':
        return <Diet />;
      case 'TrainingSchedule':
        return <TrainingSchedule />;
      case 'InjuryHistory':
        return <InjuryHistory />;
      case 'Announcements':
        return <Announcements />;
      case 'UserProfile':
        return <UserProfile />;
      case 'CommunityForum':
        return <CommunityForum />;
      case 'AnalyticsReports':
        return <AnalyticsReports />;
      case 'About':
        return <About />;
      default:
        return null;
    }
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="flex flex-1">
        {isSidebarVisible ? (
          <aside className="bg-blue-800 text-white w-1/4 p-6">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <button onClick={toggleSidebar} className="text-red-500 hover:text-red-600">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <nav className="space-y-4">
              {sections.map((section) => (
                <button
                  key={section.name}
                  onClick={() => setActiveSection(section.name)}
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeSection === section.name ? 'bg-blue-600' : 'hover:bg-blue-700'
                  } flex items-center`}
                >
                  <FontAwesomeIcon icon={section.icon} className="mr-2" />
                  {section.label}
                </button>
              ))}
              <button
                onClick={()=>{
                  sessionStorage.removeItem("profoot-token");
                  onLogout();
                }}
                className="w-full text-left px-4 py-2 rounded hover:bg-red-600 flex items-center text-red-500"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                Logout
              </button>
            </nav>
          </aside>
        ) : (
          <aside className="bg-blue-800 text-white w-16 p-2 flex flex-col items-center">
            <button onClick={toggleSidebar} className="text-white hover:text-red-600 mb-2">
              <FontAwesomeIcon icon={faPlus} size="lg" />
            </button>
            {sections.map((section) => (
              <button
                key={section.name}
                onClick={() => setActiveSection(section.name)}
                className="w-full text-center p-2 rounded hover:bg-blue-600 flex items-center justify-center py-3"
                style={{ margin: '10px 0' }}
              >
                <FontAwesomeIcon icon={section.icon} size="lg" />
              </button>
            ))}
            <button
              onClick={()=>{
                sessionStorage.removeItem("profoot-token");
                onLogout();
              }}
              className="w-full text-center p-2 rounded hover:bg-red-600 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faSignOutAlt} size="lg" className="text-red-500" />
            </button>
          </aside>
        )}

        <main className={`bg-gray-900 text-white flex-1 p-8 overflow-y-auto ${isSidebarVisible ? '' : 'w-full'}`}>
          {renderSection()}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
