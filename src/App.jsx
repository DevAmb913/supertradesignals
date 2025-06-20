// src/App.jsx
import React from 'react';
import Header from './components/Header'; // Import Header
import Footer from './components/Footer'; // Import Footer
import HomePage from './pages/HomePage';   // Import HomePage

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white font-sans antialiased">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;