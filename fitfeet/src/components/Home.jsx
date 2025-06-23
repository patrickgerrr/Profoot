import React from 'react';

function Home() {
  return (
    <>
    <div className="bg-gray-900 text-white w-full h-full">
      {/* Navbar */}
      

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome to PROFOOT</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Your ultimate destination for personalized fitness, diet plans, and injury management.
          </p>
          <a href="#services" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Explore Our Services
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">About PROFOOT</h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            PROFOOT is dedicated to helping individuals achieve their fitness goals with a focus on injury prevention, customized diet plans, and structured workout routines. Join us and start your journey to a healthier, fitter you!
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Our Services</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Service Card 1 */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:bg-blue-800 transition duration-300">
              <h4 className="text-xl font-bold mb-2">Personalized Diet Plans</h4>
              <p className="text-gray-400">
                Tailored meal plans to suit your fitness goals, whether it's weight loss, muscle gain, or maintenance.
              </p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:bg-blue-800 transition duration-300">
              <h4 className="text-xl font-bold mb-2">Training Schedules</h4>
              <p className="text-gray-400">
                Structured workouts with different levels of intensity, designed to help you stay on track.
              </p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:bg-blue-800 transition duration-300">
              <h4 className="text-xl font-bold mb-2">Injury Management</h4>
              <p className="text-gray-400">
                Track your injury history and get guidance on recovery and prevention for long-term health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
    </>
  );
}

export default Home;
