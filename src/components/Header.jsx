// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header className="bg-transparent text-white p-4 shadow-lg relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-wider">XTRAT</h1> {/* Placeholder for actual logo later */}
        <nav>
          <ul className="flex items-center space-x-6">
            <li><a href="#" className="hover:text-purple-400 transition duration-200">Home</a></li>
            <li><a href="#" className="hover:text-purple-400 transition duration-200">About</a></li>
            <li><a href="#" className="hover:text-purple-400 transition duration-200">Blog</a></li>
            <li><a href="#" className="hover:text-purple-400 transition duration-200">Contact</a></li>
            <li>
              <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full font-semibold transition duration-300 shadow-md">
                Book a call
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;