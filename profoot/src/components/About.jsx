import React from 'react';

function About() {
  return (
    <div className="bg-gray-900 text-white w-full h-full">
      {/* Header */}
      

      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">About Us</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Get to know more about PROFOOT, our mission, our values, and our dedicated team!
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            At PROFOOT, our mission is to provide personalized, sustainable fitness solutions that help people achieve their health and fitness goals safely and effectively. We focus on injury prevention, customized diet plans, and structured workout routines for long-term success.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Our Values</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Value Card 1 */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:bg-blue-800 transition duration-300">
              <h4 className="text-xl font-bold mb-2">Integrity</h4>
              <p className="text-gray-400">We are committed to honesty, transparency, and the highest ethical standards in everything we do.</p>
            </div>
            {/* Value Card 2 */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:bg-blue-800 transition duration-300">
              <h4 className="text-xl font-bold mb-2">Passion</h4>
              <p className="text-gray-400">Our passion for fitness and health drives us to make a positive impact on the lives of our clients.</p>
            </div>
            {/* Value Card 3 */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:bg-blue-800 transition duration-300">
              <h4 className="text-xl font-bold mb-2">Excellence</h4>
              <p className="text-gray-400">We strive for excellence in everything we do, from our services to our customer interactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Meet the Team</h3>
          <div className="grid gap-8 md:grid-cols-4">
            {/* Team Member Card 1 */}
            <div className="border border-white bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:bg-blue-800 transition duration-300">
              <h4 className="text-xl font-bold mb-2">Bharath Murari</h4>
              <p className="text-gray-400">Certified Fitness Trainer</p>
              <p className="text-gray-500 mt-4">Bharath has over 10 years of experience helping clients achieve their fitness goals.</p>
            </div>
            {/* Team Member Card 2 */}
            <div className=" border border-white bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:bg-blue-800 transition duration-300">
              <h4 className="text-xl font-bold mb-2">Nithin mukka</h4>
              <p className="text-gray-400">Nutrition Specialist</p>
              <p className="text-gray-500 mt-4">Nithin specializes in creating tailored diet plans that support long-term health.</p>
            </div>
            {/* Team Member Card 3 */}
            <div className="border border-white bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:bg-blue-800 transition duration-300">
              <h4 className="text-xl font-bold mb-2">Yuvasai</h4>
              <p className="text-gray-400">Physical Therapist</p>
              <p className="text-gray-500 mt-4">Yuvasai provides injury management and recovery support for clients.</p>
            </div>
            <div className=" border border-white bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:bg-blue-800 transition duration-300">
              <h4 className="text-xl font-bold mb-2">Manoj</h4>
              <p className="text-gray-400">Physical Therapist</p>
              <p className="text-gray-500 mt-4">Manoj provides injury management and recovery support for clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
            Become a part of PROFOOT and start your journey towards a healthier, fitter life. Get in touch with us to learn more about our services and how we can help you.
          </p>
          <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
}

export default About;
