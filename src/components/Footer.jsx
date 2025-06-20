// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-transparent text-gray-400 p-8 mt-auto border-t border-gray-700">
      <div className="container mx-auto text-center text-sm">
        <p className="mb-2">Over 50+ businesses trust us</p>
        <div className="flex justify-center items-center space-x-8 mb-4">
          {/* Placeholder for logos. You can replace with actual image tags */}
          <span className="text-gray-500 text-lg">Logolpsum</span>
          <span className="text-gray-500 text-lg">Logolpsum</span>
          <span className="text-gray-500 text-lg">Logolpsum</span>
          <span className="text-gray-500 text-lg">Logolpsum</span>
        </div>
        <p>&copy; {new Date().getFullYear()} SuperTradeSignals. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;