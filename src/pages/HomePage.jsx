// src/pages/HomePage.jsx
import React from 'react';
import logo from '../assets/sts-logo.png'; // Import your logo image

function HomePage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8 relative z-0">
      {/* Central Glowing Orb - as seen in reference image (conceptual, CSS needed for glow) */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>


      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 relative z-10">
        <img
          src={logo}
          alt="SuperTradeSignals Logo"
          className="mx-auto mb-8 w-1/4 max-w-xs" // 25% width, max 320px, middle-aligned, bottom margin
        />
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Intelligent Automation for <br /> Modern Businesses.
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          SuperTradeSignals brings AI automation to your fingertips & streamline tasks. This is v1 of the site, with more features coming soon!
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
            Get in touch
          </button>
          <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-full transition duration-300">
            View services
          </button>
        </div>
      </section>

      {/* Clients/Logos Section (as seen below hero in reference) */}
      <section className="text-center py-8 relative z-10">
        <p className="text-gray-400 text-lg mb-8">Over 50+ businesses trust us</p>
        {/* Reusing existing Footer client logos here, but you can put actual images */}
        <div className="flex justify-center items-center space-x-8 mb-4 opacity-50">
          <span className="text-gray-500 text-lg">Logolpsum</span>
          <span className="text-gray-500 text-lg">Logolpsum</span>
          <span className="text-gray-500 text-lg">Logolpsum</span>
          <span className="text-gray-500 text-lg">Logolpsum</span>
        </div>
      </section>

      {/* Cards Section: What We Offer */}
      <section className="py-16 md:py-24 relative z-10">
        <h3 className="text-4xl font-extrabold text-white text-center mb-12">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: AI-Powered Insights */}
          <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-gray-700 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-purple-400 text-5xl mb-6">💡</div> {/* Placeholder Icon */}
            <h4 className="text-2xl font-bold text-white mb-4">AI-Powered Insights</h4>
            <p className="text-gray-300">
              Leverage cutting-edge artificial intelligence to identify unique trading opportunities and market trends with precision.
            </p>
          </div>

          {/* Card 2: Real-time Signals (V1 Info) */}
          <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-gray-700 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-blue-400 text-5xl mb-6">📊</div> {/* Placeholder Icon */}
            <h4 className="text-2xl font-bold text-white mb-4">Real-time Trading Signals (v1)</h4>
            <p className="text-gray-300">
              Receive instant, actionable trade signals directly to your dashboard. This is the initial version, built for clarity and impact.
            </p>
          </div>

          {/* Card 3: Future Iterations */}
          <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-gray-700 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-green-400 text-5xl mb-6">🚀</div> {/* Placeholder Icon */}
            <h4 className="text-2xl font-bold text-white mb-4">Continuous Innovation</h4>
            <p className="text-gray-300">
              We're just getting started! Expect regular updates, new features, and advanced tools as we iterate and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Small "Our Services" at bottom - as seen in reference */}
      <div className="text-center text-gray-500 text-sm mt-12 py-4">
        Our Services
      </div>
    </main>
  );
}

export default HomePage;