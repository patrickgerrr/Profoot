import React from 'react';

function Navbar() {
  return (
    <header className="bg-blue-800 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold text-white">PROFOOT</h1>
        <nav className="space-x-4">
          {/* <a href="/" className="hover:text-blue-300">Home</a>
          <a href="/about" className="hover:text-blue-300">About Us</a>
          <a href="/services" className="hover:text-blue-300">Services</a>
          <a href="/contact" className="hover:text-blue-300">Contact</a> */}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
